var week = 7
var month = 30
var gasCost = 0.00082

var $table = $('#table-result tbody')

async function testSimulate() {
    $('#btn-simulate').prop('disabled', true)
    const charId = $('#combat-character').val()
    const weapId = $('#combat-weapon').val()
    const stamina = $('#combat-stamina').val()
    $table.html('')
    
    try {
        if (!charId) throw Error('Please enter a character.')
        if (!weapId) throw Error('Please enter a weapon.')
        if (!stamina) throw Error('Please select a stamina multiplier.')
        
        $table.html('<tr><td class="text-white text-center" colspan="13">Calculating....</span></tr>')

        const fightGasOffset = await fetchFightGasOffset()
        const fightBaseline = await fetchFightBaseline()

        const charData = characterFromContract(charId, await getCharacterData(charId))
        const weapData = weaponFromContract(weapId, await getWeaponData(weapId))
        const targets = await characterTargets(charId, weapId)
        const enemies = await getEnemyDetails(targets)

        const results = await Promise.all(enemies.map(async (enemy) => {
            const alignedPower = getAlignedCharacterPower(charData, weapData)
            const skill = fromEther(await usdToSkill(web3.utils.toBN(Number(fightGasOffset) + ((Number(fightBaseline) * Math.sqrt(parseInt(enemy.power) / 1000)) * parseInt(stamina)))));            
            const exp = Math.floor((enemy.power / alignedPower) * 32) * parseInt(stamina)            
            return {
                enemy,
                skill,
                exp
            }
        }))

        let minSkill = 0, maxSkill = 0, minExp = 0, maxExp = 0;

        results.forEach(data => {
            const skill = Number(data.skill)
            const exp = Number(data.exp)

            if (minSkill === 0) minSkill = skill
            if (skill > maxSkill) maxSkill = skill
            if (skill < minSkill) minSkill = skill
            
            if (minExp === 0) minExp = exp
            if (exp > maxExp) maxExp = exp
            if (exp < minExp) minExp = exp
        })

        $table.html('')
        const fights = parseInt(288 / (stamina * 40))        
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
        alert(e.message)
        $('#btn-simulate').removeAttr('disabled')
    }
}