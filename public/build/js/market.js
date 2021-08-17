var $table = $('#table-weapons tbody')

async function loadWeaponListing() {
    $('.btn-refresh').prop('disabled', true)
    $.get('https://cbtracker-api.herokuapp.com/listing/weapons', async result => {
        $table.html('')
        if (result.length > 0) {
            $table.append(await Promise.all(result.map(async weapId => {
                const weapData = weaponFromContract(weapId, await getWeaponData(weapId))
                const price = await getFinalPrice(weapAddress, weapId)
                if (parseFloat(price) > 0) {
                    let stars = ''; let attr = '';
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
                    return `
                        <tr data-price="${parseFloat(fromEther(price)).toFixed(2)}">
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
                            <td class="align-middle text-white">${parseFloat(fromEther(price)).toFixed(2)} SKILL</td>
                        </tr>`
                }
            })))
        } else {
            $table.append('<tr><td class="text-center text-white" colspan="5">No weapon listed</td></tr>')
        }
        sortTable()
        $('.btn-refresh').removeAttr('disabled')
    })
}

async function refresh() {
    await loadWeaponListing()
}

function elementToIcon(traitNum) {
    switch (traitNum) {
        case WeaponElement.Fire: return 'fire.png';
        case WeaponElement.Earth: return 'earth.png';
        case WeaponElement.Water: return 'water.png';
        case WeaponElement.Lightning: return 'lightning.png';
        default: return '???';
    }
}

function traitToIcon(traitNum) {
    switch (traitNum) {
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

loadWeaponListing()