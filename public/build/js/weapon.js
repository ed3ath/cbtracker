var $table = $('#table-weapons tbody')
var currElement = 'all'
var currType = 'all'

async function loadWeaponListing() {
    $('.btn-refresh').prop('disabled', true)
    $('#filter-element').prop('disabled', true)
    $('#filter-type').prop('disabled', true)
    $.get(`https://cbtracker-api.herokuapp.com/market/weapons?network=${currentNetwork}`, async result => {
        $table.html('')
        if (result.length > 0) {
            $table.append(await Promise.all(result.map(async weapId => {
                const weapData = weaponFromContract(weapId, await getWeaponData(weapId))
                const price = await getFinalPrice(conAddress[currentNetwork].weapon, weapId)
                if (parseFloat(price) > 0) {
                    let stars = '', attr = '', type = 'hybrid';
                    for (let i = 0; i <= weapData.stars; i++) {
                        stars += '<img class="me-1" src="/img/star.svg" alt="Star" width="20">';
                    }
                    if (weapData.stat1Value > 0) {
                        attr += `<img class="me-1" src="/img/${traitToIcon(weapData.stat1Type)}" width="20">${weapData.stat1} +${weapData.stat1Value}`;
                    }
                    if (weapData.stat2Value > 0) {
                        attr += `<br><img class="me-1" src="/img/${traitToIcon(weapData.stat2Type)}" width="20">${weapData.stat2} +${weapData.stat2Value}`;
                    }
                    if (weapData.stat3Value > 0) {
                        attr += `<br><img class="me-1" src="/img/${traitToIcon(weapData.stat3Type)}" width="20">${weapData.stat3} +${weapData.stat3Value}`;
                    }
                    if (weapData.bonusPower > 0) {
                        attr += `<br>BONUS +${weapData.bonusPower}`;
                    }
                    if (parseInt(weapData.stars) === 2) {
                        if (parseInt(weapData.traitNum) === parseInt(weapData.stat1Type)) type = 'pure'
                        else type = 'semi'
                    }
                    if (parseInt(weapData.stars) === 3) {
                        if (parseInt(weapData.traitNum) === parseInt(weapData.stat1Type) && parseInt(weapData.traitNum) === parseInt(weapData.stat2Type)) type = 'pure'
                        else type = 'semi'
                    }
                    if (parseInt(weapData.stars) === 4) {
                        if (parseInt(weapData.traitNum) === parseInt(weapData.stat1Type) &&
                            parseInt(weapData.traitNum) === parseInt(weapData.stat2Type) &&
                                parseInt(weapData.traitNum) === parseInt(weapData.stat3Type)) type = 'pure'
                        else if ((parseInt(weapData.traitNum) === parseInt(weapData.stat1Type) || parseInt(weapData.stat1Type) === parseInt(WeaponTrait.PWR)) && 
                        (parseInt(weapData.traitNum) === parseInt(weapData.stat2Type) || parseInt(weapData.stat2Type) === parseInt(WeaponTrait.PWR)) &&
                        (parseInt(weapData.traitNum) === parseInt(weapData.stat3Type) || parseInt(weapData.stat3Type) === parseInt(WeaponTrait.PWR))) type = 'semi'
                        else type = 'hybrid'
                    }
                    return `
                        <tr class="weapon-row" data-price="${parseFloat(fromEther(price)).toFixed(2)}" data-element="${weapData.element.toString().toLowerCase()}" data-type="${type}">
                            <td class="align-middle text-white">${weapId}</td>
                            <td class="align-middle text-white">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="/img/${elementToIcon(weapData.trait)}" alt="${weapData.element}" width="20">
                                </div>
                            </td>
                            <td class="align-middle text-white">
                                ${stars}
                            </td>
                            <td class="align-middle text-white">
                                ${attr}
                            </td>
                            <td class="align-middle text-white">${getAvgStats(weapData)}</td>
                            <td class="align-middle text-white">${getTotalMultiplier(weapData)}x</td>
                            <td class="align-middle text-white">${parseFloat(fromEther(price)).toFixed(4)} SKILL</td>
                            <td class="align-middle text-white">
                                <button type="button" class="btn btn-warning btn-sm mb-1" onclick="displayCalculator('${weapId}')">Calculator</button><br>
                                <a href="https://app.cryptoblades.io/#/nft-display/weapon/${weapId}" target="_blank" class="btn btn-sm btn-success">Buy</a>
                            </td>
                        </tr>`
                }
            })))
        } else {
            $table.append('<tr><td class="text-center text-white" colspan="8">No weapon listed</td></tr>')
        }
        sortTable()
        filterChanges()
        $('.btn-refresh').removeAttr('disabled')
        $('#filter-element').removeAttr('disabled')
        $('#filter-type').removeAttr('disabled')
    })
}

async function refresh() {
    await loadWeaponListing()
}

function elementToIcon(trait) {
    switch (trait) {
        case WeaponElement.Fire: return 'fire.png';
        case WeaponElement.Earth: return 'earth.png';
        case WeaponElement.Water: return 'water.png';
        case WeaponElement.Lightning: return 'lightning.png';
        default: return '???';
    }
}

function traitToIcon(trait) {
    switch (trait) {
        case WeaponTrait.STR: return 'fire.png';
        case WeaponTrait.DEX: return 'earth.png';
        case WeaponTrait.INT: return 'water.png';
        case WeaponTrait.CHA: return 'lightning.png';
        case WeaponTrait.PWR: return 'pwr.svg';
        default: return '???';
    }
}

function getAvgStats(weapData) {
    let total = 0, count = 0
    if (weapData.stat1Value) {
        count ++;
        total += parseInt(weapData.stat1Value);
    }
    if (weapData.stat2Value) {
        count ++;
        total += parseInt(weapData.stat2Value);
    }
    if (weapData.stat3Value) {
        count ++;
        total += parseInt(weapData.stat3Value);
    }
    return parseInt(total/count)
}

function getTotalMultiplier(weapData) {
    let total = 0
    if (weapData.stat1Value > 0){
        if (weapData.traitNum === weapData.stat1Value) {
            total += getMult(parseInt(weapData.stat1Value) * 0.002675);
        } else if (weapData.traitNum === WeaponTrait.PWR) {
            total += getMult(parseInt(weapData.stat1Value) * 0.002575);
        } else {
            total += getMult(parseInt(weapData.stat1Value) * 0.0025);
        }
    }
    if (weapData.stat2Value > 0){
        if (weapData.traitNum === weapData.stat2Value) {
            total += getMult(parseInt(weapData.stat2Value) * 0.002675);
        } else if (weapData.traitNum === WeaponTrait.PWR) {
            total += getMult(parseInt(weapData.stat2Value) * 0.002575);
        } else {
            total += getMult(parseInt(weapData.stat2Value) * 0.0025);
        }
    }
    if (weapData.stat3Value > 0){
        if (weapData.traitNum === weapData.stat3Value) {
            total += getMult(parseInt(weapData.stat3Value) * 0.002675);
        } else if (weapData.traitNum === WeaponTrait.PWR) {
            total += getMult(parseInt(weapData.stat3Value) * 0.002575);
        } else {
            total += getMult(parseInt(weapData.stat3Value) * 0.0025);
        }
    }
    return parseFloat(total).toFixed(2)
}

function getMult(value) {
    return 1 + value
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table-weapons");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = $(rows[i]).data('price');
            y = $(rows[i + 1]).data('price');
            if (Number(x) > Number(y)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function filterChanges() {
    $('.weapon-row').show();
    if (currElement !== 'all' || currType !== 'all') {        
        if (currElement !== 'all' && currType !== 'all') {
            $('.weapon-row').each((f, i) => {
                if($(i).data('type') !== currType || $(i).data('element') !== currElement) {
                    $(i).hide();
                }
            })
        } else {
            if (currElement !== 'all' && currType === 'all') {
                $('.weapon-row').each((f, i) => {
                    if( $(i).data('element') !== currElement) {
                        $(i).hide();
                    }
                })
            } else {
                $('.weapon-row').each((f, i) => {
                    if( $(i).data('type') !== currType) {
                        $(i).hide();
                    }
                })
            }
        }
    }
}

function displayCalculator(weapId) {
    $('#cal-weap').val(weapId)
    $('#cal-char').val('')    
    $('#cal-result').html('')
    $('#cal-stamina').html(new Option('-- Select multiplier --', ''))

    for (var i = 1; i <= 5; i++) {
        $('#cal-stamina').append(`<option value="${i}">${i * 40} stamina (x${i})</option>`)
    }

    $('#modal-rewards-cal').modal('show', {
        backdrop: 'static',
        keyboard: false
    })
}

async function calRewards() {
    $('#btn-cal').prop('disabled', true)
    var weapId = $('#cal-weap').val()
    var charId = $('#cal-char').val()    
    var stamina = $('#cal-stamina').val()
    var calResult = $('#cal-result')
    try {
        if (!weapId) throw Error('Please select a weapon.')
        if (!charId) throw Error('Please enter a character.')
        if (!stamina) throw Error('Please select a stamina multiplier.')

        calResult.html('Calculating estimated rewards...')

        var charData = characterFromContract(charId, await getCharacterData(charId))
        var weapData = weaponFromContract(weapId, await getWeaponData(weapId))
        var targets = await characterTargets(charId, weapId)
        var enemies = await getEnemyDetails(targets)

        const results = await Promise.all(enemies.map(async (enemy) => {
            const alignedPower = getAlignedCharacterPower(charData, weapData)
            const skill = fromEther((await getTokenReward(enemy.power)).toString().split('.')[0]);            
            const exp = Math.floor((enemy.power / alignedPower) * 32)
            return {
                enemy,
                skill,
                exp,
                power: alignedPower
            }
        }))

        let minSkill = 0, maxSkill = 0, minExp = 0, maxExp = 0, minPower = 0, maxPower = 0;

        results.forEach(data => {
            const skill = Number(data.skill)
            const exp = Number(data.exp)
            const power = Number(data.power)

            if (minSkill === 0) minSkill = skill
            if (skill > maxSkill) maxSkill = skill
            if (skill < minSkill) minSkill = skill
            
            if (minExp === 0) minExp = exp
            if (exp > maxExp) maxExp = exp
            if (exp < minExp) minExp = exp

            if (minPower === 0) minPower = power
            if (power > maxPower) maxPower = power
            if (power < minPower) minPower = power
        })

        calResult.html('<span class="text-danger">Power</span> | <span class="text-success">Reward</span> | <span class="text-warning">XP</span> <br><hr>')
        calResult.append(`<span class="text-danger">${parseInt(minPower)}-${parseInt(maxPower)}</span> | <span class="text-success">${parseFloat(minSkill * stamina).toFixed(6)}-${parseFloat(maxSkill * stamina).toFixed(6)}</span> | <span class="text-warning">${parseInt(minExp * stamina)}-${parseInt(maxExp * stamina)}</span>`)
        $('#btn-cal').removeAttr('disabled')
    } catch (e) {
        calResult.html(e.message)
        $('#btn-cal').removeAttr('disabled')
    }
}

$("#filter-element").on('change', (e) => {
    currElement = e.currentTarget.value
    filterChanges()
    
})

$("#filter-type").on('change', (e) => {
    currType = e.currentTarget.value
    filterChanges()
})

$("#select-network").on('change', (e) => {
    updateNetwork(e.currentTarget.value)
    populateNetwork()
    refresh()
})

loadWeaponListing()