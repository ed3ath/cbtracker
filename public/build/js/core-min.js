var accounts=localStorage.getItem("accounts"),names=localStorage.getItem("names"),hideAddress="true"===localStorage.getItem("hideAddress"),includeClaimTax="true"===localStorage.getItem("includeClaimTax"),hideChars="true"===localStorage.getItem("hideChars"),hideSkills="true"===localStorage.getItem("hideSkills"),hideUnstake="true"===localStorage.getItem("hideUnstake"),currCurrency=localStorage.getItem("currency"),currencies=["php","aed","ars","aud","brl","cny","eur","gbp","hkd","idr","inr","jpy","myr","sgd","thb","twd","usd","vnd"],rewardsClaimTaxMax=0,storeAccounts=[],storeNames={},skillPrice=0,localPrice=0,bnbPrice=0,usdPrice=0,gasPrice=0,lastReset=0,notified="true"===localStorage.getItem("notified"),resetTime=localStorage.getItem(`${currentNetwork}-reset`)||0,$table=$("#table-accounts tbody");currCurrency||(currCurrency="usd"),accounts&&names&&(storeAccounts=JSON.parse(accounts),storeNames=JSON.parse(names)),populateCurrency(),updateBalanceLabel(),hideAddress?$("#btn-privacy").prop("checked",!0):$("#btn-privacy").removeAttr("checked"),includeClaimTax?$("#btn-tax").prop("checked",!0):$("#btn-tax").removeAttr("checked"),hideChars?$("#btn-hchars").prop("checked",!0):$("#btn-hchars").removeAttr("checked"),hideSkills?$("#btn-hskills").prop("checked",!0):$("#btn-hskills").removeAttr("checked"),hideUnstake?$("#btn-hunstake").prop("checked",!0):$("#btn-hunstake").removeAttr("checked");var $cardIngame=$("#card-ingame"),$cardUnclaim=$("#card-unclaim"),$cardStake=$("#card-stake"),$cardWallet=$("#card-wallet"),$cardTotal=$("#card-total"),$cardTotalTitle=$("#card-total-title"),$cardBnb=$("#card-bnb"),$cardAccount=$("#card-account"),$cardChar=$("#card-char"),$cardPrice=$("#card-price"),$cardReward=$("#card-reward"),$cardClaim=$("#card-claim"),$cardReset=($cardReward=$("#card-reward"),$("#card-reset")),$convIngame=$("#conv-ingame"),$convUnclaim=$("#conv-unclaim"),$convStake=$("#conv-stake"),$convWallet=$("#conv-wallet"),$convTotal=$("#conv-total"),$convBnb=$("#conv-bnb"),$convPrice=$("#conv-price"),$convReward=$("#conv-reward"),$convClaim=$("#conv-claim");async function refresh(){loadData(),clearFiat(),fiatConversion()}function fiatConversion(){isElementNotZero($cardIngame)&&$convIngame.html(`(${toLocaleCurrency(convertToFiat($cardIngame.html()))})`),isElementNotZero($cardUnclaim)&&$convUnclaim.html(`(${toLocaleCurrency(convertToFiat($cardUnclaim.html()))})`),isElementNotZero($cardStake)&&$convStake.html(`(${toLocaleCurrency(convertToFiat($cardStake.html()))})`),isElementNotZero($cardWallet)&&$convWallet.html(`(${toLocaleCurrency(convertToFiat($cardWallet.html()))})`),isElementNotZero($cardTotal)&&$convTotal.html(`(${toLocaleCurrency(convertToFiat($cardTotal.html()))})`),isElementNotZero($cardBnb)&&$convBnb.html(`(${toLocaleCurrency(convertBnbToFiat($cardBnb.html()))})`),isElementNotZero($cardPrice)&&"usd"!==currCurrency&&$convPrice.html(`(${toLocaleCurrency(localPrice)})`),isElementNotZero($cardReward)&&$convReward.html(`(${toLocaleCurrency(convertToFiat($cardReward.html()))})`),isElementNotZero($cardClaim)&&$convClaim.html(`(${toLocaleCurrency(convertToFiat($cardClaim.html()))})`)}function clearFiat(){$convIngame.html(""),$convUnclaim.html(""),$convStake.html(""),$convWallet.html(""),$convTotal.html(""),$convBnb.html(""),$convPrice.html(""),$convReward.html(""),$convClaim.html("")}function isElementNotZero(e){return parseFloat(localeCurrencyToNumber(e.html()))>0}function localeCurrencyToNumber(e){return Number(String(e).replace(/[^0-9\.]+/g,""))}function convertToFiat(e){return localeCurrencyToNumber(e)*localPrice}function convertBnbToFiat(e){return parseFloat(e)*bnbPrice}function toLocaleCurrency(e){return e.toLocaleString("en-US",{style:"currency",currency:currCurrency.toUpperCase()})}function formatNumber(e,t=6){return Number(e).toLocaleString("en",{minimumFractionDigits:t,maximumFractionDigits:t})}async function loadData(){$(".btn-refresh").prop("disabled",!0),$table.html(""),$cardIngame.html(0),$cardUnclaim.html(0),$cardStake.html(0),$cardWallet.html(0),$cardTotal.html(0),$cardTotalTitle.html(!0===includeClaimTax?"Taxed Skill Assets":"Total Skill Assets"),$cardBnb.html(0),$cardChar.html(0),$cardAccount.html(storeAccounts.length);var e=await Promise.all(storeAccounts.map(async(e,t)=>{let a="";var r=await getAccountCharacters(e),n=await getBNBBalance(e),o=await getStakedBalance(e),s=await getStakedRewards(e),l=await getAccountSkillReward(e),c=l*(1-convertClaimTax(await getOwnRewardsClaimTax(e))),i=await getClaimable(e),m=parseInt(await getLastClaim(e)),d=moment().unix(),u=m+86400-d;console.log(m,d,u);var p=parseInt($cardChar.html());p+=r.length,$cardChar.html(p);var $=r.length;$cardIngame.html(formatNumber(parseFloat($cardIngame.html())+parseFloat(fromEther(i)))),$cardUnclaim.html(formatNumber(parseFloat($cardUnclaim.html())+parseFloat(fromEther(l)))),$cardStake.html(formatNumber(parseFloat($cardStake.html())+parseFloat(fromEther(s)))),$cardWallet.html(formatNumber(parseFloat($cardWallet.html())+parseFloat(fromEther(o)))),$cardTotal.html(formatNumber(parseFloat($cardTotal.html())+parseFloat(fromEther(sumOfArray([!0===includeClaimTax?c:l,s,o]))))),$cardTotalTitle.html(!0===includeClaimTax?"Taxed Skill Assets":"Total Skill Assets"),$cardBnb.html(formatNumber(parseFloat($cardBnb.html())+parseFloat(fromEther(n))));let h="",g={};h=$>0?`<td class="char-column" data-cid="${(g=await Promise.all(r.map(async e=>{var t=await characterFromContract(e,await getCharacterData(e)),a=await getCharacterExp(e),r=await getCharacterStamina(e),n=getNextTargetExpLevel(t.level);return{charId:e,exp:a,sta:r,trait:t.trait,nextLevel:n.level+1,nextExp:n.exp-(parseInt(t.xp)+parseInt(a)),mustClaim:n.exp-(parseInt(t.xp)+parseInt(a))<=0,level:t.level+1,element:t.traitName}})))[0].charId}">${g[0].charId}</td>\n                        <td class="char-column">${levelToColor(g[0].level)}</td>\n                        <td class="char-column">${elemToColor(g[0].element)}</td>\n                        <td class="char-column"><span data-cid="${g[0].charId}">${g[0].exp}</span> xp</td>\n                        <td class="char-column">${g[0].nextLevel}<br/><span style='font-size: 10px'>${g[0].mustClaim?'<span class="text-gold">(Claim now)</span>':`<span data-xp="${g[0].charId}">(${g[0].nextExp}</span> xp left)`}</span></td>\n                        <td class="char-column" data-sta="${g[0].charId}">${staminaToColor(g[0].sta)}<br/>${staminaFullAt(g[0].sta)}</td>`:'<td class="char-column" colspan="6"></td>',$<1&&($=1);var b=sumOfArray([l,s,o]);return a+=` <tr class="text-white align-middle" data-row="${e}">\n                            <td rowspan="${$}" class='align-middle' data-id="${e}">${storeNames[e]}</td>\n                            <td rowspan="${$}" class='align-middle address-column'>${e}</td>\n                            ${h}\n                            <td class="skill-column" rowspan="${$}" class='align-middle'>${formatNumber(fromEther(l))}<br />${Number(parseFloat(fromEther(l)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(l))))})</span>`:""}</td>\n                            <td class="skill-column" rowspan="${$}" class='align-middle'>${formatNumber(fromEther(i))}<br />${Number(parseFloat(fromEther(i)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(i))))})</span>`:""}</td>\n                            <td class="skill-column" rowspan="${$}" class='align-middle'>${formatNumber(fromEther(s))}<br />${Number(parseFloat(fromEther(s)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(s))))})</span>`:""}</td>\n                            <td class="skill-column" rowspan="${$}" class='align-middle'>${formatNumber(fromEther(o))}<br />${Number(parseFloat(fromEther(o)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(o))))})</span>`:""}</td>\n                            <td class="skill-column" rowspan="${$}" class='align-middle'>${formatNumber(fromEther(b))}<br />${Number(parseFloat(fromEther(b)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertToFiat(Number(fromEther(b))))})</span>`:""}</td>\n                            <td class="unstake-column" rowspan="${$}" class='align-middle'>${u<=0?'<span class="text-gold">Claim now</span>':unstakeSkillAt(u)}</td>\n                            <td rowspan="${$}" class='align-middle'>${bnbFormatter(formatNumber(fromEther(n)))}<br />${Number(parseFloat(fromEther(n)).toFixed(6))>0?`<span style="font-size: 10px;">(${toLocaleCurrency(convertBnbToFiat(Number(fromEther(n))))})</span>`:""}</td>\n                            <td rowspan="${$}" class='align-middle'><button type="button" class="btn btn-success btn-sm mb-1" onclick="rename('${e}')">Rename</button><br>\n                            <button type="button" class="btn btn-warning btn-sm mb-1" onclick="simulate('${e}')">Combat Simulator</button><br>\n                            <button type="button" class="btn btn-primary btn-sm mb-1" onclick="logs('${e}')">Fight Logs</button><br>\n                            <button type="button" class="btn btn-danger btn-sm" onclick="remove('${e}')">Remove</button></td>\n                        </tr>`,g.length>1&&g.forEach((t,r)=>{r>0&&(a+=`<tr class="text-white align-middle" data-row="${e}">\n                                        <td class="char-column">${t.charId}</td>\n                                        <td class="char-column">${levelToColor(t.level)}</td>\n                                        <td class="char-column">${elemToColor(t.element)}</td>\n                                        <td class="char-column"><span data-cid="${t.charId}">${t.exp}</span> xp</td>\n                                        <td class="char-column">${t.nextLevel}<br/><span style='font-size: 10px'>(${t.mustClaim?'<span class="text-gold">Claim now</span>':`<span data-xp="${t.charId}">${t.nextExp}</span> xp left`})</span></td>\n                                        <td class="char-column">${staminaToColor(t.sta)}<br/>${staminaFullAt(t.sta)}</td>\n                                    </tr>`)}),a}));$table.html(e),addressHelper(hideAddress),charHelper(hideChars),skillsHelper(hideSkills),unstakeHelper(hideUnstake),$(".btn-refresh").removeAttr("disabled")}function versionCheck(){$.get("/version",e=>{version!==e.version&&alert("CryptoBlades Tracker has a new update, please refresh your page!")})}function populateCurrency(){$("#select-currency").html(""),$("#select-currency").append(new Option(currCurrency.toUpperCase(),currCurrency)),currencies.forEach(e=>{currCurrency!==e&&$("#select-currency").append(new Option(e.toUpperCase(),e))})}function addAccount(){var e=$("#inp-name").val().trim(),t=$("#inp-address").val().trim();storeAccounts.find(e=>e===t)||isAddress(t)&&($("#modal-add-account").modal("hide"),storeAccounts.push(t),storeNames[t]=e,storeAccounts&&localStorage.setItem("accounts",JSON.stringify(storeAccounts)),storeNames&&localStorage.setItem("names",JSON.stringify(storeNames)),refresh())}function renameAccount(){var e=$("#inp-rename").val().trim(),t=$("#inp-readdress").val().trim();$("#modal-rename-account").modal("hide"),storeNames[t]=e,saveToLocalStorage("names",JSON.stringify(storeNames)),$(`td[data-id=${t}]`).html(e)}async function priceTicker(){skillPrice=await getSkillPrice(),gasPrice=await getGasPrice(),"poly"===currentNetwork&&(skillPrice*=gasPrice*=1e12),$.get(`https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=${currencies.join(",")}`,async e=>{usdPrice=e.tether[currCurrency],bnbPrice=gasPrice*usdPrice,"bsc"===currentNetwork&&(skillPrice*=gasPrice),localPrice=usdPrice*skillPrice,$cardPrice.html(skillPrice.toLocaleString("en-US",{style:"currency",currency:"USD"}))})}async function statTicker(){const e=await getCurrentAllowance(),t=await getMaxClaim();$cardReward.html(parseFloat(fromEther(e)).toFixed(6)),$cardClaim.html(parseFloat(fromEther(t)).toFixed(6))}async function resetTicker(){moment().unix()>=lastReset+3600&&(lastReset+=3600);var e=moment.duration(1e3*(lastReset+3600-moment().unix()),"milliseconds");$cardReset.html(`in ${e.minutes()}m and ${e.seconds()}s`),0===e.minutes()&&e.seconds()<59&&!notified&&(notify(currentNetwork.toUpperCase(),"Next reset in less than a minute!"),notified=!0,localStorage.setItem("notified",notified)),notified||lastReset===resetTime||(notified=!1,localStorage.setItem(`${currentNetwork}-reset`,parseInt(await getLastReset())))}async function setRewardsClaimTaxMax(){rewardsClaimTaxMax=await getRewardsClaimTaxMax()}function charFormatter(e){return e.map(e=>`${e.charId} | Lv. ${e.level} | ${elemToColor(e.element)} | ${e.exp} xp | Lv. ${e.nextLevel} (${e.mustClaim?'<span style="color: gold">Claim Exp</span>':`${e.nextExp} xp left`}) | (${staminaToColor(e.sta)})`).join("<br>")}function elemToColor(e){switch(e){case"Fire":return'<img src="/img/fire.png" alt="Fire" width="20">';case"Earth":return'<img src="/img/earth.png" alt="Earth" width="20">';case"Lightning":return'<img src="/img/lightning.png" alt="Lightning" width="20">';case"Water":return'<img src="/img/water.png" alt="Water" width="20">';default:return"<span style='color: red'>N/A</span>"}}function staminaToColor(e){return(e=parseInt(e))<40?`${e}/200`:e<80?`<span style='color: green'>${e}/200</span>`:e<120?`<span style='color: yellow'>${e}/200</span>`:e<160?`<span style='color: orange'>${e}/200</span>`:`<span style='color: red'>${e}/200</span>`}function staminaFullAt(e){if(200==e)return"";let t=5*(200-(e=parseInt(e)));return`<span style='font-size: 10px'>(Full ${moment(new Date((new Date).getTime()+1e3*t*60)).fromNow()})</span>`}function levelToColor(e){return e<11?e:e<21?`<span style='color: cyan'>${e}</span>`:e<31?`<span style='color: green'>${e}</span>`:e<41?`<span style='color: orange'>${e}</span>`:`<span style='color: gold'>${e}</span>`}function getClassFromTrait(e){switch(parseInt(e)){case 0:return"color: red";case 1:return"color: green";case 2:return"color: yellow";case 3:return"color: cyan";default:return"color: red"}}function currFormatter(e){return formatNumber(e,4)}function balanceFormatter(e){return`<span style="color: green">${currFormatter(e.ingame)}</span> | <span style="color: cyan">${currFormatter(e.unclaimed)}</span> | <span style="color: orange">${currFormatter(e.staked)}</span> | <span style="color: red">${currFormatter(e.wallet)}</span>`}function bnbFormatter(e){var t=parseFloat(e);return parseFloat(e)<.01?`<span class='text-danger'>${t}</span>`:parseFloat(e)<.03?`<span class='text-warning'>${t}</span>`:`<span class='text-success'>${t}</span>`}function stakedFormatter(e,t){return`${formatNumber(e)}${t.timeLeft?` (${t.timeLeft})`:""}`}function nameFormatter(e){return storeNames[e]}function convertSkill(e){return parseFloat(e)>0?`${formatNumber(e)}<br><span class="fs-md">(${(parseFloat(e)*parseFloat(skillPrice)).toLocaleString("en-US",{style:"currency",currency:currCurrency.toUpperCase()})})</span>`:0}function convertBNB(e){return parseFloat(e)>0?`${formatNumber(e)}<br><span class="fs-md">(${(parseFloat(e)*parseFloat(bnbPrice)).toLocaleString("en-US",{style:"currency",currency:currCurrency.toUpperCase()})})</span>`:0}function convertClaimTax(e){return.15*e/rewardsClaimTaxMax}function remove(e){confirm(`Are you sure you want to remove ${storeNames[e]}?`)&&(storeAccounts.splice(storeAccounts.indexOf(e),1),delete storeNames[e],storeAccounts&&localStorage.setItem("accounts",JSON.stringify(storeAccounts)),storeNames&&localStorage.setItem("names",JSON.stringify(storeNames)),refresh())}async function simulate(e){$("#combat-name").val(storeNames[e]),$("#combat-address").val(e),$("#combat-character").html(new Option("-- Select character --","")),$("#combat-weapon").html(new Option("-- Select weapon --","")),$("#combat-stamina").html(new Option("-- Select multiplier --","")),$("#combat-result").html("");for(var t=1;t<=5;t++)$("#combat-stamina").append(`<option value="${t}">${40*t} stamina (x${t})</option>`);var a=await getAccountCharacters(e),r=await getAccountWeapons(e),n=await Promise.all(a.map(async e=>{var t=characterFromContract(e,await getCharacterData(e)),a=await getCharacterStamina(e);return`<option style="${getClassFromTrait(t.trait)}" value="${e}">${e} | ${t.traitName} | Lv. ${t.level+1} | Sta. ${a}/200</option>`})),o=await Promise.all(r.map(async e=>weaponFromContract(e,await getWeaponData(e))));o.sort((e,t)=>t.stars-e.stars);var s=o.map(e=>`<option style="${getClassFromTrait(e.trait)}" value="${e.id}">${e.id} | ${e.stars+1}-star ${e.element}</option>`);$("#combat-character").append(n),$("#combat-weapon").append(s),$("#modal-combat").modal("show",{backdrop:"static",keyboard:!1})}async function combatSimulate(){$("#btn-simulate").prop("disabled",!0);var e=$("#combat-character").val(),t=$("#combat-weapon").val(),a=$("#combat-stamina").val(),r=$("#combat-result");try{if(!e)throw Error("Please select a character.");if(!t)throw Error("Please select a weapon.");if(!a)throw Error("Please select a stamina multiplier.");if(r.html("Generating results..."),await getCharacterStamina(e)<40*parseInt(a))throw Error("Not enough stamina");var n=characterFromContract(e,await getCharacterData(e)),o=weaponFromContract(t,await getWeaponData(t)),s=await characterTargets(e,t),l=await getEnemyDetails(s);r.html("Enemy | Element | Power | Est. Reward | XP | Chance<br><hr>"),r.append(await Promise.all(l.map(async(e,t)=>{var r=getWinChance(n,o,e.power,e.trait);e.element=traitNumberToName(e.trait);var s=fromEther(await getTokenReward(e.power)*parseInt(a)),l=getAlignedCharacterPower(n,o),c=Math.floor(e.power/l*32)*parseInt(a);return`#${t+1} | ${elemToColor(e.element)} | ${e.power} | ${truncateToDecimals(s,6)} | ${c} | ${chanceColor(r)}<br>`}))),$("#btn-simulate").removeAttr("disabled")}catch(e){r.html(e.message),$("#btn-simulate").removeAttr("disabled")}}function chanceColor(e){let t="red";return e>=.9&&(t="green"),e>=.8&&e<.9&&(t="yellow"),e>=.7&&e<.8&&(t="orange"),`<span style="color: ${t}">${formatNumber(100*e,2)}%</span>`}function rename(e){$("#inp-rename").val(storeNames[e]),$("#inp-readdress").val(e),$("#modal-rename-account").modal("show",{backdrop:"static",keyboard:!1})}function export_data(){getLocalstorageToFile(`CBTracker-${(new Date).getTime()}.json`)}function import_data(){if(!(window.File&&window.FileReader&&window.FileList&&window.Blob))return alert("The File APIs are not fully supported in this browser.");var e=document.getElementById("file-import");if(!e)return alert("Um, couldn't find the fileinput element.");if(!e.files)return alert("This browser doesn't seem to support the `files` property of file inputs.");if(!e.files[0])return alert("Please select a file before clicking 'Import'");var t=e.files[0].type;if("application/json"===t||"text/plain"===t){var a=e.files[0],r=new FileReader;r.readAsText(a),r.addEventListener("load",function(){if("application/json"===t){var{accounts:e,currency:a,hideAddress:n,names:o}=JSON.parse(r.result);storeAccounts=JSON.parse(e),storeNames=JSON.parse(o),n="true"===n,currCurrency=a}else{var s=r.result.split("\n");(s=s.map(e=>e.replace(/\r?\n|\r/g,""))).length&&s.forEach(e=>{var[t,a]=e.split(",");t&&a&&isAddress(a)&&!storeAccounts.includes(a)&&(storeAccounts.push(a),storeNames[a]=t)})}storeAccounts&&localStorage.setItem("accounts",JSON.stringify(storeAccounts)),storeNames&&localStorage.setItem("names",JSON.stringify(storeNames)),n&&localStorage.setItem("hideAddress",n),currCurrency&&localStorage.setItem("currency",currCurrency),addressHelper(n),charHelper(hideChars),skillsHelper(hideSkills),unstakeHelper(hideUnstake),refresh(),$("#modal-import").modal("hide")})}else alert("Please import a valid json/text file")}function addressHelper(e){e?($(".toggle.btn.btn-sm").removeClass("btn-primary"),$(".toggle.btn.btn-sm").addClass("btn-danger off"),$(".address-column").hide()):($(".toggle.btn.btn-sm").addClass("btn-primary"),$(".toggle.btn.btn-sm").removeClass("btn-danger off"),$(".address-column").show())}function charHelper(e){e?($(".toggle.btn.btn-sm").removeClass("btn-primary"),$(".toggle.btn.btn-sm").addClass("btn-danger off"),$(".char-column").hide()):($(".toggle.btn.btn-sm").addClass("btn-primary"),$(".toggle.btn.btn-sm").removeClass("btn-danger off"),$(".char-column").show())}function skillsHelper(e){e?($(".toggle.btn.btn-sm").removeClass("btn-primary"),$(".toggle.btn.btn-sm").addClass("btn-danger off"),$(".skill-column").hide()):($(".toggle.btn.btn-sm").addClass("btn-primary"),$(".toggle.btn.btn-sm").removeClass("btn-danger off"),$(".skill-column").show())}function unstakeHelper(e){e?($(".toggle.btn.btn-sm").removeClass("btn-primary"),$(".toggle.btn.btn-sm").addClass("btn-danger off"),$(".unstake-column").hide()):($(".toggle.btn.btn-sm").addClass("btn-primary"),$(".toggle.btn.btn-sm").removeClass("btn-danger off"),$(".unstake-column").show())}function getLocalstorageToFile(e){for(var t={},a=0;a<localStorage.length;a++){var r=localStorage.key(a),n=localStorage.getItem(r);t[r]=n}var o=JSON.stringify(t),s=new Blob([o],{type:"text/plain"}),l=window.URL.createObjectURL(s),c=document.createElement("a");c.download=e,c.innerHTML="Download File",c.href=l,c.onclick=function(){document.body.removeChild(event.target)},c.style.display="none",document.body.appendChild(c),c.click()}function saveToLocalStorage(e,t){localStorage.setItem(e,t)}function sortTable(){var e=$table.children().detach().get();e.sort(function(e,t){return parseInt($(e).data("index"))>parseInt($(t).data("index"))?1:parseInt($(e).data("index"))<parseInt($(t).data("index"))?-1:0}),$table.append(e)}function copy_address_to_clipboard(){navigator.clipboard.writeText("0x2548696795a3bCd6A8fAe7602fc26DD95A612574").then(e=>alert("Copied Address"),e=>alert("Fail\n"+e))}function unstakeSkillAt(e){var t=new Date((new Date).getTime()+1e3*e);return`<span title="${moment().countdown(t)}">${moment(t).fromNow()}`}function gasName(e){switch(e){case"bsc":return"BNB";case"heco":return"HT";case"okex":return"OKT";case"poly":return"MATIC";default:return"BNB"}}function updateBalanceLabel(){$("#label-tbalance").html(`Total ${gasName(currentNetwork)} Balance`),$("#label-balance").html(`${gasName(currentNetwork)} Balance`)}$("document").ready(async()=>{priceTicker(),setRewardsClaimTaxMax(),statTicker(),lastReset=parseInt(await getLastReset()),resetTime=parseInt(lastReset),localStorage.setItem(`${currentNetwork}-reset`,resetTime),setInterval(()=>{fiatConversion(),resetTicker()},1e3),setInterval(()=>{priceTicker()},1e4),setInterval(()=>{statTicker()},1e3),loadData()});const getLogs=async(e,t,a)=>getPastEvents("FightOutcome",e,t,conAddress[currentNetwork].cryptoBlades,["0x7a58aac6530017822bf3210fccef7efa31f56277f19966bc887bfb11f40ca96d",web3.eth.abi.encodeParameter("address",a)]),delay=async e=>await new Promise(t=>setTimeout(t,e));async function logs(e){const t=$("#table-logs tbody");let a=(await getLatestBlock()).number-3e4,r=[],n=0,o=0,s=0,l=0;for(let e=0;e<10;e++)r.push(a),a+=1500;t.html(""),$("#card-fights").html(0),$("#card-winrate").html("0.00%"),$("#card-skill").html(0),$("#card-exp").html(0),$("#table-logs").bootstrapTable("showLoading"),$("#modal-logs").modal("show",{backdrop:"static",keyboard:!1});let c=0;for(let a of r)try{const r=await getLogs(a,a+1500,e);c+=r.length,await Promise.all(r.map(async e=>{const{character:a,weapon:r,enemyRoll:c,playerRoll:i,skillGain:m,xpGain:d}=e.returnValues;n+=1,s+=Number(fromEther(m)),l+=Number(d),parseInt(i)>parseInt(c)&&(o+=1),t.append(`<tr>\n                                <td class='text-white text-center'>${parseInt(i)>parseInt(c)?'<span class="text-success">Won</span>':'<span class="text-danger">Lost</span>'}</td>\n                                <td class='text-white text-center'>${a}</td>\n                                <td class='text-white text-center'>${r}</td>\n                                <td class='text-white text-center'>${i}</td>\n                                <td class='text-white text-center'>${c}</td>\n                                <td class='text-white text-center'>${parseFloat(fromEther(m)).toFixed(6)}</td>\n                                <td class='text-white text-center'>${d}</td>\n                            </tr>`)}))}catch(e){console.log(e)}0===c&&t.html('<tr><td class="text-center text-white" colspan="7">No fights retrieved</td></tr>'),$("#card-fights").html(n),$("#card-winrate").html(`${o>0?parseFloat(o/n*100).toFixed(2):"0.00"}%`),$("#card-skill").html(parseFloat(s).toFixed(6)),$("#card-exp").html(l),$("#table-logs").bootstrapTable("hideLoading")}function notify(e,t){"granted"!==Notification.permission?Notification.requestPermission():new Notification(e,{body:t})}$("#btn-privacy").on("change",e=>{hideAddress=e.currentTarget.checked,localStorage.setItem("hideAddress",hideAddress),hideAddress?$(".address-column").hide():$(".address-column").show()}),$("#btn-tax").on("change",e=>{includeClaimTax=e.currentTarget.checked,localStorage.setItem("includeClaimTax",includeClaimTax),clearFiat(),refresh()}),$("#btn-hchars").on("change",e=>{hideChars=e.currentTarget.checked,localStorage.setItem("hideChars",hideChars),hideChars?$(".char-column").hide():$(".char-column").show()}),$("#btn-hskills").on("change",e=>{hideSkills=e.currentTarget.checked,localStorage.setItem("hideSkills",hideSkills),hideSkills?$(".skill-column").hide():$(".skill-column").show()}),$("#btn-hunstake").on("change",e=>{hideUnstake=e.currentTarget.checked,localStorage.setItem("hideUnstake",hideUnstake),hideUnstake?$(".unstake-column").hide():$(".unstake-column").show()}),$("#select-currency").on("change",e=>{currCurrency=e.currentTarget.value,localStorage.setItem("currency",currCurrency),clearFiat(),priceTicker(),populateCurrency(),refresh()}),$("#select-network").on("change",async e=>{updateNetwork(e.currentTarget.value),populateNetwork(),updateBalanceLabel(),refresh(),clearFiat(),priceTicker(),statTicker(),lastReset=parseInt(await getLastReset()),resetTime=parseInt(lastReset),localStorage.setItem(`${currentNetwork}-reset`,resetTime),notified=!1,localStorage.setItem("notified",notified),resetTicker()}),$("#modal-add-account").on("shown.bs.modal",function(e){$("#inp-name").val(""),$("#inp-address").val("")}),document.addEventListener("DOMContentLoaded",function(){Notification?"granted"!==Notification.permission&&Notification.requestPermission():alert("Desktop notifications not available in your browser. Try another browser.")});