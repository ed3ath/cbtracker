var $table=$("#table-characters tbody"),currElement="all",currType="all";async function loadCharacterListing(){$(".btn-refresh").prop("disabled",!0),$("#filter-element").prop("disabled",!0),$("#filter-type").prop("disabled",!0),$.get(`https://cbtracker-api.herokuapp.com/market/characters?network=${currentNetwork}`,async e=>{$table.html(""),e.length>0?$table.append(await Promise.all(e.map(async e=>{const t=characterFromContract(e,await getCharacterData(e)),a=await getCharacterStamina(e),r=await getFinalPrice(conAddress[currentNetwork].character,e);if(parseFloat(r)>0)return`\n                        <tr class="character-row" data-price="${parseFloat(fromEther(r)).toFixed(2)}" data-element="${t.traitName.toString().toLowerCase()}">\n                            <td class="align-middle text-white">${e}</td>\n                            <td class="align-middle text-white">\n                                <div class="d-flex align-items-center">\n                                    <img class="me-2" src="/img/${elementToIcon(parseInt(t.trait))}" alt="${t.traitName}" width="20">\n                                </div>\n                            </td>\n                            <td class="align-middle text-white">\n                                ${t.level+1}\n                            </td>\n                            <td class="align-middle text-white">\n                                ${t.xp} XP\n                            </td>\n                            <td class="align-middle text-white">${a}/200</td>\n                            <td class="align-middle text-white">${parseFloat(fromEther(r)).toFixed(4)} SKILL</td>\n                            <td class="align-middle text-white"><a href="https://app.cryptoblades.io/#/nft-display/character/${e}" target="_blank" class="btn btn-sm btn-success">Buy</a></td>\n                        </tr>`}))):$table.append('<tr><td class="text-center text-white" colspan="8">No character listed</td></tr>'),sortTable(),filterChanges(),$(".btn-refresh").removeAttr("disabled"),$("#filter-element").removeAttr("disabled"),$("#filter-type").removeAttr("disabled")})}async function refresh(){await loadCharacterListing()}function elementToIcon(e){switch(e){case WeaponElement.Fire:return"fire.png";case WeaponElement.Earth:return"earth.png";case WeaponElement.Water:return"water.png";case WeaponElement.Lightning:return"lightning.png";default:return"???"}}function sortTable(){var e,t,a,r,n,l,i;for(e=document.getElementById("table-characters"),a=!0;a;){for(a=!1,t=e.rows,r=1;r<t.length-1;r++)if(i=!1,n=$(t[r]).data("price"),l=$(t[r+1]).data("price"),Number(n)>Number(l)){i=!0;break}i&&(t[r].parentNode.insertBefore(t[r+1],t[r]),a=!0)}}function filterChanges(){$(".character-row").show(),"all"!==currElement&&$(".character-row").each((e,t)=>{$(t).data("element")!==currElement&&$(t).hide()})}$("#filter-element").on("change",e=>{currElement=e.currentTarget.value,filterChanges()}),$("#select-network").on("change",e=>{updateNetwork(e.currentTarget.value),populateNetwork(),refresh()}),loadCharacterListing();