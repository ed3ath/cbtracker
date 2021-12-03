var $table = $('#table-characters tbody')
var currElement = 'all'
var currType = 'all'

async function loadCharacterListing() {
    $('.btn-refresh').prop('disabled', true)
    $('#filter-element').prop('disabled', true)
    $('#filter-type').prop('disabled', true)
    $.get(`https://cbtracker-api.herokuapp.com/market/characters?network=${currentNetwork}`, async result => {
        $table.html('')
        if (result.length > 0) {
            $table.append(await Promise.all(result.map(async charId => {
                const charData = characterFromContract(charId, await getCharacterData(charId))
                const stamina = await getCharacterStamina(charId)
                const price = await getFinalPrice(conAddress[currentNetwork].character, charId)
                console.log(charData)
                if (parseFloat(price) > 0) {
                    return `
                        <tr class="character-row" data-price="${parseFloat(fromEther(price)).toFixed(2)}" data-element="${charData.traitName.toString().toLowerCase()}">
                            <td class="align-middle text-white">${charId}</td>
                            <td class="align-middle text-white">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="/img/${elementToIcon(parseInt(charData.trait))}" alt="${charData.traitName}" width="20">
                                </div>
                            </td>
                            <td class="align-middle text-white">
                                ${charData.level + 1}
                            </td>
                            <td class="align-middle text-white">
                                ${charData.xp} XP
                            </td>
                            <td class="align-middle text-white">${stamina}/200</td>
                            <td class="align-middle text-white">${parseFloat(fromEther(price)).toFixed(4)} SKILL</td>
                            <td class="align-middle text-white"><a href="https://app.cryptoblades.io/#/nft-display/character/${charId}" target="_blank" class="btn btn-sm btn-success">Buy</a></td>
                        </tr>`
                }
            })))
        } else {
            $table.append('<tr><td class="text-center text-white" colspan="8">No character listed</td></tr>')
        }
        sortTable()
        filterChanges()
        $('.btn-refresh').removeAttr('disabled')
        $('#filter-element').removeAttr('disabled')
        $('#filter-type').removeAttr('disabled')
    })
}

async function refresh() {
    await loadCharacterListing()
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


function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table-characters");
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
    $('.character-row').show();
    if (currElement !== 'all') {        
        $('.character-row').each((f, i) => {
            if($(i).data('element') !== currElement) {
                $(i).hide();
            }
        })
    }
}

$("#filter-element").on('change', (e) => {
    currElement = e.currentTarget.value
    filterChanges()
    
})

$("#select-network").on('change', (e) => {
    updateNetwork(e.currentTarget.value)
    populateNetwork()
    refresh()
})

loadCharacterListing()