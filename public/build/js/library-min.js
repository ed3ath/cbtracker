var networks=["bsc","heco","okex","poly"],conAddress={bsc:{staking:"0xd6b2D8f59Bf30cfE7009fB4fC00a7b13Ca836A2c",token:"0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab",cryptoBlades:"0x39Bea96e13453Ed52A734B6ACEeD4c41F57B2271",character:"0xc6f252c2cdd4087e30608a35c022ce490b58179b",weapon:"0x7e091b0a220356b157131c831258a9c98ac8031a",market:"0x90099dA42806b21128A094C713347C7885aF79e2",skillPair:"0x0deb588c1ec6f1d9f348126d401f05c4c7b7a80c",tokenPair:"0x58f876857a02d6762e0101bb5c46a8c1ed44dc16"},heco:{staking:"0x6109A500e5b9CE40FFe075Ea3A6beA6e93c23BcF",token:"0x27d4DfDB3fDf58e198bA4dbc23B2F82c0b8e3405",cryptoBlades:"0x29869EDb088466a49f75654d8F04edd16Bf60e75",character:"0xF6092CDEaabd02069cB56E2b770367AAcf49dfba",weapon:"0xa0f254436E43239D2B3947A9D590C495738B6A4C",market:"0x0f6dAA5F4b4277BE496c80aeCD0D101b8dEE6440",skillPair:"0x7c9739ecD7882157b1C526a832FfD5A50860078d",tokenPair:"0x3289250099cF4cF9e59Fd728a93F36594C1369f0"},okex:{staking:"0xC5707a6a16CCe1963Ec3E6cdEE0A91e4876Be395",token:"0xcC137b0713E0DC63b1fA136272014F2A54Dd7aCB",cryptoBlades:"0x98145a2fEBac238280bbdEDc2757dC162318b16e",character:"0x6A1d1803d4EDF5CF27EDb64ae95A22F81707eA38",weapon:"0x364759180A6484e57ECD73C042264A6Da75770e8",market:"0x5ea2373e281E92FE3c53dc36cE855D89BF25F6F8",skillPair:"0x2d9cdad4b89d91e6a44ec1c8b227b0c2b0d4e2cf",tokenPair:"0xa75bd9f086bbc1168b01fd5e750986b5170c2b26"},poly:{staking:"0xE34e7cA8e64884E3b5Cd48991ba229d8302E85da",token:"0x863D6074aFaF02D9D41A5f8Ea83278DF7089aA86",cryptoBlades:"0x070b1A95898B927A900A1F9F42b114154648E51A",character:"0x929059Fef67b88CE2F4127e59B50bEA123981998",weapon:"0xD9C5449EfB3f99952F73e824688724aAFB81dE6E",market:"0xeE6e8467268eA752b027676B3EBcD4eB05749874",skillPair:"0x42ba6f3aF9d8A2A30F5e55362c45e7121a932b77",tokenPair:"0x65d43b64e3b31965cd5ea367d4c2b94c03084797"}},nodes={bsc:"https://bsc-dataseed1.defibit.io/",heco:"https://http-mainnet.hecochain.com",okex:"https://exchainrpc.okex.org",poly:"https://matic-mainnet.chainstacklabs.com"},currentNetwork=localStorage.getItem("network");networks.includes(currentNetwork)||(currentNetwork="bsc",localStorage.setItem("network",currentNetwork));var web3=new Web3(nodes[currentNetwork]),conStakingReward=new web3.eth.Contract(IStakingRewards,conAddress[currentNetwork].staking),conStakingToken=new web3.eth.Contract(IERC20,conAddress[currentNetwork].token),conCryptoBlades=new web3.eth.Contract(CryptoBlades,conAddress[currentNetwork].cryptoBlades),conCharacters=new web3.eth.Contract(Characters,conAddress[currentNetwork].character),conWeapons=new web3.eth.Contract(Weapons,conAddress[currentNetwork].weapon),conMarket=new web3.eth.Contract(NFTMarket,conAddress[currentNetwork].market),skillPair=new web3.eth.Contract(SwapPair,conAddress[currentNetwork].skillPair),gasPair=new web3.eth.Contract(SwapPair,conAddress[currentNetwork].tokenPair),isAddress=e=>web3.utils.isAddress(e),getBNBBalance=e=>web3.eth.getBalance(e),fromEther=e=>web3.utils.fromWei(BigInt(e).toString(),"ether"),getRewardsPoolBalance=()=>conStakingReward.methods.balanceOf(mainAddress).call(),getStakingPoolBalance=()=>conStakingToken.methods.balanceOf(stakingRewardAddress).call(),getStakedBalance=e=>conStakingToken.methods.balanceOf(e).call(),getStakedRewards=e=>conStakingReward.methods.balanceOf(e).call(),getStakedTimeLeft=e=>conStakingReward.methods.getStakeUnlockTimeLeft().call({from:e}),getAccountCharacters=async e=>{var t=parseInt(await conCharacters.methods.balanceOf(e).call(),10);return await Promise.all([...Array(t).keys()].map((t,a)=>conCharacters.methods.tokenOfOwnerByIndex(e,a).call()))},getAccountWeapons=async e=>{var t=parseInt(await conWeapons.methods.balanceOf(e).call(),10);return await Promise.all([...Array(t).keys()].map((t,a)=>conWeapons.methods.tokenOfOwnerByIndex(e,a).call()))},getAccountSkillReward=e=>conCryptoBlades.methods.getTokenRewardsFor(e).call(),getOwnRewardsClaimTax=e=>conCryptoBlades.methods.getOwnRewardsClaimTax().call({from:e}),getRewardsClaimTaxMax=e=>conCryptoBlades.methods.REWARDS_CLAIM_TAX_MAX().call({from:e}),getIngameSkill=e=>conCryptoBlades.methods.inGameOnlyFunds(e).call({from:e}),getCharacterExp=e=>conCryptoBlades.methods.getXpRewards(`${e}`).call(),characterTargets=(e,t)=>conCryptoBlades.methods.getTargets(e,t).call(),getCharacterStamina=e=>conCharacters.methods.getStaminaPoints(`${e}`).call(),getCharacterData=e=>conCharacters.methods.get(`${e}`).call(),getWeaponData=e=>conWeapons.methods.get(`${e}`).call(),fetchFightGasOffset=async()=>conCryptoBlades.methods.fightRewardGasOffset().call(),fetchFightBaseline=async()=>conCryptoBlades.methods.fightRewardBaseline().call(),usdToSkill=async e=>conCryptoBlades.methods.usdToSkill(e).call(),decodeAbi=(e,t)=>web3.eth.abi.decodeParameters(e,t),getPastLogs=e=>web3.eth.getPastLogs(e),getLatestBlock=async()=>web3.eth.getBlock("latest"),getPastEvents=async(e,t,a,r,n)=>conCryptoBlades.getPastEvents(e,{fromBlock:t,toBlock:a,address:r,topics:n}),getTransaction=async e=>web3.eth.getTransaction(e),getTransactionReceipt=async e=>web3.eth.getTransactionReceipt(e),getFinalPrice=async(e,t)=>conMarket.methods.getFinalPrice(e,t).call(),getTokenGainForFight=async e=>conCryptoBlades.methods.getTokenGainForFight(e).call(),getPayPerFight=async()=>conCryptoBlades.methods.vars(5).call(),getLastReset=async()=>conCryptoBlades.methods.vars(6).call(),getMaxClaim=async()=>conCryptoBlades.methods.vars(7).call(),getSkillPrice=async()=>{const e=await skillPair.methods.getReserves().call();return"okex"===currentNetwork||"poly"===currentNetwork?e[0]/e[1]:e[1]/e[0]},getGasPrice=async()=>{const e=await gasPair.methods.getReserves().call();return"okex"===currentNetwork?e[0]/e[1]:e[1]/e[0]};function populateNetwork(){$("#select-network").html(""),$("#select-network").append(new Option(currentNetwork.toUpperCase(),currentNetwork)),networks.forEach(e=>{currentNetwork!==e&&$("#select-network").append(new Option(e.toUpperCase(),e))})}function updateNetwork(e){currentNetwork=e,localStorage.setItem("network",currentNetwork),web3=new Web3(nodes[currentNetwork]),conStakingReward=new web3.eth.Contract(IStakingRewards,conAddress[currentNetwork].staking),conStakingToken=new web3.eth.Contract(IERC20,conAddress[currentNetwork].token),conCryptoBlades=new web3.eth.Contract(CryptoBlades,conAddress[currentNetwork].cryptoBlades),conCharacters=new web3.eth.Contract(Characters,conAddress[currentNetwork].character),conWeapons=new web3.eth.Contract(Weapons,conAddress[currentNetwork].weapon),conMarket=new web3.eth.Contract(NFTMarket,conAddress[currentNetwork].market),skillPair=new web3.eth.Contract(SwapPair,conAddress[currentNetwork].skillPair),gasPair=new web3.eth.Contract(SwapPair,conAddress[currentNetwork].tokenPair)}populateNetwork();const randomString=e=>{const t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ";let a="";for(let r=0;r<e;r+=1)a+=t.charAt(Math.floor(Math.random()*t.length));return a};function CharacterPower(e){return(1e3+10*e)*(Math.floor(e/10)+1)}const WeaponElement={Fire:0,Earth:1,Lightning:2,Water:3},WeaponTrait={STR:0,DEX:1,CHA:2,INT:3,PWR:4};function traitNumberToName(e){switch(e){case WeaponElement.Fire:return"Fire";case WeaponElement.Earth:return"Earth";case WeaponElement.Water:return"Water";case WeaponElement.Lightning:return"Lightning";default:return"???"}}function characterFromContract(e,t){return{id:+e,xp:t[0],level:parseInt(t[1],10),trait:t[2],traitName:traitNumberToName(+t[2]),staminaTimestamp:t[3],head:t[4],arms:t[5],torso:t[6],legs:t[7],boots:t[8],race:t[9]}}function getStatPatternFromProperties(e){return e>>5&127}function getStat1Trait(e){return e%5}function getStat2Trait(e){return Math.floor(e/5)%5}function getStat3Trait(e){return Math.floor(Math.floor(e/5)/5)%5}function statNumberToName(e){switch(e){case WeaponTrait.CHA:return"CHA";case WeaponTrait.DEX:return"DEX";case WeaponTrait.INT:return"INT";case WeaponTrait.PWR:return"PWR";case WeaponTrait.STR:return"STR";default:return"???"}}function getWeaponTraitFromProperties(e){return e>>3&3}function weaponFromContract(e,t){const a=t[0],r=t[1],n=t[2],o=t[3],c=+t[4],s=t[5],i=t[6],l=t[7],d=t[8],u=+t[9],h=+t[10],w=+r,p=+n,f=+o,g=getStatPatternFromProperties(+a),k=getStat1Trait(g),m=getStat2Trait(g),b=getStat3Trait(g),C=getWeaponTraitFromProperties(+a),S=255&u,A=u>>8&255,E=u>>16&255,N=7&+a;return{id:+e,properties:a,trait:C,element:traitNumberToName(C),stat1:statNumberToName(k),stat1Value:w,stat1Type:k,stat2:statNumberToName(m),stat2Value:p,stat2Type:m,stat3:statNumberToName(b),stat3Value:f,stat3Type:b,level:c,blade:s,crossguard:i,grip:l,pommel:d,stars:N,lowStarBurnPoints:S,fourStarBurnPoints:A,fiveStarBurnPoints:E,bonusPower:h,traitNum:C}}function getElementAdvantage(e,t){return(e+1)%4===t?1:(t+1)%4===e?-1:0}function AdjustStatForTrait(e,t,a){let r=e;return t===a?r=Math.floor(1.07*r):t===WeaponTrait.PWR&&(r=Math.floor(1.03*r)),r}function MultiplierPerEffectiveStat(e){return.25*e}function Stat1PercentForChar(e,t){return MultiplierPerEffectiveStat(AdjustStatForTrait(e.stat1Value,e.stat1Type,t))}function Stat2PercentForChar(e,t){return MultiplierPerEffectiveStat(AdjustStatForTrait(e.stat2Value,e.stat2Type,t))}function Stat3PercentForChar(e,t){return MultiplierPerEffectiveStat(AdjustStatForTrait(e.stat3Value,e.stat3Type,t))}function GetTotalMultiplierForTrait(e,t){return 1+.01*(Stat1PercentForChar(e,t)+Stat2PercentForChar(e,t)+Stat3PercentForChar(e,t))}function getAlignedCharacterPower(e,t){return CharacterPower(e.level)*GetTotalMultiplierForTrait(t,parseInt(e.trait,10))+t.bonusPower}function getWinChance(e,t,a,r){const n=parseInt(e.trait,10),o=parseInt(WeaponElement[t.element],10),c=getAlignedCharacterPower(e,t),s=1+.075*(o===n?1:0)+.075*getElementAdvantage(n,r),i=c*s*.9,l=c*s*1.1,d=.9*a,u=1.1*a;let h=0,w=0;for(let e=Math.floor(i);e<=l;e++)for(let t=Math.floor(d);t<=u;t++)e>=t?h++:w++;return h/(h+w)}const SECONDS_IN_MINUTE=60,SECONDS_IN_HOUR=60*SECONDS_IN_MINUTE,SECONDS_IN_DAY=24*SECONDS_IN_HOUR;function formatDurationToUnit(e,t){return`${e.toFixed(0)} ${"1"===e.toFixed(0)?t[0]:t[1]}`}function formatDurationFromSeconds(e){return e/SECONDS_IN_DAY>=1?formatDurationToUnit(e/SECONDS_IN_DAY,["day","days"]):e/SECONDS_IN_HOUR>=1?formatDurationToUnit(e/SECONDS_IN_HOUR,["hour","hours"]):e/SECONDS_IN_MINUTE>=1?formatDurationToUnit(e/SECONDS_IN_MINUTE,["minute","minutes"]):formatDurationToUnit(e,["second","seconds"])}function secondsToDDHHMMSS(e){const t=Math.floor(e/86400),a=Math.floor(e/3600%24),r=Math.floor(e/60)%60,n=e%60;return`${0!==t&&`${`0${t}`.slice(-2)}d `||""}${0!==a&&`${`0${a}`.slice(-2)}h `||""}`+`${0!==r&&`${`0${r}`.slice(-2)}m `||""}${0!==n&&`${`0${n}`.slice(-2)}s`||""}`}const experienceTable=[16,17,18,19,20,22,24,26,28,30,33,36,39,42,46,50,55,60,66,72,79,86,94,103,113,124,136,149,163,178,194,211,229,248,268,289,311,334,358,383,409,436,464,493,523,554,586,619,653,688,724,761,799,838,878,919,961,1004,1048,1093,1139,1186,1234,1283,1333,1384,1436,1489,1543,1598,1654,1711,1769,1828,1888,1949,2011,2074,2138,2203,2269,2336,2404,2473,2543,2614,2686,2759,2833,2908,2984,3061,3139,3218,3298,3379,3461,3544,3628,3713,3799,3886,3974,4063,4153,4244,4336,4429,4523,4618,4714,4811,4909,5008,5108,5209,5311,5414,5518,5623,5729,5836,5944,6053,6163,6274,6386,6499,6613,6728,6844,6961,7079,7198,7318,7439,7561,7684,7808,7933,8059,8186,8314,8443,8573,8704,8836,8969,9103,9238,9374,9511,9649,9788,9928,10069,10211,10354,10498,10643,10789,10936,11084,11233,11383,11534,11686,11839,11993,12148,12304,12461,12619,12778,12938,13099,13261,13424,13588,13753,13919,14086,14254,14423,14593,14764,14936,15109,15283,15458,15634,15811,15989,16168,16348,16529,16711,16894,17078,17263,17449,17636,17824,18013,18203,18394,18586,18779,18973,19168,19364,19561,19759,19958,20158,20359,20561,20764,20968,21173,21379,21586,21794,22003,22213,22424,22636,22849,23063,23278,23494,23711,23929,24148,24368,24589,24811,25034,25258,25483,25709,25936,26164,26393,26623,26854,27086,27319,27553,27788,28024,28261,28499,28738,28978];function getNextTargetExpLevel(e){let t=10*(Math.floor(e/10)+1);t===e&&(t=e+11);let a=0;for(let r=e;r<t;r++)a+=experienceTable[r];return{level:t,exp:a}}function getPotentialXp(e,t,a,r){const n=e*GetTotalMultiplierForTrait(r,parseInt(a,10))+r.bonusPower;return Math.floor(t/n*this.fightXpGain)}function getEnemyDetails(e){return e.map(e=>{const t=parseInt(e,10);return{original:e,power:16777215&t,trait:t>>24}})}function sumOfArray(e){let t=0;return e.forEach(e=>{t+=parseFloat(e)}),BigInt(t).toString()}function truncateToDecimals(e,t=2){const a=Math.pow(10,t);return Math.trunc(e*a)/a}function toFixed(e,t){const a=new RegExp("^-?\\d+(?:.\\d{0,"+(t||-1)+"})?");return e.toString().match(a)[0]}