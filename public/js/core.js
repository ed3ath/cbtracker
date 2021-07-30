var version = "2.0.22"
versionCheck()
setInterval(() => { versionCheck() }, 5000)

var accounts = localStorage.getItem('accounts')
var names = localStorage.getItem('names')
var hideAddress = (localStorage.getItem('hideAddress') === 'true')
var currCurrency = localStorage.getItem('currency')
var currencies = ['idr','php', 'aed', 'ars', 'aud', 'brl', 'cny', 'eur', 'gbp', 'hkd', 'jpy', 'myr', 'sgd', 'thb', 'twd', 'usd', 'vnd']
var storeAccounts = []
var storeNames = {}
var skillPrice = 0
var localPrice = 0
var bnbPrice = 0
var usdPrice = 0
var $table = $('#table-accounts tbody')

if (!currCurrency) currCurrency = 'usd'
if (accounts && names) {
    storeAccounts = JSON.parse(accounts)
    storeNames = JSON.parse(names)
}

populateCurrency()

if (hideAddress) {
    $('#btn-privacy').prop('checked', true)
} else {
    $('#btn-privacy').removeAttr('checked')
}

var $cardIngame = $('#card-ingame'),
    $cardUnclaim = $('#card-unclaim'),
    $cardStake = $('#card-stake'),
    $cardWallet = $('#card-wallet'),
    $cardTotal = $('#card-total'),
    $cardBnb = $('#card-bnb'),
    $cardAccount = $('#card-account'),
    $cardChar = $('#card-char'),
    $cardPrice = $('#card-price'),
    $cardOracle = $('#card-oracle'),
    $convIngame = $('#conv-ingame'),
    $convUnclaim = $('#conv-unclaim'),
    $convStake = $('#conv-stake'),
    $convWallet = $('#conv-wallet'),
    $convTotal = $('#conv-total'),
    $convBnb = $('#conv-bnb'),
    $convPrice = $('#conv-price'),
    $convOracle = $('#conv-oracle')

$('document').ready(async () => {
    priceTicker()
    oracleTicker()
    setInterval(() => {
        fiatConversion()
    }, 1000)
    setInterval(async() => {
        await oracleTicker()
    }, 10000)
    setInterval(() => {
        priceTicker()
    }, 30000)
    loadData()
    /*storeAccounts.forEach(async(address) => {
        await subscribe(address)
    })*/
})

async function refresh () {
    loadData()
    fiatConversion()
}

async function oracleTicker() {
    var oraclePrice = 1 / web3.utils.fromWei(`${await getOraclePrice()}`, 'ether')
    $cardOracle.html(`${oraclePrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`)
}

function fiatConversion () {
    if (isElementNotZero($cardIngame)) $convIngame.html(`(${toLocaleCurrency(convertToFiat($cardIngame.html()))})`)
    if (isElementNotZero($cardUnclaim)) $convUnclaim.html(`(${toLocaleCurrency(convertToFiat($cardUnclaim.html()))})`)
    if (isElementNotZero($cardStake)) $convStake.html(`(${toLocaleCurrency(convertToFiat($cardStake.html()))})`)
    if (isElementNotZero($cardWallet)) $convWallet.html(`(${toLocaleCurrency(convertToFiat($cardWallet.html()))})`)
    if (isElementNotZero($cardTotal)) $convTotal.html(`(${toLocaleCurrency(convertToFiat($cardTotal.html()))})`)
    if (isElementNotZero($cardBnb)) $convBnb.html(`(${toLocaleCurrency(convertBnbToFiat($cardBnb.html()))})`)
    if (isElementNotZero($cardOracle)) $convOracle.html(`(${toLocaleCurrency(localeCurrencyToNumber($cardOracle.html()) * usdPrice)})`)
    if (isElementNotZero($cardPrice) && currCurrency !== 'usd') $convPrice.html(`(${toLocaleCurrency(localPrice)})`)
}
function clearFiat () {
    $convIngame.html('')
    $convUnclaim.html('')
    $convStake.html('')
    $convWallet.html('')
    $convTotal.html('')
    $convBnb.html('')
    $convPrice.html('')
    $convOracle.html('')
}

function isElementNotZero ($elem) {
    return (parseFloat(localeCurrencyToNumber($elem.html())) > 0)
}

function localeCurrencyToNumber (val) {
    return Number(val.replace(/[^0-9\.]+/g,""))
}

function convertToFiat (val) {
    return parseFloat(val) * localPrice
}

function convertBnbToFiat (val) {
    return parseFloat(val) * bnbPrice
}

function toLocaleCurrency(val) {
    return val.toLocaleString('en-US', { style: 'currency', currency: currCurrency.toUpperCase() })
}

async function loadData () {
    $('.btn-refresh').prop('disabled', true)
    $table.html('');
    $cardIngame.html(0)
    $cardUnclaim.html(0)
    $cardStake.html(0)
    $cardWallet.html(0)
    $cardTotal.html(0)
    $cardBnb.html(0)
    $cardChar.html(0)
    $cardAccount.html(storeAccounts.length)

    
    const fRowHtml = await Promise.all(storeAccounts.map(async (address, i) => {
        let rowHtml = ''
        const charIds = await getAccountCharacters(address)
        const binance = await getBNBBalance(address)
        const wallet = await getStakedBalance(address)
        const staked = await getStakedRewards(address)
        const unclaimed = await getAccountSkillReward(address)
        const ingame = await getIngameSkill(address)
        const timeLeft = await getStakedTimeLeft(address)

        var charCount = parseInt($cardChar.html())
        charCount += charIds.length
        $cardChar.html(charCount)

        var charLen = charIds.length

        $cardIngame.html((parseFloat($cardIngame.html()) + parseFloat(fromEther(ingame))).toFixed(6))
        $cardUnclaim.html((parseFloat($cardUnclaim.html()) + parseFloat(fromEther(unclaimed))).toFixed(6))
        $cardStake.html((parseFloat($cardStake.html()) + parseFloat(fromEther(staked))).toFixed(6))
        $cardWallet.html((parseFloat($cardWallet.html()) + parseFloat(fromEther(wallet))).toFixed(6))
        $cardTotal.html((parseFloat($cardTotal.html()) + parseFloat(fromEther(sumOfArray([unclaimed, staked, wallet])))).toFixed(6))
        $cardBnb.html((parseFloat($cardBnb.html()) + parseFloat(fromEther(binance))).toFixed(6))
        
        let charHtml = '', chars = {}
        
        if (charLen > 0){
            chars = await Promise.all(charIds.map(async charId => {
                const charData = await characterFromContract(charId, await getCharacterData(charId))
                const exp = await getCharacterExp(charId)
                const sta = await getCharacterStamina(charId)
                const nextTargetExpLevel = getNextTargetExpLevel(charData.level)
                return {
                    charId,
                    exp,
                    sta,
                    trait: charData.trait,
                    nextLevel: nextTargetExpLevel.level + 1,
                    nextExp: nextTargetExpLevel.exp - (parseInt(charData.xp) + parseInt(exp)),
                    mustClaim: nextTargetExpLevel.exp - (parseInt(charData.xp) + parseInt(exp)) <= 0,
                    level: charData.level + 1,
                    element: charData.traitName,
                };
            }))
            charHtml = `<td data-cid="${chars[0].charId}">${chars[0].charId}</td>
                        <td>${levelToColor(chars[0].level)}</td>
                        <td>${elemToColor(chars[0].element)}</td>
                        <td>${chars[0].exp}</td>
                        <td>${chars[0].nextLevel} (${(chars[0].mustClaim ? '<span class="text-gold">Claim now</span>' : `<span data-xp="${chars[0].charId}">${chars[0].nextExp}</span> xp left`)})</td>
                        <td data-sta="${chars[0].charId}">${staminaToColor(chars[0].sta)}</td>`
        }else{
            charHtml = '<td colspan="6"></td>'
        }
        if (charLen < 1) {
            charLen = 1
        }
        rowHtml += ` <tr class="text-white align-middle" data-row="${address}">
                            <td rowspan="${charLen}" class='align-middle' data-id="${address}">${storeNames[address]}</td>
                            <td rowspan="${charLen}" class='align-middle'>${addressPrivacy(address)}</td>
                            ${charHtml}
                            <td rowspan="${charLen}" class='align-middle'>${parseFloat(web3.utils.fromWei(ingame, 'ether')).toFixed(4)}</td>
                            <td rowspan="${charLen}" class='align-middle'>${parseFloat(web3.utils.fromWei(unclaimed, 'ether')).toFixed(4)}</td>
                            <td rowspan="${charLen}" class='align-middle'>${parseFloat(web3.utils.fromWei(staked, 'ether')).toFixed(4)}</td>
                            <td rowspan="${charLen}" class='align-middle'>${parseFloat(web3.utils.fromWei(wallet, 'ether')).toFixed(4)}</td>
                            <td rowspan="${charLen}" class='align-middle'>${parseFloat(web3.utils.fromWei(sumOfArray([unclaimed, staked, wallet]).toString(), 'ether')).toFixed(4)}</td>
                            <td rowspan="${charLen}" class='align-middle'>${(timeLeft > 0 ? moment(new Date(new Date().getTime() + (timeLeft * 1000))).fromNow() : '')}</td>
                            <td rowspan="${charLen}" class='align-middle'>${bnbFormatter(parseFloat(web3.utils.fromWei(binance, 'ether')).toFixed(4))}</td>
                            <td rowspan="${charLen}" class='align-middle'><button type="button" class="btn btn-success btn-sm mb-1" onclick="rename('${address}')">Rename</button><br>
                            <button type="button" class="btn btn-warning btn-sm mb-1" onclick="simulate('${address}')">Combat Simulator</button><br>
                            <button type="button" class="btn btn-danger btn-sm" onclick="remove('${address}')">Remove</button></td>
                        </tr>`;
        
        if (chars.length > 1) {
            chars.forEach((char,j) => {
                if (j > 0) {
                    rowHtml += `<tr class="text-white align-middle" data-row="${address}">
                                        <td>${char.charId}</td>
                                        <td>${levelToColor(char.level)}</td>
                                        <td>${elemToColor(char.element)}</td>
                                        <td>${char.exp}</td>
                                        <td>${char.nextLevel} (${(char.mustClaim ? '<span class="text-gold">Claim now</span>' : `${char.nextExp} xp left`)})</td>
                                        <td>${staminaToColor(char.sta)}</td>
                                    </tr>`
                }
                
            })
        }
        return rowHtml
    }))
    $table.html(fRowHtml)    
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
    $.get(`https://api.coingecko.com/api/v3/simple/price?ids=cryptoblades,binancecoin,tether&vs_currencies=${currencies.join(',')}`, (result) => {
        skillPrice = result.cryptoblades['usd']
        localPrice = result.cryptoblades[currCurrency]
        bnbPrice = result.binancecoin[currCurrency]
        usdPrice = result.tether[currCurrency]
        $cardPrice.html(skillPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
    })
}

function charFormatter(val) {
    return val.map(char => {
        return `${char.charId} | Lv. ${char.level} | ${elemToColor(char.element)} | ${char.exp} xp | Lv. ${char.nextLevel} (${(!char.mustClaim ? `${char.nextExp} xp left` : '<span style="color: gold">Claim Exp</span>')}) | (${staminaToColor(char.sta)})`
    }).join('<br>')
}

function elemToColor(elem) {
    switch (elem) {
        case 'Fire': return `<span style='color: red'>${elem}</span>`
        case 'Earth': return `<span style='color: green'>${elem}</span>`
        case 'Lightning': return `<span style='color: yellow'>${elem}</span>`
        case 'Water': return `<span style='color: cyan'>${elem}</span>`
        default: return `<span style='color: red'>${elem}</span>`
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
    return parseFloat(val).toFixed(4)
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
    return `${parseFloat(val).toFixed(6)}${(row.timeLeft ? ` (${row.timeLeft})` : '')}`
}

function nameFormatter(val) {
    return storeNames[val]
}

function privacyFormatter(val) {
    if (hideAddress) return addressPrivacy(val)
    return val
}

function convertSkill(value) {
    return (parseFloat(value) > 0 ? `${parseFloat(value).toFixed(6)}<br><span class="fs-md">(${(parseFloat(value) * parseFloat(skillPrice)).toLocaleString('en-US', { style: 'currency', currency: currCurrency.toUpperCase() })})</span>` : 0)
}

function convertBNB(value) {
    return (parseFloat(value) > 0 ? `${parseFloat(value).toFixed(6)}<br><span class="fs-md">(${(parseFloat(value) * parseFloat(bnbPrice)).toLocaleString('en-US', { style: 'currency', currency: currCurrency.toUpperCase() })})</span>` : 0)
}

function fromEther (value) {
    return web3.utils.fromWei(value.toString(), 'ether')
}

function remove(address) {
    storeAccounts.splice(storeAccounts.indexOf(address), 1)
    delete storeNames[address]
    if (storeAccounts) localStorage.setItem('accounts', JSON.stringify(storeAccounts))
    if (storeNames) localStorage.setItem('names', JSON.stringify(storeNames))
    refresh()
}

async function simulate(address) {
    $('#combat-name').val(storeNames[address])
    $('#combat-address').val(address)
    $('#combat-character').html(new Option('-- Select character --', ''))
    $('#combat-weapon').html(new Option('-- Select weapon --', ''))
    $('#combat-stamina').html(new Option('-- Select multiplier --', ''))
    $('#combat-result').html('')

    for(var i = 1; i <= 5; i++) {
        $('#combat-stamina').append(`<option value="${i}">${i * 40} stamina (x${i})</option>`)
    }

    const charIds = await getAccountCharacters(address)
    const weapIds = await getAccountWeapons(address)

    const charHtml = await Promise.all(charIds.map(async charId => {
        const charData = characterFromContract(charId, await getCharacterData(charId))
        const sta = await getCharacterStamina(charId)
        return `<option style="${getClassFromTrait(charData.trait)}" value="${charId}">${charId} | ${charData.traitName} | Lv. ${(charData.level + 1)} | Sta. ${sta}/200</option>`
    }))
    const weapHtml = await Promise.all(weapIds.map(async weapId => {
        const weapData = weaponFromContract(weapId, await getWeaponData(weapId))
        return `<option style="${getClassFromTrait(weapData.trait)}" value="${weapId}">${weapId} | ${weapData.stars + 1}-star ${weapData.element}</option>`;
    }))
    $("#combat-character").append(charHtml)
    $("#combat-weapon").append(weapHtml)
    $('#modal-combat').modal('show', {
        backdrop: 'static',
        keyboard: false
    })
}

async function combatSimulate() {
    $('#btn-simulate').prop('disabled', true)
    const charId = $('#combat-character').val()
    const weapId = $('#combat-weapon').val()
    const stamina = $('#combat-stamina').val()
    const combatResult = $('#combat-result')
    try {
        if (!charId) throw Error('Please select a character.')
        if (!weapId) throw Error('Please select a weapon.')
        if (!stamina) throw Error('Please select a stamina multiplier.')

        combatResult.html('Generating results...')

        const sta = await getCharacterStamina(charId)
        if (sta < 40 * parseInt(stamina)) throw Error('Not enough stamina')
        const fightGasOffset = await fetchFightGasOffset()
        const fightBaseline = await fetchFightBaseline()

        const charData = characterFromContract(charId, await getCharacterData(charId))
        const weapData = weaponFromContract(weapId, await getWeaponData(weapId))
        const targets = await characterTargets(charId, weapId)
        const enemies = await getEnemyDetails(targets)

        combatResult.html('Enemy | Element | Power | Est. Reward | Chance<br><hr>')
        combatResult.append(await Promise.all(enemies.map(async (enemy, i) => {
            const chance = getWinChance(charData, weapData, enemy.power, enemy.trait)
            enemy.element = traitNumberToName(enemy.trait)
            const reward = fromEther(await usdToSkill(web3.utils.toBN(Number(fightGasOffset) + ((Number(fightBaseline) * Math.sqrt(parseInt(enemy.power) / 1000)) * parseInt(stamina)))));
            return `#${i + 1} | ${elemToColor(enemy.element)} | ${enemy.power} | ${truncateToDecimals(reward, 6)} | ${chanceColor(chance)}<br>`
        })))
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
    return `<span style="color: ${color}">${parseFloat(chance * 100).toFixed(2)}%</span>`
}

function rename(address) {
    $('#inp-rename').val(storeNames[address])
    $('#inp-readdress').val(address)
    $('#modal-rename-account').modal('show', {
        backdrop: 'static',
        keyboard: false
    })
}

function addressPrivacy(address) {
    if (hideAddress) return `${address.substr(0, 6)}...${address.substr(-4, 4)}`
    return address
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
    console.log(fileType)
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
                var rows = fr.result.split("\r\n")
                console.log(rows)
                if (rows.length) {
                    rows.forEach(row => {
                        var [name,address] = row.split(',')
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

            toggleHelper(hideAddress)
            refresh()

            $('#modal-import').modal('hide')
        });
    } else alert("Please import a valid json/text file");
}

function toggleHelper(hide) {
    if (hide) {
        $('.toggle.btn.btn-sm').removeClass('btn-primary')
        $('.toggle.btn.btn-sm').addClass('btn-danger off')
    } else {
        $('.toggle.btn.btn-sm').addClass('btn-primary')
        $('.toggle.btn.btn-sm').removeClass('btn-danger off')
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
    rows.sort(function(left, right) {
        // Get the text of the relevant td from left and right
        if (parseInt($(left).data('index')) > parseInt($(right).data('index'))) return 1
        if (parseInt($(left).data('index')) < parseInt($(right).data('index'))) return -1
        return 0
    });
    
    // Put them back in the tbody
    $table.append(rows);
  }


$('#btn-privacy').on('change', (e) => {
    hideAddress = e.currentTarget.checked
    localStorage.setItem('hideAddress', hideAddress)
    refresh()
})

$("#select-currency").on('change', (e) => {
    currCurrency = e.currentTarget.value
    localStorage.setItem('currency', currCurrency)
    populateCurrency()
    clearFiat()
    refresh()
})

$('#modal-add-account').on('shown.bs.modal', function (e) {
    $('#inp-name').val('')
    $('#inp-address').val('')
});