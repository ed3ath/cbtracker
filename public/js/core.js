var accounts = localStorage.getItem('accounts')
var names = localStorage.getItem('names')
var hideAddress = (localStorage.getItem('hideAddress') === 'true')
var hideChars = (localStorage.getItem('hideChars') === 'true')
var hideSkills = (localStorage.getItem('hideSkills') === 'true')
var hideUnstake = (localStorage.getItem('hideUnstake') === 'true')
var currCurrency = localStorage.getItem('currency')
var currencies = ['php', 'aed', 'ars', 'aud', 'brl', 'cny', 'eur', 'gbp', 'hkd', 'idr', 'inr', 'jpy', 'myr', 'sgd', 'thb', 'twd', 'usd', 'vnd']
var rewardsClaimTaxMax = 0;
var storeAccounts = []
var storeNames = {}
var skillPrice = 0
var localPrice = 0
var bnbPrice = 0
var usdPrice = 0
var gasPrice = 0
var totalSouls = 0
var $table = $('#table-accounts tbody')

if (!currCurrency) currCurrency = 'usd'
if (accounts && names) {
    storeAccounts = JSON.parse(accounts)
    storeNames = JSON.parse(names)
}

populateCurrency()
updateBalanceLabel()

if (hideAddress) {
    $('#btn-privacy').prop('checked', true)
} else {
    $('#btn-privacy').removeAttr('checked')
}

if (hideChars) {
    $('#btn-hchars').prop('checked', true)
} else {
    $('#btn-hchars').removeAttr('checked')
}

if (hideSkills) {
    $('#btn-hskills').prop('checked', true)
} else {
    $('#btn-hskills').removeAttr('checked')
}

if (hideUnstake) {
    $('#btn-hunstake').prop('checked', true)
} else {
    $('#btn-hunstake').removeAttr('checked')
}

var $cardIngame = $('#card-ingame'),
    $cardUnclaim = $('#card-unclaim'),
    $cardStake = $('#card-stake'),
    $cardWallet = $('#card-wallet'),
    $cardTotal = $('#card-total'),
    $cardTotalTitle = $('#card-total-title'),
    $cardBnb = $('#card-bnb'),
    $cardAccount = $('#card-account'),
    $cardChar = $('#card-char'),
    $cardPrice = $('#card-price'),
    $cardReward = $('#card-reward'),
    $cardClaim = $('#card-claim'),
    $cardReward = $('#card-reward'),
    $cardSouls = $('#card-souls'),
    $convIngame = $('#conv-ingame'),
    $convUnclaim = $('#conv-unclaim'),
    $convStake = $('#conv-stake'),
    $convWallet = $('#conv-wallet'),
    $convTotal = $('#conv-total'),
    $convBnb = $('#conv-bnb'),
    $convPrice = $('#conv-price')

$('document').ready(async () => {
    priceTicker()
    setRewardsClaimTaxMax()
    statTicker()
    lastReset = parseInt(await getLastReset())
    resetTime = parseInt(lastReset)
    localStorage.setItem(`${currentNetwork}-reset`, resetTime)

    setInterval(() => {
        fiatConversion()
    }, 1000)
    setInterval(() => {
        priceTicker()
    }, 10000)
    setInterval(() => {
        statTicker()
    }, 1000)
    loadData()

})

async function refresh() {
    loadData()
    clearFiat()
    fiatConversion()
}

function fiatConversion() {
    if (isElementNotZero($cardIngame)) $convIngame.html(`(${toLocaleCurrency(convertToFiat($cardIngame.html()))})`)
    if (isElementNotZero($cardUnclaim)) $convUnclaim.html(`(${toLocaleCurrency(convertToFiat($cardUnclaim.html()))})`)
    if (isElementNotZero($cardStake)) $convStake.html(`(${toLocaleCurrency(convertToFiat($cardStake.html()))})`)
    if (isElementNotZero($cardWallet)) $convWallet.html(`(${toLocaleCurrency(convertToFiat($cardWallet.html()))})`)
    if (isElementNotZero($cardTotal)) $convTotal.html(`(${toLocaleCurrency(convertToFiat($cardTotal.html()))})`)
    if (isElementNotZero($cardBnb)) $convBnb.html(`(${toLocaleCurrency(convertBnbToFiat($cardBnb.html()))})`)
    if (isElementNotZero($cardPrice) && currCurrency !== 'usd') $convPrice.html(`(${toLocaleCurrency(localPrice)})`)
}
function clearFiat() {
    $convIngame.html('')
    $convUnclaim.html('')
    $convStake.html('')
    $convWallet.html('')
    $convTotal.html('')
    $convBnb.html('')
    $convPrice.html('')
}

function isElementNotZero($elem) {
    return (parseFloat(localeCurrencyToNumber($elem.html())) > 0)
}

function localeCurrencyToNumber(val) {
    return Number(String(val).replace(/[^0-9\.]+/g, ""))
}

function convertToFiat(val) {
    return localeCurrencyToNumber(val) * localPrice
}

function convertBnbToFiat(val) {
    return parseFloat(val) * bnbPrice
}

function toLocaleCurrency(val) {
    return val.toLocaleString('en-US', { style: 'currency', currency: currCurrency.toUpperCase() })
}

function formatNumber(val, dec = 6) {
    return Number(val).toLocaleString('en', {
        minimumFractionDigits: dec,
        maximumFractionDigits: dec
    });
}

async function loadData() {
    $('.btn-refresh').prop('disabled', true)
    $table.html('');
    $cardIngame.html(0)
    $cardUnclaim.html(0)
    $cardStake.html(0)
    $cardWallet.html(0)
    $cardTotal.html(0)
    $cardBnb.html(0)
    $cardChar.html(0)
    $cardSouls.html(0)
    $cardAccount.html(storeAccounts.length)
    totalSouls = 0

    if (currentNetwork === 'bsc') {
        var accSkillStaked30 = await multicall(getNFTCall(SkillStaking30, conAddress[currentNetwork].skillStaking30, 'balanceOf', storeAccounts.map(acc => [acc])))
        var accSkillStaked90 = await multicall(getNFTCall(SkillStaking90, conAddress[currentNetwork].skillStaking90, 'balanceOf', storeAccounts.map(acc => [acc])))
        var accSkillStaked180 = await multicall(getNFTCall(SkillStaking180, conAddress[currentNetwork].skillStaking180, 'balanceOf', storeAccounts.map(acc => [acc])))
    }

    var accUnclaimed = await multicall(getNFTCall(CryptoBlades, conAddress[currentNetwork].cryptoBlades, 'getTokenRewardsFor', storeAccounts.map(acc => [acc])))

    var skillMultiplier = Number(fromEther(await getSkillMultiplier(await getSkillPartnerId())))

    var fRowHtml = await Promise.all(storeAccounts.map(async (address, i) => {
        let rowHtml = ''
        var charIds = await getAccountCharacters(address)
        var binance = await getBNBBalance(address)
        var wallet = await getSkillWallet(address)
        var staked = (currentNetwork === 'bsc' ? (web3.utils.toBN(sumOfStakedSkill(accSkillStaked30[i], accSkillStaked90[i], accSkillStaked180[i]))) : await getStakedRewards(address))
        var unclaimed = accUnclaimed[i]
        var claimable = unclaimed * skillMultiplier

        var charCount = parseInt($cardChar.html())
        charCount += charIds.length
        $cardChar.html(charCount)

        var charLen = charIds.length

        $cardIngame.html((formatNumber(parseFloat($cardIngame.html()) + parseFloat(fromEther(claimable)))))
        $cardUnclaim.html((formatNumber(parseFloat($cardUnclaim.html()) + parseFloat(fromEther(unclaimed)))))
        $cardStake.html((formatNumber(parseFloat($cardStake.html()) + parseFloat(fromEther(staked)))))
        $cardWallet.html((formatNumber(parseFloat($cardWallet.html()) + parseFloat(fromEther(wallet)))))
        $cardTotal.html((formatNumber(parseFloat($cardTotal.html()) + parseFloat(fromEther(sumOfArray([unclaimed, staked, wallet]))))))
        $cardBnb.html((formatNumber(parseFloat($cardBnb.html()) + parseFloat(fromEther(binance)))))

        let charHtml = '', chars = {}

        var charsData = (await multicall(getNFTCall(Characters, conAddress[currentNetwork].character, 'get', charIds.map(charId => [charId])))).map((data, i) => characterFromContract(charIds[i], data))
        var charsSta = (await multicall(getNFTCall(Characters, conAddress[currentNetwork].character, 'getStaminaPoints', charIds.map(charId => [charId])))).map(sta => sta[0])        
        var charsPower = (await multicall(getNFTCall(Characters, conAddress[currentNetwork].character, 'getTotalPower', charIds.map(charId => [charId]))))
        var charsExp = await conCryptoBlades.methods.getXpRewards(charIds).call()
        
        if (charLen > 0) {
            chars = charIds.map((charId, i) => {
                var charData = charsData[i]
                var power = charsPower[i]
                var exp = charsExp[i]
                var sta = charsSta[i]
                var nextTargetExpLevel = getNextTargetExpLevel(charData.level)
                totalSouls += ((CharacterPower(charData.level) * 4) - power)
                return {
                    charId,
                    power,
                    exp,
                    sta,
                    trait: charData.trait,
                    nextLevel: nextTargetExpLevel.level + 1,
                    nextExp: nextTargetExpLevel.exp - (parseInt(charData.xp) + parseInt(exp)),
                    mustClaim: nextTargetExpLevel.exp - (parseInt(charData.xp) + parseInt(exp)) <= 0,
                    level: charData.level + 1,
                    element: charData.traitName,
                };
            })
            charHtml = `<td class="char-column" data-cid="${chars[0].charId}">${chars[0].charId}</td>
                        <td class="char-column">${levelToColor(chars[0].level)}</td>
                        <td class="char-column">${elemToColor(chars[0].element)}</td>
                        <td class="char-column">${Number(chars[0].power).toLocaleString('en-US')} / ${Number(CharacterPower(chars[0].level - 1) * 4).toLocaleString('en-US')}</td>
                        <td class="char-column"><span data-cid="${chars[0].charId}">${chars[0].exp}</span> xp</td>
                        <td class="char-column">${chars[0].nextLevel}<br/><span style='font-size: 10px'>${(chars[0].mustClaim ? '<span class="text-gold">(Claim now)</span>' : `<span data-xp="${chars[0].charId}">(${Number(chars[0].nextExp).toLocaleString('en-US')}</span> xp left)`)}</span></td>
                        <td class="char-column" data-sta="${chars[0].charId}">${staminaToColor(chars[0].sta)}<br/>${staminaFullAt(chars[0].sta)}</td>`
        } else {
            charHtml = '<td class="char-column" colspan="7"></td>'
        }
        if (charLen < 1) {
            charLen = 1
        }
        var skillTotal = sumOfArray([unclaimed, staked, wallet])
        rowHtml += ` <tr class="text-white align-middle" data-row="${address}">
                            <td rowspan="${charLen}" class='align-middle' data-id="${address}">${storeNames[address]}</td>
                            <td rowspan="${charLen}" class='align-middle address-column'>${address}</td>
                            ${charHtml}
                            <td class="skill-column" rowspan="${charLen}" class='align-middle'>${formatNumber(fromEther(unclaimed))}<br />${(Number(parseFloat(fromEther(unclaimed)).toFixed(6)) > 0 ? `<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(unclaimed))))})</span>` : '')}</td>
                            <td class="skill-column" rowspan="${charLen}" class='align-middle'>${formatNumber(fromEther(claimable))}<br />${(Number(parseFloat(fromEther(claimable)).toFixed(6)) > 0 ? `<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(claimable))))})</span>` : '')}</td>
                            <td class="skill-column" rowspan="${charLen}" class='align-middle'>${formatNumber(fromEther(staked))}<br />${(Number(parseFloat(fromEther(staked)).toFixed(6)) > 0 ? `<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(staked))))})</span>` : '')}</td>
                            <td class="skill-column" rowspan="${charLen}" class='align-middle'>${formatNumber(fromEther(wallet))}<br />${(Number(parseFloat(fromEther(wallet)).toFixed(6)) > 0 ? `<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(wallet))))})</span>` : '')}</td>
                            <td class="skill-column" rowspan="${charLen}" class='align-middle'>${formatNumber(fromEther(skillTotal))}<br />${(Number(parseFloat(fromEther(skillTotal)).toFixed(6)) > 0 ? `<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(skillTotal))))})</span>` : '')}</td>
                            <td rowspan="${charLen}" class='align-middle'>${bnbFormatter(formatNumber(fromEther(binance)))}<br />${(Number(parseFloat(fromEther(binance)).toFixed(6)) > 0 ? `<span style="font-size: 10px;">(${toLocaleCurrency(convertBnbToFiat(Number(fromEther(binance))))})</span>` : '')}</td>
                            <td rowspan="${charLen}" class='align-middle'><button type="button" class="btn btn-success btn-sm mb-1" onclick="rename('${address}')">Rename</button><br>
                            <button type="button" class="btn btn-warning btn-sm mb-1" onclick="simulate('${address}')">Combat Simulator</button><br>
                            <button type="button" class="btn btn-primary btn-sm mb-1" onclick="logs('${address}')">Fight Logs</button><br>
                            <button type="button" class="btn btn-danger btn-sm" onclick="remove('${address}')">Remove</button></td>
                        </tr>`;

        if (chars.length > 1) {
            chars.forEach((char, j) => {
                if (j > 0) {
                    rowHtml += `<tr class="text-white align-middle" data-row="${address}">
                                        <td class="char-column">${char.charId}</td>
                                        <td class="char-column">${levelToColor(char.level)}</td>
                                        <td class="char-column">${elemToColor(char.element)}</td>                                        
                                        <td class="char-column">${Number(char.power).toLocaleString('en-US')} / ${Number(CharacterPower(char.level - 1) * 4).toLocaleString('en-US')}</td>
                                        <td class="char-column"><span data-cid="${char.charId}">${char.exp}</span> xp</td>
                                        <td class="char-column">${char.nextLevel}<br/><span style='font-size: 10px'>(${(char.mustClaim ? '<span class="text-gold">Claim now</span>' : `<span data-xp="${char.charId}">${Number(char.nextExp).toLocaleString('en-US')}</span> xp left`)})</span></td>
                                        <td class="char-column">${staminaToColor(char.sta)}<br/>${staminaFullAt(char.sta)}</td>
                                    </tr>`
                }

            })
        }
        return rowHtml
    }))
    $table.html(fRowHtml)
    $cardSouls.html(Number(totalSouls / 10).toLocaleString('en-US'))
    addressHelper(hideAddress)
    charHelper(hideChars)
    skillsHelper(hideSkills)
    unstakeHelper(hideUnstake)
    $('.btn-refresh').removeAttr('disabled')
}

function versionCheck() {
    $.get('/version', (res) => {
        if (version !== res.version) {
            alert('CryptoBlades Tracker has a new update, please refresh your page!')
        }
    })
}


function populateCurrency() {
    $('#select-currency').html('');
    $("#select-currency").append(new Option(currCurrency.toUpperCase(), currCurrency));
    currencies.forEach(curr => {
        if (currCurrency !== curr) {
            $("#select-currency").append(new Option(curr.toUpperCase(), curr));
        }
    })
}

function addAccount() {
    var name = $('#inp-name').val().trim()
    var address = $('#inp-address').val().trim()
    if (storeAccounts.find(account => account === address)) return
    if (isAddress(address)) {
        $('#modal-add-account').modal('hide');
        storeAccounts.push(address)
        storeNames[address] = name
        if (storeAccounts) localStorage.setItem('accounts', JSON.stringify(storeAccounts))
        if (storeNames) localStorage.setItem('names', JSON.stringify(storeNames))
        refresh()
    }
}

function renameAccount() {
    var name = $('#inp-rename').val().trim()
    var address = $('#inp-readdress').val().trim()
    $('#modal-rename-account').modal('hide');
    storeNames[address] = name
    saveToLocalStorage('names', JSON.stringify(storeNames))
    $(`td[data-id=${address}]`).html(name)
}

async function priceTicker() {
    skillPrice = await getSkillPrice()
    gasPrice = await getGasPrice()


    if (currentNetwork === 'poly') {
        gasPrice *= 1000000000000
        skillPrice *= gasPrice
    }
    if (currentNetwork === 'avax') {
        gasPrice *= 1000000000000
        skillPrice *= 1000000000000
    }
    $.get(`https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=${currencies.join(',')}`, async (result) => {
        usdPrice = result.tether[currCurrency]
        bnbPrice = gasPrice * usdPrice
        if (currentNetwork === 'bsc') {
            skillPrice *= gasPrice
        }
        localPrice = usdPrice * skillPrice
        $cardPrice.html(skillPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
    })
}

async function statTicker() {
    const hourlyAvgPower = await getHourlyPowerAvg()
    const maxClaim = await getSkillMultiplier(await getSkillPartnerId())

    $cardReward.html(Number(hourlyAvgPower).toLocaleString('en-US'))
    $cardClaim.html(parseFloat(fromEther(maxClaim)).toFixed(6))
}

async function setRewardsClaimTaxMax() {
    rewardsClaimTaxMax = await getRewardsClaimTaxMax();
}

function charFormatter(val) {
    return val.map(char => {
        return `${char.charId} | Lv. ${char.level} | ${elemToColor(char.element)} | ${char.exp} xp | Lv. ${char.nextLevel} (${(!char.mustClaim ? `${char.nextExp} xp left` : '<span style="color: gold">Claim Exp</span>')}) | (${staminaToColor(char.sta)})`
    }).join('<br>')
}

function elemToColor(elem) {
    switch (elem) {
        case 'Fire': return '<img src="/img/fire.png" alt="Fire" width="20">'
        case 'Earth': return '<img src="/img/earth.png" alt="Earth" width="20">'
        case 'Lightning': return '<img src="/img/lightning.png" alt="Lightning" width="20">'
        case 'Water': return '<img src="/img/water.png" alt="Water" width="20">'
        default: return `<span style='color: red'>N/A</span>`
    }
}

function staminaToColor(stamina) {
    stamina = parseInt(stamina)
    if (stamina < 40) return `${stamina}/200`
    if (stamina < 80) return `<span style='color: green'>${stamina}/200</span>`
    if (stamina < 120) return `<span style='color: yellow'>${stamina}/200</span>`
    if (stamina < 160) return `<span style='color: orange'>${stamina}/200</span>`
    return `<span style='color: red'>${stamina}/200</span>`
}

function staminaFullAt(stamina) {
    if (stamina == 200) return ''
    stamina = parseInt(stamina);
    let minutesToFull = (200 - stamina) * 5;
    let dateFull = moment(new Date(new Date().getTime() + (minutesToFull * 1000 * 60))).fromNow();
    return `<span style='font-size: 10px'>(Full ${dateFull})</span>`;
}

function levelToColor(level) {
    if (level < 11) return level
    if (level < 21) return `<span style='color: cyan'>${level}</span>`
    if (level < 31) return `<span style='color: green'>${level}</span>`
    if (level < 41) return `<span style='color: orange'>${level}</span>`
    return `<span style='color: gold'>${level}</span>`
}

function getClassFromTrait(trait) {
    switch (parseInt(trait)) {
        case 0: return 'color: red'
        case 1: return 'color: green'
        case 2: return 'color: yellow'
        case 3: return 'color: cyan'
        default: return 'color: red'
    }
}

function currFormatter(val) {
    return formatNumber(val, 4)
}

function balanceFormatter(val) {
    return `<span style="color: green">${currFormatter(val.ingame)}</span> | <span style="color: cyan">${currFormatter(val.unclaimed)}</span> | <span style="color: orange">${currFormatter(val.staked)}</span> | <span style="color: red">${currFormatter(val.wallet)}</span>`
}

function bnbFormatter(val) {
    var bnb = parseFloat(val);
    if (parseFloat(val) < 0.01) return `<span class='text-danger'>${bnb}</span>`
    if (parseFloat(val) < 0.03) return `<span class='text-warning'>${bnb}</span>`
    return `<span class='text-success'>${bnb}</span>`
}

function stakedFormatter(val, row) {
    return `${formatNumber(val)}${(row.timeLeft ? ` (${row.timeLeft})` : '')}`
}

function nameFormatter(val) {
    return storeNames[val]
}

function convertSkill(value) {
    return (parseFloat(value) > 0 ? `${formatNumber(value)}<br><span class="fs-md">(${(parseFloat(value) * parseFloat(skillPrice)).toLocaleString('en-US', { style: 'currency', currency: currCurrency.toUpperCase() })})</span>` : 0)
}

function convertBNB(value) {
    return (parseFloat(value) > 0 ? `${formatNumber(value)}<br><span class="fs-md">(${(parseFloat(value) * parseFloat(bnbPrice)).toLocaleString('en-US', { style: 'currency', currency: currCurrency.toUpperCase() })})</span>` : 0)
}

function convertClaimTax(value) {
    return value * 0.15 / rewardsClaimTaxMax
}

function remove(address) {
    if (confirm(`Are you sure you want to remove ${storeNames[address]}?`)) {
        storeAccounts.splice(storeAccounts.indexOf(address), 1)
        delete storeNames[address]
        if (storeAccounts) localStorage.setItem('accounts', JSON.stringify(storeAccounts))
        if (storeNames) localStorage.setItem('names', JSON.stringify(storeNames))
        refresh()
    }
}

async function simulate(address) {
    $('#combat-name').val(storeNames[address])
    $('#combat-address').val(address)
    $('#combat-character').html(new Option('-- Select character --', ''))
    $('#combat-weapon').html(new Option('-- Select weapon --', ''))
    $('#combat-stamina').html(new Option('-- Select multiplier --', ''))
    $('#combat-result').html('')

    for (var i = 1; i <= 5; i++) {
        $('#combat-stamina').append(`<option value="${i}">${i * 40} stamina (x${i})</option>`)
    }

    var charIds = await getAccountCharacters(address)
    var weapIds = await getAccountWeapons(address)

    var charsData = (await multicall(getNFTCall(Characters, conAddress[currentNetwork].character, 'get', charIds.map(charId => [charId])))).map((data, i) => characterFromContract(charIds[i], data))
    var charsSta = (await multicall(getNFTCall(Characters, conAddress[currentNetwork].character, 'getStaminaPoints', charIds.map(charId => [charId])))).map(sta => sta[0])
    var weaponsData = (await multicall(getNFTCall(Weapons, conAddress[currentNetwork].weapon, 'get', weapIds.map(weapId => [weapId])))).map((data, i) => weaponFromContract(weapIds[i], data))

    var charHtml = charIds.map((charId, i) => {
        var charData = charsData[i]
        var sta = charsSta[i]
        return `<option style="${getClassFromTrait(charData.trait)}" value="${charId}">${charId} | ${charData.traitName} | Lv. ${(charData.level + 1)} | Sta. ${sta}/200</option>`
    })
    weaponsData.sort((a, b) => b.stars - a.stars);
    var weapHtml = weaponsData.map(weapData => (
        `<option style="${getClassFromTrait(weapData.trait)}" value="${weapData.id}">${weapData.id} | ${weapData.stars + 1}-star ${weapData.element}</option>`
    ));
    $("#combat-character").append(charHtml)
    $("#combat-weapon").append(weapHtml)
    $('#modal-combat').modal('show', {
        backdrop: 'static',
        keyboard: false
    })
}

async function combatSimulate() {
    $('#btn-simulate').prop('disabled', true)
    var charId = $('#combat-character').val()
    var weapId = $('#combat-weapon').val()
    var stamina = $('#combat-stamina').val()
    var combatResult = $('#combat-result')
    try {
        if (!charId) throw Error('Please select a character.')
        if (!weapId) throw Error('Please select a weapon.')
        if (!stamina) throw Error('Please select a stamina multiplier.')

        combatResult.html('Generating results...')

        var sta = await getCharacterStamina(charId)
        if (sta < 40 * parseInt(stamina)) throw Error('Not enough stamina')

        var charData = characterFromContract(charId, await getCharacterData(charId))
        var weapData = weaponFromContract(weapId, await getWeaponData(weapId))
        charData.power = parseInt(await conCharacters.methods.getTotalPower(charId).call());
        var targets = await characterTargets(charId, weapId)
        var enemies = await getEnemyDetails(targets)

        var tokenRewards = await multicall(getNFTCall(CryptoBlades, conAddress[currentNetwork].cryptoBlades, 'getTokenGainForFight', enemies.map(enemy => [enemy.power, false])))

        combatResult.html('Enemy | Element | Power | Est. Reward | XP | Chance<br><hr>')
        combatResult.append(enemies.map((enemy, i) => {
            var chance = getWinChance(charData, weapData, enemy.power, enemy.trait)
            enemy.element = traitNumberToName(enemy.trait)
            var reward = fromEther(tokenRewards[i] * parseInt(stamina));
            var alignedPower = getAlignedCharacterPower(charData, weapData)
            var expReward = Math.floor((enemy.power / alignedPower) * 32) * parseInt(stamina)
            return `#${i + 1} | ${elemToColor(enemy.element)} | ${enemy.power} | ${truncateToDecimals(reward, 6)} | ${expReward} | ${chanceColor(chance)}<br>`
        }))
        $('#btn-simulate').removeAttr('disabled')
    } catch (e) {
        combatResult.html(e.message)
        $('#btn-simulate').removeAttr('disabled')
    }
}

function chanceColor(chance) {
    let color = 'red'
    if (chance >= 0.90) color = 'green'
    if (chance >= 0.80 && chance < 0.90) color = 'yellow'
    if (chance >= 0.70 && chance < 0.80) color = 'orange'
    return `<span style="color: ${color}">${formatNumber(chance * 100, 2)}%</span>`
}

function rename(address) {
    $('#inp-rename').val(storeNames[address])
    $('#inp-readdress').val(address)
    $('#modal-rename-account').modal('show', {
        backdrop: 'static',
        keyboard: false
    })
}

function export_data() {
    getLocalstorageToFile(`CBTracker-${new Date().getTime()}.json`)
}

function import_data() {
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        return alert('The File APIs are not fully supported in this browser.');
    }

    var input = document.getElementById('file-import');
    if (!input) {
        return alert("Um, couldn't find the fileinput element.");
    }
    if (!input.files) {
        return alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    if (!input.files[0]) {
        return alert("Please select a file before clicking 'Import'");
    }
    var fileType = input.files[0].type
    if (fileType === 'application/json' || fileType === 'text/plain') {
        var file = input.files[0];
        var fr = new FileReader();
        fr.readAsText(file);
        fr.addEventListener('load', function () {
            if (fileType === 'application/json') {
                var { accounts, currency, hideAddress, names } = JSON.parse(fr.result)
                storeAccounts = JSON.parse(accounts)
                storeNames = JSON.parse(names)
                hideAddress = (hideAddress === 'true')
                currCurrency = currency
            } else {
                var rows = fr.result.split('\n')
                rows = rows.map(row => row.replace(/\r?\n|\r/g, ''))
                if (rows.length) {
                    rows.forEach(row => {
                        var [name, address] = row.split(',')
                        if (name && address) {
                            if (isAddress(address) && !storeAccounts.includes(address)) {
                                storeAccounts.push(address)
                                storeNames[address] = name
                            }
                        }
                    })
                }
            }

            if (storeAccounts) localStorage.setItem('accounts', JSON.stringify(storeAccounts))
            if (storeNames) localStorage.setItem('names', JSON.stringify(storeNames))
            if (hideAddress) localStorage.setItem('hideAddress', hideAddress)
            if (currCurrency) localStorage.setItem('currency', currCurrency)

            addressHelper(hideAddress)
            charHelper(hideChars)
            skillsHelper(hideSkills)
            unstakeHelper(hideUnstake)
            refresh()

            $('#modal-import').modal('hide')
        });
    } else alert("Please import a valid json/text file");
}

function addressHelper(hide) {
    if (hide) {
        $('.toggle.btn.btn-sm').removeClass('btn-primary')
        $('.toggle.btn.btn-sm').addClass('btn-danger off')
        $('.address-column').hide()
    } else {
        $('.toggle.btn.btn-sm').addClass('btn-primary')
        $('.toggle.btn.btn-sm').removeClass('btn-danger off')
        $('.address-column').show()
    }
}

function charHelper(hide) {
    if (hide) {
        $('.toggle.btn.btn-sm').removeClass('btn-primary')
        $('.toggle.btn.btn-sm').addClass('btn-danger off')
        $('.char-column').hide()
    } else {
        $('.toggle.btn.btn-sm').addClass('btn-primary')
        $('.toggle.btn.btn-sm').removeClass('btn-danger off')
        $('.char-column').show()
    }
}

function skillsHelper(hide) {
    if (hide) {
        $('.toggle.btn.btn-sm').removeClass('btn-primary')
        $('.toggle.btn.btn-sm').addClass('btn-danger off')
        $('.skill-column').hide()
    } else {
        $('.toggle.btn.btn-sm').addClass('btn-primary')
        $('.toggle.btn.btn-sm').removeClass('btn-danger off')
        $('.skill-column').show()
    }
}

function unstakeHelper(hide) {
    if (hide) {
        $('.toggle.btn.btn-sm').removeClass('btn-primary')
        $('.toggle.btn.btn-sm').addClass('btn-danger off')
        $('.unstake-column').hide()
    } else {
        $('.toggle.btn.btn-sm').addClass('btn-primary')
        $('.toggle.btn.btn-sm').removeClass('btn-danger off')
        $('.unstake-column').show()
    }
}

function getLocalstorageToFile(fileName) {
    var a = {};
    for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        var v = localStorage.getItem(k);
        a[k] = v;
    }
    var textToSave = JSON.stringify(a)
    var textToSaveAsBlob = new Blob([textToSave], {
        type: "text/plain"
    });
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = function () {
        document.body.removeChild(event.target);
    };
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function saveToLocalStorage(id, value) {
    localStorage.setItem(id, value)
}

function sortTable() {

    // Disconnect the rows and get them as an array
    var rows = $table.children().detach().get();

    // Sort it
    rows.sort(function (left, right) {
        // Get the text of the relevant td from left and right
        if (parseInt($(left).data('index')) > parseInt($(right).data('index'))) return 1
        if (parseInt($(left).data('index')) < parseInt($(right).data('index'))) return -1
        return 0
    });

    // Put them back in the tbody
    $table.append(rows);
}

function copy_address_to_clipboard() {
    navigator.clipboard.writeText('0x2548696795a3bCd6A8fAe7602fc26DD95A612574').then(n => alert("Copied Address"), e => alert("Fail\n" + e));
}

function unstakeSkillAt(timeLeft) {
    var timeLeftTimestamp = new Date(new Date().getTime() + (timeLeft * 1000))
    return `<span title="${moment().countdown(timeLeftTimestamp)}">${moment(timeLeftTimestamp).fromNow()}`;
}

function gasName(network) {
    switch (network) {
        case 'bsc': return 'BNB'
        case 'heco': return 'HT'
        case 'oec': return 'OKT'
        case 'poly': return 'MATIC'
        case 'avax': return 'AVAX'
        default: return 'BNB'
    }
}

function updateBalanceLabel() {
    $('#label-tbalance').html(`Total ${gasName(currentNetwork)} Balance`)
    $('#label-balance').html(`${gasName(currentNetwork)} Balance`)
}

const getLogs = async (start, end, address) => getPastEvents(
    'FightOutcome',
    start,
    end,
    address
);

const delay = async ms => await new Promise(resolve => setTimeout(resolve, ms))

async function logs(address) {
    const fightResult = $('#table-logs tbody')
    const latestBlock = await getLatestBlock()
    let maxBlocks = 2000
    let current = latestBlock.number - (maxBlocks * 100)
    let list = [], fights = 0, wins = 0, skill = 0, exp = 0

    for (let i = 0; i < 10; i++) {
        list.push(current)
        current += maxBlocks
    }
    fightResult.html('')
    $('#card-fights').html(0)
    $('#card-winrate').html('0.00%')
    $('#card-skill').html(0)
    $('#card-exp').html(0)
    $('#table-logs').bootstrapTable('showLoading')


    $('#modal-logs').modal('show', {
        backdrop: 'static',
        keyboard: false
    })
    let count = 0
    for (let i of list) {
        try {
            const hResults = await getLogs(i, i + maxBlocks, address)
            count += hResults.length
            hResults.map(result => {
                const { character, weapon, enemyRoll, playerRoll, skillGain, xpGain } = result.returnValues
                fights += 1
                skill += Number(fromEther(skillGain))
                exp += Number(xpGain)
                if (parseInt(playerRoll) > parseInt(enemyRoll)) wins += 1
                fightResult.append(`<tr>
                                <td class='text-white text-center'>${(parseInt(playerRoll) > parseInt(enemyRoll) ? '<span class="text-success">Won</span>' : '<span class="text-danger">Lost</span>')}</td>
                                <td class='text-white text-center'>${character}</td>
                                <td class='text-white text-center'>${weapon}</td>
                                <td class='text-white text-center'>${playerRoll}</td>
                                <td class='text-white text-center'>${enemyRoll}</td>
                                <td class='text-white text-center'>${parseFloat(fromEther(skillGain)).toFixed(6)}</td>
                                <td class='text-white text-center'>${xpGain}</td>
                            </tr>`)
            })
        } catch (e) {
            console.log(e)
        }
    }
    if (count === 0) fightResult.html('<tr><td class="text-center text-white" colspan="7">No fights retrieved</td></tr>')
    $('#card-fights').html(fights)
    $('#card-winrate').html(`${(wins > 0 ? parseFloat((wins / fights) * 100).toFixed(2) : '0.00')}%`)
    $('#card-skill').html(parseFloat(skill).toFixed(6))
    $('#card-exp').html(exp)
    $('#table-logs').bootstrapTable('hideLoading')
}


$('#btn-privacy').on('change', (e) => {
    hideAddress = e.currentTarget.checked
    localStorage.setItem('hideAddress', hideAddress)
    if (hideAddress) $('.address-column').hide()
    else $('.address-column').show()
})

$("#btn-hchars").on('change', (e) => {
    hideChars = e.currentTarget.checked
    localStorage.setItem('hideChars', hideChars)
    if (hideChars) $('.char-column').hide()
    else $('.char-column').show()
})

$("#btn-hskills").on('change', (e) => {
    hideSkills = e.currentTarget.checked
    localStorage.setItem('hideSkills', hideSkills)
    if (hideSkills) $('.skill-column').hide()
    else $('.skill-column').show()
})

$("#btn-hunstake").on('change', (e) => {
    hideUnstake = e.currentTarget.checked
    localStorage.setItem('hideUnstake', hideUnstake)
    if (hideUnstake) $('.unstake-column').hide()
    else $('.unstake-column').show()
})

$("#select-currency").on('change', (e) => {
    currCurrency = e.currentTarget.value
    localStorage.setItem('currency', currCurrency)
    clearFiat()
    priceTicker()
    populateCurrency()
    refresh()
})

$("#select-network").on('change', async (e) => {
    updateNetwork(e.currentTarget.value)
    populateNetwork()
    updateBalanceLabel()
    refresh()
    clearFiat()
    priceTicker()
    statTicker()
})

$('#modal-add-account').on('shown.bs.modal', function (e) {
    $('#inp-name').val('')
    $('#inp-address').val('')
});

/*document.addEventListener('DOMContentLoaded', function () {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try another browser.');
        return;
    }

    if (Notification.permission !== 'granted')
        Notification.requestPermission();
});

function notify(title, message) {
    if (Notification.permission !== 'granted')
        Notification.requestPermission();
    else {
        new Notification(title, {
            body: message,
        });
    }
}*/