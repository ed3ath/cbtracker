var week=7,month=30,$table=$("#table-result tbody");async function testSimulate(){$("#btn-simulate").prop("disabled",!0);const t=$("#combat-character").val(),e=$("#combat-weapon").val();$table.html("");try{if(!t)throw Error("Please enter a character.");if(!e)throw Error("Please enter a weapon.");$table.html('<tr><td class="text-white text-center" colspan="13">Calculating....</span></tr>');const s=characterFromContract(t,await getCharacterData(t)),r=weaponFromContract(e,await getWeaponData(e)),n=await characterTargets(t,e),l=await getEnemyDetails(n),o=await Promise.all(l.map(async t=>{const e=getAlignedCharacterPower(s,r);return{enemy:t,skill:fromEther((await getTokenReward(t.power)).toString().split(".")[0]),exp:Math.floor(t.power/e*32)}}));let c=0,d=0,i=0,p=0;o.forEach(t=>{const e=Number(t.skill),a=Number(t.exp);0===c&&(c=e),e>d&&(d=e),e<c&&(c=e),0===i&&(i=a),a>p&&(p=a),a<i&&(i=a)}),$table.html("");for(var a=parseInt(7.2);a>0;a--)$table.append(` <tr>\n                                <td class="text-white">${a}</td>\n                                <td class="text-success">${parseFloat(c*a).toFixed(6)}</td>\n                                <td class="text-success">${parseFloat(d*a).toFixed(6)}</td>\n                                <td class="text-warning">${parseInt(i*a)}</td>\n                                <td class="text-warning">${parseInt(p*a)}</td>\n                                <td class="text-success">${parseFloat(c*a*week).toFixed(6)}</td>\n                                <td class="text-success">${parseFloat(d*a*week).toFixed(6)}</td>\n                                <td class="text-warning">${parseInt(i*a*week)}</td>\n                                <td class="text-warning">${parseInt(p*a*week)}</td>\n                                <td class="text-success">${parseFloat(c*a*month).toFixed(6)}</td>\n                                <td class="text-success">${parseFloat(d*a*month).toFixed(6)}</td>\n                                <td class="text-warning">${parseInt(i*a*month)}</td>\n                                <td class="text-warning">${parseInt(p*a*month)}</td>\n                            </tr>`);$("#btn-simulate").removeAttr("disabled")}catch(t){console.log(t),alert(t.message),$("#btn-simulate").removeAttr("disabled")}}$("#select-network").on("change",t=>{updateNetwork(t.currentTarget.value),populateNetwork()});