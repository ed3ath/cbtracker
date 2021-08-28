var accounts=localStorage.getItem("accounts"),names=localStorage.getItem("names"),hideAddress="true"===localStorage.getItem("hideAddress"),includeClaimTax="true"===localStorage.getItem("includeClaimTax"),hideChars="true"===localStorage.getItem("hideChars"),hideSkills="true"===localStorage.getItem("hideSkills"),hideUnstake="true"===localStorage.getItem("hideUnstake"),currCurrency=localStorage.getItem("currency"),currencies=["php","aed","ars","aud","brl","cny","eur","gbp","hkd","idr","inr","jpy","myr","sgd","thb","twd","usd","ves","vnd"],rewardsClaimTaxMax=0,storeAccounts=[],storeNames={},skillPrice=0,localPrice=0,bnbPrice=0,usdPrice=0,$table=$("#table-accounts tbody");currCurrency||(currCurrency="usd"),accounts&&names&&(storeAccounts=JSON.parse(accounts),storeNames=JSON.parse(names)),populateCurrency(),hideAddress?$("#btn-privacy").prop("checked",!0):$("#btn-privacy").removeAttr("checked"),includeClaimTax?$("#btn-tax").prop("checked",!0):$("#btn-tax").removeAttr("checked"),hideChars?$("#btn-hchars").prop("checked",!0):$("#btn-hchars").removeAttr("checked"),hideSkills?$("#btn-hskills").prop("checked",!0):$("#btn-hskills").removeAttr("checked"),hideUnstake?$("#btn-hunstake").prop("checked",!0):$("#btn-hunstake").removeAttr("checked");var $cardIngame=$("#card-ingame"),$cardUnclaim=$("#card-unclaim"),$cardStake=$("#card-stake"),$cardWallet=$("#card-wallet"),$cardTotal=$("#card-total"),$cardTotalTitle=$("#card-total-title"),$cardBnb=$("#card-bnb"),$cardAccount=$("#card-account"),$cardChar=$("#card-char"),$cardPrice=$("#card-price"),$cardOracle=$("#card-oracle"),$convIngame=$("#conv-ingame"),$convUnclaim=$("#conv-unclaim"),$convStake=$("#conv-stake"),$convWallet=$("#conv-wallet"),$convTotal=$("#conv-total"),$convBnb=$("#conv-bnb"),$convPrice=$("#conv-price"),$convOracle=$("#conv-oracle");async function refresh(){loadData(),fiatConversion()}async function oracleTicker(){var e=1/fromEther(`${await getOraclePrice()}`);$cardOracle.html(`${e.toLocaleString("en-US",{style:"currency",currency:"USD"})}`)}function fiatConversion(){isElementNotZero($cardIngame)&&$convIngame.html(`(${toLocaleCurrency(convertToFiat($cardIngame.html()))})`),isElementNotZero($cardUnclaim)&&$convUnclaim.html(`(${toLocaleCurrency(convertToFiat($cardUnclaim.html()))})`),isElementNotZero($cardStake)&&$convStake.html(`(${toLocaleCurrency(convertToFiat($cardStake.html()))})`),isElementNotZero($cardWallet)&&$convWallet.html(`(${toLocaleCurrency(convertToFiat($cardWallet.html()))})`),isElementNotZero($cardTotal)&&$convTotal.html(`(${toLocaleCurrency(convertToFiat($cardTotal.html()))})`),isElementNotZero($cardBnb)&&$convBnb.html(`(${toLocaleCurrency(convertBnbToFiat($cardBnb.html()))})`),isElementNotZero($cardOracle)&&"usd"!==currCurrency&&$convOracle.html(`(${toLocaleCurrency(localeCurrencyToNumber($cardOracle.html())*usdPrice)})`),isElementNotZero($cardPrice)&&"usd"!==currCurrency&&$convPrice.html(`(${toLocaleCurrency(localPrice)})`)}function clearFiat(){$convIngame.html(""),$convUnclaim.html(""),$convStake.html(""),$convWallet.html(""),$convTotal.html(""),$convBnb.html(""),$convPrice.html(""),$convOracle.html("")}function isElementNotZero(e){return parseFloat(localeCurrencyToNumber(e.html()))>0}function localeCurrencyToNumber(e){return Number(String(e).replace(/[^0-9\.]+/g,""))}function convertToFiat(e){return localeCurrencyToNumber(e)*localPrice}function convertBnbToFiat(e){return parseFloat(e)*bnbPrice}function toLocaleCurrency(e){return e.toLocaleString("en-US",{style:"currency",currency:currCurrency.toUpperCase()})}function formatNumber(e,t=6){return Number(e).toLocaleString("en",{minimumFractionDigits:t,maximumFractionDigits:t})}async function loadData(){$(".btn-refresh").prop("disabled",!0),$table.html(""),$cardIngame.html(0),$cardUnclaim.html(0),$cardStake.html(0),$cardWallet.html(0),$cardTotal.html(0),$cardTotalTitle.html(!0===includeClaimTax?"Taxed Skill Assets":"Total Skill Assets"),$cardBnb.html(0),$cardChar.html(0),$cardAccount.html(storeAccounts.length);const e=await Promise.all(storeAccounts.map(async(e,t)=>{let a="";const r=await getAccountCharacters(e),n=await getBNBBalance(e),o=await getStakedBalance(e),c=await getStakedRewards(e),l=await getAccountSkillReward(e),s=l*(1-convertClaimTax(await getOwnRewardsClaimTax(e))),i=await getIngameSkill(e),m=await getStakedTimeLeft(e);var d=parseInt($cardChar.html());d+=r.length,$cardChar.html(d);var u=r.length;$cardIngame.html(formatNumber(parseFloat($cardIngame.html())+parseFloat(fromEther(i)))),$cardUnclaim.html(formatNumber(parseFloat($cardUnclaim.html())+parseFloat(fromEther(l)))),$cardStake.html(formatNumber(parseFloat($cardStake.html())+parseFloat(fromEther(c)))),$cardWallet.html(formatNumber(parseFloat($cardWallet.html())+parseFloat(fromEther(o)))),$cardTotal.html(formatNumber(parseFloat($cardTotal.html())+parseFloat(fromEther(sumOfArray([!0===includeClaimTax?s:l,c,o]))))),$cardTotalTitle.html(!0===includeClaimTax?"Taxed Skill Assets":"Total Skill Assets"),$cardBnb.html(formatNumber(parseFloat($cardBnb.html())+parseFloat(fromEther(n))));let p="",$={};p=u>0?`<td class="char-column" data-cid="${($=await Promise.all(r.map(async e=>{const t=await characterFromContract(e,await getCharacterData(e)),a=await getCharacterExp(e),r=await getCharacterStamina(e),n=getNextTargetExpLevel(t.level);return{charId:e,exp:a,sta:r,trait:t.trait,nextLevel:n.level+1,nextExp:n.exp-(parseInt(t.xp)+parseInt(a)),mustClaim:n.exp-(parseInt(t.xp)+parseInt(a))<=0,level:t.level+1,element:t.traitName}})))[0].charId}">${$[0].charId}</td>\n                        <td class="char-column">${levelToColor($[0].level)}</td>\n                        <td class="char-column">${elemToColor($[0].element)}</td>\n                        <td class="char-column"><span data-cid="${$[0].charId}">${$[0].exp}</span> xp</td>\n                        <td class="char-column">${$[0].nextLevel}<br/><span style='font-size: 10px'>${$[0].mustClaim?'<span class="text-gold">(Claim now)</span>':`<span data-xp="${$[0].charId}">(${$[0].nextExp}</span> xp left)`}</span></td>\n                        <td class="char-column" data-sta="${$[0].charId}">${staminaToColor($[0].sta)}<br/>${staminaFullAt($[0].sta)}</td>`:'<td class="char-column" colspan="6"></td>',u<1&&(u=1);const h=sumOfArray([l,c,o]);return a+=` <tr class="text-white align-middle" data-row="${e}">\n                            <td rowspan="${u}" class='align-middle' data-id="${e}">${storeNames[e]}</td>\n                            <td rowspan="${u}" class='align-middle address-column'>${e}</td>\n                            ${p}\n                            <td class="skill-column" rowspan="${u}" class='align-middle'>${formatNumber(fromEther(i))}<br />${Number(parseFloat(fromEther(i)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(i))))})</span>`:""}</td>\n                            <td class="skill-column" rowspan="${u}" class='align-middle'>${formatNumber(fromEther(l))}<br />${Number(parseFloat(fromEther(l)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(l))))})</span>`:""}</td>\n                            <td class="skill-column" rowspan="${u}" class='align-middle'>${formatNumber(fromEther(c))}<br />${Number(parseFloat(fromEther(c)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(c))))})</span>`:""}</td>\n                            <td class="skill-column" rowspan="${u}" class='align-middle'>${formatNumber(fromEther(o))}<br />${Number(parseFloat(fromEther(o)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(o))))})</span>`:""}</td>\n                            <td class="skill-column" rowspan="${u}" class='align-middle'>${formatNumber(fromEther(h))}<br />${Number(parseFloat(fromEther(h)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(h))))})</span>`:""}</td>\n                            <td class="unstake-column" rowspan="${u}" class='align-middle'>${m>0?unstakeSkillAt(m):Number(parseFloat(fromEther(c)).toFixed(6))>0?'<span class="text-gold">Claim now</span>':""}</td>\n                            <td rowspan="${u}" class='align-middle'>${bnbFormatter(formatNumber(fromEther(n)))}<br />${Number(parseFloat(fromEther(n)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertBnbToFiat(Number(fromEther(n))))})</span>`:""}</td>\n                            <td rowspan="${u}" class='align-middle'><button type="button" class="btn btn-success btn-sm mb-1" onclick="rename('${e}')">Rename</button><br>\n                            <button type="button" class="btn btn-warning btn-sm mb-1" onclick="simulate('${e}')">Combat Simulator</button><br>\n                            <button type="button" class="btn btn-danger btn-sm" onclick="remove('${e}')">Remove</button></td>\n                        </tr>`,$.length>1&&$.forEach((t,r)=>{r>0&&(a+=`<tr class="text-white align-middle" data-row="${e}">\n                                        <td class="char-column">${t.charId}</td>\n                                        <td class="char-column">${levelToColor(t.level)}</td>\n                                        <td class="char-column">${elemToColor(t.element)}</td>\n                                        <td class="char-column"><span data-cid="${t.charId}">${t.exp}</span> xp</td>\n                                        <td class="char-column">${t.nextLevel}<br/><span style='font-size: 10px'>(${t.mustClaim?'<span class="text-gold">Claim now</span>':`<span data-xp="${t.charId}">${t.nextExp}</span> xp left`})</span></td>\n                                        <td class="char-column">${staminaToColor(t.sta)}<br/>${staminaFullAt(t.sta)}</td>\n                                    </tr>`)}),a}));$table.html(e),addressHelper(hideAddress),charHelper(hideChars),skillsHelper(hideSkills),unstakeHelper(hideUnstake),$(".btn-refresh").removeAttr("disabled")}function versionCheck(){$.get("/version",e=>{version!==e.version&&alert("CryptoBlades Tracker has a new update, please refresh your page!")})}function populateCurrency(){$("#select-currency").html(""),$("#select-currency").append(new Option(currCurrency.toUpperCase(),currCurrency)),currencies.forEach(e=>{currCurrency!==e&&$("#select-currency").append(new Option(e.toUpperCase(),e))})}function addAccount(){var e=$("#inp-name").val().trim(),t=$("#inp-address").val().trim();storeAccounts.find(e=>e===t)||isAddress(t)&&($("#modal-add-account").modal("hide"),storeAccounts.push(t),storeNames[t]=e,storeAccounts&&localStorage.setItem("accounts",JSON.stringify(storeAccounts)),storeNames&&localStorage.setItem("names",JSON.stringify(storeNames)),refresh())}function renameAccount(){var e=$("#inp-rename").val().trim(),t=$("#inp-readdress").val().trim();$("#modal-rename-account").modal("hide"),storeNames[t]=e,saveToLocalStorage("names",JSON.stringify(storeNames)),$(`td[data-id=${t}]`).html(e)}async function priceTicker(){$.get(`https://api.coingecko.com/api/v3/simple/price?ids=cryptoblades,binancecoin,tether&vs_currencies=${currencies.join(",")}`,async e=>{skillPrice=e.cryptoblades.usd,"ves"===currCurrency?(bnbPrice=e.cryptoblades.usd,await getVESUSDPrice()):(localPrice=e.cryptoblades[currCurrency],bnbPrice=e.binancecoin[currCurrency],usdPrice=e.tether[currCurrency]),$cardPrice.html(skillPrice.toLocaleString("en-US",{style:"currency",currency:"USD"}))})}async function getVESUSDPrice(){$.get("https://s3.amazonaws.com/dolartoday/data.json",e=>{localPrice=e.USD.transferencia*skillPrice,usdPrice=e.USD.transferencia,bnbPrice*=usdPrice})}async function setRewardsClaimTaxMax(){rewardsClaimTaxMax=await getRewardsClaimTaxMax()}function charFormatter(e){return e.map(e=>`${e.charId} | Lv. ${e.level} | ${elemToColor(e.element)} | ${e.exp} xp | Lv. ${e.nextLevel} (${e.mustClaim?'<span style="color: gold">Claim Exp</span>':`${e.nextExp} xp left`}) | (${staminaToColor(e.sta)})`).join("<br>")}function elemToColor(e){switch(e){case"Fire":return'<img class="me-2" src="/img/fire.png" alt="Fire" width="20">';case"Earth":return'<img class="me-2" src="/img/earth.png" alt="Earth" width="20">';case"Lightning":return'<img class="me-2" src="/img/lightning.png" alt="Lightning" width="20">';case"Water":return'<img class="me-2" src="/img/water.png" alt="Water" width="20">';default:return"<span style='color: red'>N/A</span>"}}function staminaToColor(e){return(e=parseInt(e))<40?`${e}/200`:e<80?`<span style='color: green'>${e}/200</span>`:e<120?`<span style='color: yellow'>${e}/200</span>`:e<160?`<span style='color: orange'>${e}/200</span>`:`<span style='color: red'>${e}/200</span>`}function staminaFullAt(e){if(200==e)return"";let t=5*(200-(e=parseInt(e)));return`<span style='font-size: 10px'>(Full ${moment(new Date((new Date).getTime()+1e3*t*60)).fromNow()})</span>`}function levelToColor(e){return e<11?e:e<21?`<span style='color: cyan'>${e}</span>`:e<31?`<span style='color: green'>${e}</span>`:e<41?`<span style='color: orange'>${e}</span>`:`<span style='color: gold'>${e}</span>`}function getClassFromTrait(e){switch(parseInt(e)){case 0:return"color: red";case 1:return"color: green";case 2:return"color: yellow";case 3:return"color: cyan";default:return"color: red"}}function currFormatter(e){return formatNumber(e,4)}function balanceFormatter(e){return`<span style="color: green">${currFormatter(e.ingame)}</span> | <span style="color: cyan">${currFormatter(e.unclaimed)}</span> | <span style="color: orange">${currFormatter(e.staked)}</span> | <span style="color: red">${currFormatter(e.wallet)}</span>`}function bnbFormatter(e){var t=parseFloat(e);return parseFloat(e)<.01?`<span class='text-danger'>${t}</span>`:parseFloat(e)<.03?`<span class='text-warning'>${t}</span>`:`<span class='text-success'>${t}</span>`}function stakedFormatter(e,t){return`${formatNumber(e)}${t.timeLeft?` (${t.timeLeft})`:""}`}function nameFormatter(e){return storeNames[e]}function convertSkill(e){return parseFloat(e)>0?`${formatNumber(e)}<br><span class="fs-md">(${(parseFloat(e)*parseFloat(skillPrice)).toLocaleString("en-US",{style:"currency",currency:currCurrency.toUpperCase()})})</span>`:0}function convertBNB(e){return parseFloat(e)>0?`${formatNumber(e)}<br><span class="fs-md">(${(parseFloat(e)*parseFloat(bnbPrice)).toLocaleString("en-US",{style:"currency",currency:currCurrency.toUpperCase()})})</span>`:0}function convertClaimTax(e){return.15*e/rewardsClaimTaxMax}function remove(e){confirm(`Are you sure you want to remove ${storeNames[e]}?`)&&(storeAccounts.splice(storeAccounts.indexOf(e),1),delete storeNames[e],storeAccounts&&localStorage.setItem("accounts",JSON.stringify(storeAccounts)),storeNames&&localStorage.setItem("names",JSON.stringify(storeNames)),refresh())}async function simulate(e){$("#combat-name").val(storeNames[e]),$("#combat-address").val(e),$("#combat-character").html(new Option("-- Select character --","")),$("#combat-weapon").html(new Option("-- Select weapon --","")),$("#combat-stamina").html(new Option("-- Select multiplier --","")),$("#combat-result").html("");for(var t=1;t<=5;t++)$("#combat-stamina").append(`<option value="${t}">${40*t} stamina (x${t})</option>`);const a=await getAccountCharacters(e),r=await getAccountWeapons(e),n=await Promise.all(a.map(async e=>{const t=characterFromContract(e,await getCharacterData(e)),a=await getCharacterStamina(e);return`<option style="${getClassFromTrait(t.trait)}" value="${e}">${e} | ${t.traitName} | Lv. ${t.level+1} | Sta. ${a}/200</option>`})),o=await Promise.all(r.map(async e=>weaponFromContract(e,await getWeaponData(e))));o.sort((e,t)=>t.stars-e.stars);const c=o.map(e=>`<option style="${getClassFromTrait(e.trait)}" value="${e.id}">${e.id} | ${e.stars+1}-star ${e.element}</option>`);$("#combat-character").append(n),$("#combat-weapon").append(c),$("#modal-combat").modal("show",{backdrop:"static",keyboard:!1})}async function combatSimulate(){$("#btn-simulate").prop("disabled",!0);const e=$("#combat-character").val(),t=$("#combat-weapon").val(),a=$("#combat-stamina").val(),r=$("#combat-result");try{if(!e)throw Error("Please select a character.");if(!t)throw Error("Please select a weapon.");if(!a)throw Error("Please select a stamina multiplier.");if(r.html("Generating results..."),await getCharacterStamina(e)<40*parseInt(a))throw Error("Not enough stamina");const n=await fetchFightGasOffset(),o=await fetchFightBaseline(),c=characterFromContract(e,await getCharacterData(e)),l=weaponFromContract(t,await getWeaponData(t)),s=await characterTargets(e,t),i=await getEnemyDetails(s);r.html("Enemy | Element | Power | Est. Reward | XP | Chance<br><hr>"),r.append(await Promise.all(i.map(async(e,t)=>{const r=getWinChance(c,l,e.power,e.trait);e.element=traitNumberToName(e.trait);const s=fromEther(await usdToSkill(web3.utils.toBN(Number(n)+Number(o)*Math.sqrt(parseInt(e.power)/1e3)*parseInt(a)))),i=getAlignedCharacterPower(c,l),m=Math.floor(e.power/i*32)*parseInt(a);return`#${t+1} | ${elemToColor(e.element)} | ${e.power} | ${truncateToDecimals(s,6)} | ${m} | ${chanceColor(r)}<br>`}))),$("#btn-simulate").removeAttr("disabled")}catch(e){r.html(e.message),$("#btn-simulate").removeAttr("disabled")}}function chanceColor(e){let t="red";return e>=.9&&(t="green"),e>=.8&&e<.9&&(t="yellow"),e>=.7&&e<.8&&(t="orange"),`<span style="color: ${t}">${formatNumber(100*e,2)}%</span>`}function rename(e){$("#inp-rename").val(storeNames[e]),$("#inp-readdress").val(e),$("#modal-rename-account").modal("show",{backdrop:"static",keyboard:!1})}function export_data(){getLocalstorageToFile(`CBTracker-${(new Date).getTime()}.json`)}function import_data(){if(!(window.File&&window.FileReader&&window.FileList&&window.Blob))return alert("The File APIs are not fully supported in this browser.");var e=document.getElementById("file-import");if(!e)return alert("Um, couldn't find the fileinput element.");if(!e.files)return alert("This browser doesn't seem to support the `files` property of file inputs.");if(!e.files[0])return alert("Please select a file before clicking 'Import'");var t=e.files[0].type;if(console.log(t),"application/json"===t||"text/plain"===t){var a=e.files[0],r=new FileReader;r.readAsText(a),r.addEventListener("load",function(){if("application/json"===t){var{accounts:e,currency:a,hideAddress:n,names:o}=JSON.parse(r.result);storeAccounts=JSON.parse(e),storeNames=JSON.parse(o),n="true"===n,currCurrency=a}else{var c=r.result.split("\n");(c=c.map(e=>e.replace(/\r?\n|\r/g,""))).length&&c.forEach(e=>{var[t,a]=e.split(",");t&&a&&isAddress(a)&&!storeAccounts.includes(a)&&(storeAccounts.push(a),storeNames[a]=t)})}storeAccounts&&localStorage.setItem("accounts",JSON.stringify(storeAccounts)),storeNames&&localStorage.setItem("names",JSON.stringify(storeNames)),n&&localStorage.setItem("hideAddress",n),currCurrency&&localStorage.setItem("currency",currCurrency),addressHelper(n),charHelper(hideChars),skillsHelper(hideSkills),unstakeHelper(hideUnstake),refresh(),$("#modal-import").modal("hide")})}else alert("Please import a valid json/text file")}function addressHelper(e){e?($(".toggle.btn.btn-sm").removeClass("btn-primary"),$(".toggle.btn.btn-sm").addClass("btn-danger off"),$(".address-column").hide()):($(".toggle.btn.btn-sm").addClass("btn-primary"),$(".toggle.btn.btn-sm").removeClass("btn-danger off"),$(".address-column").show())}function charHelper(e){e?($(".toggle.btn.btn-sm").removeClass("btn-primary"),$(".toggle.btn.btn-sm").addClass("btn-danger off"),$(".char-column").hide()):($(".toggle.btn.btn-sm").addClass("btn-primary"),$(".toggle.btn.btn-sm").removeClass("btn-danger off"),$(".char-column").show())}function skillsHelper(e){e?($(".toggle.btn.btn-sm").removeClass("btn-primary"),$(".toggle.btn.btn-sm").addClass("btn-danger off"),$(".skill-column").hide()):($(".toggle.btn.btn-sm").addClass("btn-primary"),$(".toggle.btn.btn-sm").removeClass("btn-danger off"),$(".skill-column").show())}function unstakeHelper(e){e?($(".toggle.btn.btn-sm").removeClass("btn-primary"),$(".toggle.btn.btn-sm").addClass("btn-danger off"),$(".unstake-column").hide()):($(".toggle.btn.btn-sm").addClass("btn-primary"),$(".toggle.btn.btn-sm").removeClass("btn-danger off"),$(".unstake-column").show())}function getLocalstorageToFile(e){for(var t={},a=0;a<localStorage.length;a++){var r=localStorage.key(a),n=localStorage.getItem(r);t[r]=n}var o=JSON.stringify(t),c=new Blob([o],{type:"text/plain"}),l=window.URL.createObjectURL(c),s=document.createElement("a");s.download=e,s.innerHTML="Download File",s.href=l,s.onclick=function(){document.body.removeChild(event.target)},s.style.display="none",document.body.appendChild(s),s.click()}function saveToLocalStorage(e,t){localStorage.setItem(e,t)}function sortTable(){var e=$table.children().detach().get();e.sort(function(e,t){return parseInt($(e).data("index"))>parseInt($(t).data("index"))?1:parseInt($(e).data("index"))<parseInt($(t).data("index"))?-1:0}),$table.append(e)}function copy_address_to_clipboard(){navigator.clipboard.writeText("0x2548696795a3bCd6A8fAe7602fc26DD95A612574").then(e=>alert("Copied Address"),e=>alert("Fail\n"+e))}function unstakeSkillAt(e){const t=new Date((new Date).getTime()+1e3*e);return`<span title="${moment().countdown(t)}">${moment(t).fromNow()}`}$("document").ready(async()=>{priceTicker(),oracleTicker(),setRewardsClaimTaxMax(),setInterval(()=>{fiatConversion()},1e3),setInterval(async()=>{oracleTicker()},1e4),setInterval(()=>{priceTicker()},3e4),loadData()}),$("#btn-privacy").on("change",e=>{hideAddress=e.currentTarget.checked,localStorage.setItem("hideAddress",hideAddress),hideAddress?$(".address-column").hide():$(".address-column").show()}),$("#btn-tax").on("change",e=>{includeClaimTax=e.currentTarget.checked,localStorage.setItem("includeClaimTax",includeClaimTax),clearFiat(),refresh()}),$("#btn-hchars").on("change",e=>{hideChars=e.currentTarget.checked,localStorage.setItem("hideChars",hideChars),hideChars?$(".char-column").hide():$(".char-column").show()}),$("#btn-hskills").on("change",e=>{hideSkills=e.currentTarget.checked,localStorage.setItem("hideSkills",hideSkills),hideSkills?$(".skill-column").hide():$(".skill-column").show()}),$("#btn-hunstake").on("change",e=>{hideUnstake=e.currentTarget.checked,localStorage.setItem("hideUnstake",hideUnstake),hideUnstake?$(".unstake-column").hide():$(".unstake-column").show()}),$("#select-currency").on("change",e=>{currCurrency=e.currentTarget.value,localStorage.setItem("currency",currCurrency),clearFiat(),priceTicker(),populateCurrency(),refresh()}),$("#modal-add-account").on("shown.bs.modal",function(e){$("#inp-name").val(""),$("#inp-address").val("")});