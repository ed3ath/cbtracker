var week = 7
var month = 30

var $table = $('#table-result tbody')

async function testSimulate() {
    $('#btn-simulate').prop('disabled', true)
    var charId = $('#combat-character').val()
    var weapId = $('#combat-weapon').val()
    $table.html('')
    
    try {
        if (!charId) throw Error('Please enter a character.')
        if (!weapId) throw Error('Please enter a weapon.')
        
        $table.html('<tr><td class="text-white text-center" colspan="13">Calculating....</span></tr>')

        var charData = characterFromContract(charId, await getCharacterData(charId))
        charData.power = parseInt(await conCharacters.methods.getTotalPower(charId).call());
        var weapData = weaponFromContract(weapId, await getWeaponData(weapId))
        var targets = await characterTargets(charId, weapId)
        var enemies = await getEnemyDetails(targets)

        var results = await Promise.all(enemies.map(async (enemy) => {
            var alignedPower = getAlignedCharacterPower(charData, weapData)
            var skill = fromEther((await getTokenReward(enemy.power)).toString().split('.')[0]);            
            var exp = Math.floor((enemy.power / alignedPower) * 32)
            return {
                enemy,
                skill,
                exp
            }
        }))

        let minSkill = 0, maxSkill = 0, minExp = 0, maxExp = 0;

        results.forEach(data => {
            var skill = Number(data.skill)
            var exp = Number(data.exp)

            if (minSkill === 0) minSkill = skill
            if (skill > maxSkill) maxSkill = skill
            if (skill < minSkill) minSkill = skill
            
            if (minExp === 0) minExp = exp
            if (exp > maxExp) maxExp = exp
            if (exp < minExp) minExp = exp
        })

        $table.html('')
        var fights = parseInt(288 / 40)        
        for(var i = fights; i > 0; i--) {
            $table.append(` <tr>
                                <td class="text-white">${i}</td>
                                <td class="text-success">${parseFloat(minSkill * i).toFixed(6)}</td>
                                <td class="text-success">${parseFloat(maxSkill * i).toFixed(6)}</td>
                                <td class="text-warning">${parseInt(minExp * i)}</td>
                                <td class="text-warning">${parseInt(maxExp * i)}</td>
                                <td class="text-success">${parseFloat(minSkill * i * week).toFixed(6)}</td>
                                <td class="text-success">${parseFloat(maxSkill * i * week).toFixed(6)}</td>
                                <td class="text-warning">${parseInt(minExp * i * week)}</td>
                                <td class="text-warning">${parseInt(maxExp * i * week)}</td>
                                <td class="text-success">${parseFloat(minSkill * i * month).toFixed(6)}</td>
                                <td class="text-success">${parseFloat(maxSkill * i * month).toFixed(6)}</td>
                                <td class="text-warning">${parseInt(minExp * i * month)}</td>
                                <td class="text-warning">${parseInt(maxExp * i * month)}</td>
                            </tr>`)
        }
        $('#btn-simulate').removeAttr('disabled')
    } catch (e) {
        console.log(e)
        alert(e.message)
        $('#btn-simulate').removeAttr('disabled')
    }
}

$("#select-network").on('change', (e) => {
    updateNetwork(e.currentTarget.value)
    populateNetwork()
})