var networks = ['bsc', 'heco', 'oec', 'poly', 'avax']

var conAddress = {
    bsc: {
        staking: '0xd6b2D8f59Bf30cfE7009fB4fC00a7b13Ca836A2c',
        token: '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab',
        cryptoBlades: '0x39Bea96e13453Ed52A734B6ACEeD4c41F57B2271',
        character: '0xc6f252c2cdd4087e30608a35c022ce490b58179b',
        weapon: '0x7e091b0a220356b157131c831258a9c98ac8031a',
        shield: '0xf9E9F6019631bBE7db1B71Ec4262778eb6C3c520',
        market: '0x90099dA42806b21128A094C713347C7885aF79e2',
        skillPair: '0x0deb588c1ec6f1d9f348126d401f05c4c7b7a80c',
        tokenPair: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16'
    },
    heco: {
        staking: '0x6109A500e5b9CE40FFe075Ea3A6beA6e93c23BcF',
        token: '0x27d4DfDB3fDf58e198bA4dbc23B2F82c0b8e3405',
        cryptoBlades: '0x29869EDb088466a49f75654d8F04edd16Bf60e75',
        character: '0xF6092CDEaabd02069cB56E2b770367AAcf49dfba',
        weapon: '0xa0f254436E43239D2B3947A9D590C495738B6A4C',
        shield: '0xb4eD70aC5B00ca0fd9526089489979e116E45ec0',
        market: '0x0f6dAA5F4b4277BE496c80aeCD0D101b8dEE6440',
        skillPair: '0x7c9739ecD7882157b1C526a832FfD5A50860078d',
        tokenPair: '0x3289250099cF4cF9e59Fd728a93F36594C1369f0'
    },
    oec: {
        staking: '0xC5707a6a16CCe1963Ec3E6cdEE0A91e4876Be395',
        token: '0xcC137b0713E0DC63b1fA136272014F2A54Dd7aCB',
        cryptoBlades: '0x98145a2fEBac238280bbdEDc2757dC162318b16e',
        character: '0x6A1d1803d4EDF5CF27EDb64ae95A22F81707eA38',
        weapon: '0x364759180A6484e57ECD73C042264A6Da75770e8',
        shield: '0x8c52FabF2442b0EB83518DaB93A8073Ce5B0BA15',
        market: '0x5ea2373e281E92FE3c53dc36cE855D89BF25F6F8',
        skillPair: '0x2d9cdad4b89d91e6a44ec1c8b227b0c2b0d4e2cf',
        tokenPair: '0xa75bd9f086bbc1168b01fd5e750986b5170c2b26'
    },
    poly: {
        staking: '0xE34e7cA8e64884E3b5Cd48991ba229d8302E85da',
        token: '0x863D6074aFaF02D9D41A5f8Ea83278DF7089aA86',
        cryptoBlades: '0x070b1A95898B927A900A1F9F42b114154648E51A',
        character: '0x929059Fef67b88CE2F4127e59B50bEA123981998',
        weapon: '0xD9C5449EfB3f99952F73e824688724aAFB81dE6E',
        shield: '0x68a288c2A96e2cd5c45769e02f2bbc2E90BAE39B',
        market: '0xeE6e8467268eA752b027676B3EBcD4eB05749874',
        skillPair: '0x42ba6f3aF9d8A2A30F5e55362c45e7121a932b77',
        tokenPair: '0x65d43b64e3b31965cd5ea367d4c2b94c03084797'
    },
    avax: {
        staking: '0x96438Debb1419bF0B53119Edae6e664c931504CA',
        token: '0x483416eB3aFA601B9C6385f63CeC0C82B6aBf1fb',
        cryptoBlades: '0x46419526a59ec1d73b72620ae16da091bE8486bd',
        character: '0x28857ccCCa599f0876792094870758A18F581Dc0',
        weapon: '0xe8f172B51186A4c8127D5eE05617dCA6aAf478fE',
        shield: '0x1609BD8ea43b1c23dE90071B82CD08FA098DdCF3',
        market: '0x9469ED8d4b86e4442b4AA848bB94B9f9130f123E',
        skillPair: '0xF52B3Df311182F43202806ee0E72aCB92d777879',
        tokenPair: '0xe28984e1ee8d431346d32bec9ec800efb643eef4'
    }
}

var nodes = {
    bsc: 'https://bsc-dataseed1.defibit.io/',
    heco: 'https://http-mainnet.hecochain.com',
    oec: 'https://exchainrpc.okex.org',
    poly: 'https://polygon-rpc.com/',
    avax: 'https://api.avax.network/ext/bc/C/rpc'
}

var currentNetwork = localStorage.getItem('network')

if (!networks.includes(currentNetwork)) {
    currentNetwork = 'bsc'
    localStorage.setItem('network', currentNetwork)  
}

var web3 = new Web3(nodes[currentNetwork]);

var conStakingReward = new web3.eth.Contract(IStakingRewards, conAddress[currentNetwork].staking);
var conStakingToken = new web3.eth.Contract(IERC20, conAddress[currentNetwork].token);
var conCryptoBlades = new web3.eth.Contract(CryptoBlades, conAddress[currentNetwork].cryptoBlades);
var conCharacters = new web3.eth.Contract(Characters, conAddress[currentNetwork].character);
var conWeapons = new web3.eth.Contract(Weapons, conAddress[currentNetwork].weapon);
var conShields = new web3.eth.Contract(Shields, conAddress[currentNetwork].shield);
var conMarket = new web3.eth.Contract(NFTMarket, conAddress[currentNetwork].market);
var skillPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].skillPair)
var gasPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].tokenPair)

var isAddress = address => web3.utils.isAddress(address);
var getBNBBalance = address => web3.eth.getBalance(address);
var fromEther = (value) => web3.utils.fromWei(BigInt(value).toString(), 'ether');

var getRewardsPoolBalance = () => conStakingReward.methods.balanceOf(mainAddress).call();
var getStakingPoolBalance = () => conStakingToken.methods.balanceOf(stakingRewardAddress).call();

var getStakedBalance = address => conStakingToken.methods.balanceOf(address).call();
var getStakedRewards = address => conStakingReward.methods.balanceOf(address).call();
var getStakedTimeLeft = address => conStakingReward.methods.getStakeUnlockTimeLeft().call({ from: address });
var getAccountCharacters = async address => {
    var numberOfCharacters = parseInt(await conCharacters.methods.balanceOf(address).call(), 10)
    var characters = await Promise.all(
        [...Array(numberOfCharacters).keys()].map((_, i) =>
            conCharacters.methods.tokenOfOwnerByIndex(address, i).call())
    );
    return characters;
};
var getAccountWeapons = async address => {
    var numberOfWeapons = parseInt(await conWeapons.methods.balanceOf(address).call(), 10)
    var weapons = await Promise.all(
        [...Array(numberOfWeapons).keys()].map((_, i) => 
            conWeapons.methods.tokenOfOwnerByIndex(address, i).call())
    );
    return weapons;
};
var getAccountSkillReward = address => conCryptoBlades.methods.getTokenRewardsFor(address).call()
var getOwnRewardsClaimTax = address => conCryptoBlades.methods.getOwnRewardsClaimTax().call({ from: address })
var getRewardsClaimTaxMax = address => conCryptoBlades.methods.REWARDS_CLAIM_TAX_MAX().call({ from: address })
var getIngameSkill = address => conCryptoBlades.methods.inGameOnlyFunds(address).call({ from: address })
var getCharacterExp = charId => conCryptoBlades.methods.getXpRewards(`${charId}`).call()
var characterTargets = (charId, weapId) => conCryptoBlades.methods.getTargets(charId, weapId).call()
var getCharacterStamina = charId => conCharacters.methods.getStaminaPoints(`${charId}`).call()
var getCharacterData = charId => conCharacters.methods.get(`${charId}`).call()
var getWeaponData = weapId => conWeapons.methods.get(`${weapId}`).call()
var fetchFightGasOffset = () => conCryptoBlades.methods.fightRewardGasOffset().call()
var fetchFightBaseline = () => conCryptoBlades.methods.fightRewardBaseline().call()
var usdToSkill = value => conCryptoBlades.methods.usdToSkill(value).call()
var decodeAbi = (types, data) => web3.eth.abi.decodeParameters(types, data)
var getPastLogs = options => web3.eth.getPastLogs(options)
var getLatestBlock = () =>  web3.eth.getBlock('latest')
var getPastEvents = (event, fromBlock, toBlock, address, topics) =>  conCryptoBlades.getPastEvents(event, {fromBlock, toBlock, address, topics})
var getTransaction = hash => web3.eth.getTransaction(hash)
var getTransactionReceipt = hash => web3.eth.getTransactionReceipt(hash)
var getFinalPrice = (contract, tokenId) => conMarket.methods.getFinalPrice(contract, tokenId).call()
var getTokenGainForFight = (power, calculator) => conCryptoBlades.methods.getTokenGainForFight(power, calculator).call()
var getCurrentAllowance = () => conCryptoBlades.methods.vars(13).call()
var getHourlyAllowance = () => conCryptoBlades.methods.vars(18).call()
var getHourlyPowerAvg = () => conCryptoBlades.methods.vars(4).call()
var getPayPerFight = () => conCryptoBlades.methods.vars(5).call()
var getMaxPayPerFight = () => conCryptoBlades.methods.vars(12).call()
var getLastReset = () => conCryptoBlades.methods.vars(6).call()
var getMaxClaim = () => conCryptoBlades.methods.vars(7).call()
var getHourlyFights = () => conCryptoBlades.methods.vars(2).call()
var getHourlyPowerSum = () => conCryptoBlades.methods.vars(3).call()
var getTotalCharacters = () => conCharacters.methods.totalSupply().call()
var getTotalWeapons = () => conWeapons.methods.totalSupply().call()
var getTotalShields = () => conShields.methods.totalSupply().call()
var getLastClaim = address => conCryptoBlades.methods.userVars(address, 10002).call()
var getClaimable = address => conCryptoBlades.methods.getRemainingTokenClaimAmountPreTax().call({ from: address })

var getSkillPrice = async () => {
    const reserves = await skillPair.methods.getReserves().call()
    if (currentNetwork === 'oec' || currentNetwork === 'poly') return reserves[0] / reserves[1]
    return reserves[1] / reserves[0]
}

var getGasPrice = async () => {
    const reserves = await gasPair.methods.getReserves().call()
    if (currentNetwork === 'oec') return reserves[0] / reserves[1]
    return reserves[1] / reserves[0]
}

function populateNetwork() {
    $('#select-network').html('');
    $("#select-network").append(new Option(currentNetwork.toUpperCase(), currentNetwork));
    networks.forEach(net => {
        if (currentNetwork !== net) {
            $("#select-network").append(new Option(net.toUpperCase(), net));
        }
    })
}

function updateNetwork(network) {    
    currentNetwork = network
    localStorage.setItem('network', currentNetwork)  
    web3 = new Web3(nodes[currentNetwork]);
    conStakingReward = new web3.eth.Contract(IStakingRewards, conAddress[currentNetwork].staking);
    conStakingToken = new web3.eth.Contract(IERC20, conAddress[currentNetwork].token);
    conCryptoBlades = new web3.eth.Contract(CryptoBlades, conAddress[currentNetwork].cryptoBlades);
    conCharacters = new web3.eth.Contract(Characters, conAddress[currentNetwork].character);
    conWeapons = new web3.eth.Contract(Weapons, conAddress[currentNetwork].weapon);
    conShields = new web3.eth.Contract(Shields, conAddress[currentNetwork].shield);
    conMarket = new web3.eth.Contract(NFTMarket, conAddress[currentNetwork].market);
    skillPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].skillPair)
    gasPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].tokenPair)
}

async function getTokenReward(power) {
    return getTokenGainForFight(power, false)
}

populateNetwork()
const randomString = (length) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i += 1) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

function CharacterPower(level) {
    return ((1000 + (level * 10)) * (Math.floor(level / 10) + 1));
}

const WeaponElement = {
    Fire: 0,
    Earth: 1,
    Lightning: 2,
    Water: 3,
};

const WeaponTrait = {
    STR: 0,
    DEX: 1,
    CHA: 2,
    INT: 3,
    PWR: 4,
};

function traitNumberToName(traitNum) {
    switch (traitNum) {
        case WeaponElement.Fire: return 'Fire';
        case WeaponElement.Earth: return 'Earth';
        case WeaponElement.Water: return 'Water';
        case WeaponElement.Lightning: return 'Lightning';
        default: return '???';
    }
}

function characterFromContract(id, data) {
    const xp = data[0];
    const level = parseInt(data[1], 10);
    const trait = data[2];
    const traitName = traitNumberToName(+data[2]);
    const staminaTimestamp = data[3];
    const head = data[4];
    const arms = data[5];
    const torso = data[6];
    const legs = data[7];
    const boots = data[8];
    const race = data[9];
    return {
        id: +id, xp, level, trait, traitName, staminaTimestamp, head, arms, torso, legs, boots, race,
    };
}

function getStatPatternFromProperties(properties) {
    return (properties >> 5) & 0x7f;
}

function getStat1Trait(statPattern) {
    return (statPattern % 5);
}

function getStat2Trait(statPattern) {
    return (Math.floor(statPattern / 5) % 5);
}

function getStat3Trait(statPattern) {
    return (Math.floor(Math.floor(statPattern / 5) / 5) % 5);
}

function statNumberToName(statNum) {
    switch (statNum) {
        case WeaponTrait.CHA: return 'CHA';
        case WeaponTrait.DEX: return 'DEX';
        case WeaponTrait.INT: return 'INT';
        case WeaponTrait.PWR: return 'PWR';
        case WeaponTrait.STR: return 'STR';
        default: return '???';
    }
}

function getWeaponTraitFromProperties(properties) {
    return (properties >> 3) & 0x3;
}

function weaponFromContract(id, data) {
    const properties = data[0];
    const stat1 = data[1];
    const stat2 = data[2];
    const stat3 = data[3];
    const level = +data[4];
    const blade = data[5];
    const crossguard = data[6];
    const grip = data[7];
    const pommel = data[8];
    const burnPoints = +data[9];
    const bonusPower = +data[10];

    const stat1Value = +stat1;
    const stat2Value = +stat2;
    const stat3Value = +stat3;

    const statPattern = getStatPatternFromProperties(+properties);
    const stat1Type = getStat1Trait(statPattern);
    const stat2Type = getStat2Trait(statPattern);
    const stat3Type = getStat3Trait(statPattern);

    const traitNum = getWeaponTraitFromProperties(+properties);

    const lowStarBurnPoints = burnPoints & 0xff;
    const fourStarBurnPoints = (burnPoints >> 8) & 0xff;
    const fiveStarBurnPoints = (burnPoints >> 16) & 0xff;

    const stars = (+properties) & 0x7;
    return {
        id: +id,
        properties,
        trait: traitNum,
        element: traitNumberToName(traitNum),
        stat1: statNumberToName(stat1Type),
        stat1Value,
        stat1Type,
        stat2: statNumberToName(stat2Type),
        stat2Value,
        stat2Type,
        stat3: statNumberToName(stat3Type),
        stat3Value,
        stat3Type,
        level,
        blade,
        crossguard,
        grip,
        pommel,
        stars,
        lowStarBurnPoints,
        fourStarBurnPoints,
        fiveStarBurnPoints,
        bonusPower,
        traitNum
    };
}

function getElementAdvantage(playerElement, enemyElement) {
    if ((playerElement + 1) % 4 === enemyElement) return 1;
    if ((enemyElement + 1) % 4 === playerElement) return -1;
    return 0;
}

function AdjustStatForTrait(statValue, statTrait, charTrait) {
    let value = statValue;
    if (statTrait === charTrait) { value = Math.floor(value * 1.07); } else if (statTrait === WeaponTrait.PWR) { value = Math.floor(value * 1.03); }
    return value;
}

function MultiplierPerEffectiveStat(statValue) {
    return statValue * 0.25;
}

function Stat1PercentForChar(wep, trait) {
    return MultiplierPerEffectiveStat(AdjustStatForTrait(wep.stat1Value, wep.stat1Type, trait));
}

function Stat2PercentForChar(wep, trait) {
    return MultiplierPerEffectiveStat(AdjustStatForTrait(wep.stat2Value, wep.stat2Type, trait));
}

function Stat3PercentForChar(wep, trait) {
    return MultiplierPerEffectiveStat(AdjustStatForTrait(wep.stat3Value, wep.stat3Type, trait));
}

function GetTotalMultiplierForTrait(wep, trait) {
    return 1 + (0.01 * (Stat1PercentForChar(wep, trait) + Stat2PercentForChar(wep, trait) + Stat3PercentForChar(wep, trait)));
}

function getAlignedCharacterPower(charData, weapData) {
  const characterPower = CharacterPower(charData.level);
  const playerElement = parseInt(charData.trait, 10);
  const weaponMultiplier = GetTotalMultiplierForTrait(weapData, playerElement);
  const totalPower = (characterPower * weaponMultiplier) + weapData.bonusPower;
  return totalPower;
}

function getWinChance(charData, weapData, enemyPower, enemyElement) {
    const playerElement = parseInt(charData.trait, 10);
    const weaponElement = parseInt(WeaponElement[weapData.element], 10);
    const totalPower = getAlignedCharacterPower(charData, weapData);
    const totalMultiplier = 1 + (0.075 * (weaponElement === playerElement ? 1 : 0)) + (0.075 * getElementAdvantage(playerElement, enemyElement));
    const playerMin = totalPower * totalMultiplier * 0.9;
    const playerMax = totalPower * totalMultiplier * 1.1;
    const enemyMin = enemyPower * 0.9;
    const enemyMax = enemyPower * 1.1;
    let win = 0;
    let lose = 0;
    for (let playerRoll = Math.floor(playerMin); playerRoll <= playerMax; playerRoll++) {
      for (let enemyRoll = Math.floor(enemyMin); enemyRoll <= enemyMax; enemyRoll++) {
        if (playerRoll >= enemyRoll) {
          win++;
        } else {
          lose++;
        }
      }
    }
    return win / (win + lose);
}

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;

function formatDurationToUnit(n, unitNames) {
    return `${n.toFixed(0)} ${n.toFixed(0) === '1' ? unitNames[0] : unitNames[1]}`;
}

function formatDurationFromSeconds(sec) {
    if (sec / SECONDS_IN_DAY >= 1) {
        return formatDurationToUnit(sec / SECONDS_IN_DAY, ['day', 'days']);
    }

    if (sec / SECONDS_IN_HOUR >= 1) {
        return formatDurationToUnit(sec / SECONDS_IN_HOUR, ['hour', 'hours']);
    }

    if (sec / SECONDS_IN_MINUTE >= 1) {
        return formatDurationToUnit(sec / SECONDS_IN_MINUTE, ['minute', 'minutes']);
    }

    return formatDurationToUnit(sec, ['second', 'seconds']);
}

function secondsToDDHHMMSS(sec) {
    const days = Math.floor(sec / (60 * 60 * 24));
    const hours = Math.floor(sec / (60 * 60) % 24);
    const minutes = Math.floor(sec / (60)) % 60;
    const seconds = sec % 60;

    return `${days !== 0 && `${(`0${days}`).slice(-2)}d ` || ''}${hours !== 0 && `${(`0${hours}`).slice(-2)}h ` || ''}` +
        `${minutes !== 0 && `${(`0${minutes}`).slice(-2)}m ` || ''}${seconds !== 0 && `${(`0${seconds}`).slice(-2)}s` || ''}`;
}

const experienceTable = [
    16, 17, 18, 19, 20, 22, 24, 26, 28, 30, 33, 36, 39, 42, 46, 50, 55, 60, 66,
    72, 79, 86, 94, 103, 113, 124, 136, 149, 163, 178, 194, 211, 229, 248, 268,
    289, 311, 334, 358, 383, 409, 436, 464, 493, 523, 554, 586, 619, 653, 688,
    724, 761, 799, 838, 878, 919, 961, 1004, 1048, 1093, 1139, 1186, 1234, 1283,
    1333, 1384, 1436, 1489, 1543, 1598, 1654, 1711, 1769, 1828, 1888, 1949, 2011,
    2074, 2138, 2203, 2269, 2336, 2404, 2473, 2543, 2614, 2686, 2759, 2833, 2908,
    2984, 3061, 3139, 3218, 3298, 3379, 3461, 3544, 3628, 3713, 3799, 3886, 3974,
    4063, 4153, 4244, 4336, 4429, 4523, 4618, 4714, 4811, 4909, 5008, 5108, 5209,
    5311, 5414, 5518, 5623, 5729, 5836, 5944, 6053, 6163, 6274, 6386, 6499, 6613,
    6728, 6844, 6961, 7079, 7198, 7318, 7439, 7561, 7684, 7808, 7933, 8059, 8186,
    8314, 8443, 8573, 8704, 8836, 8969, 9103, 9238, 9374, 9511, 9649, 9788, 9928,
    10069, 10211, 10354, 10498, 10643, 10789, 10936, 11084, 11233, 11383, 11534,
    11686, 11839, 11993, 12148, 12304, 12461, 12619, 12778, 12938, 13099, 13261,
    13424, 13588, 13753, 13919, 14086, 14254, 14423, 14593, 14764, 14936, 15109,
    15283, 15458, 15634, 15811, 15989, 16168, 16348, 16529, 16711, 16894, 17078,
    17263, 17449, 17636, 17824, 18013, 18203, 18394, 18586, 18779, 18973, 19168,
    19364, 19561, 19759, 19958, 20158, 20359, 20561, 20764, 20968, 21173, 21379,
    21586, 21794, 22003, 22213, 22424, 22636, 22849, 23063, 23278, 23494, 23711,
    23929, 24148, 24368, 24589, 24811, 25034, 25258, 25483, 25709, 25936, 26164,
    26393, 26623, 26854, 27086, 27319, 27553, 27788, 28024, 28261, 28499, 28738,
    28978,
];

function getNextTargetExpLevel(level) {    
    let next = (Math.floor(level / 10) + 1) * 10;
    if (next === level) {
        next = level + 11
    }
    let exp = 0;
    for (let i = level; i < next; i++) {
        exp += experienceTable[i];
    }
    return {
        level: next,
        exp,
    };
}

function getPotentialXp(characterPower, enemyPower, trait, weaponData) {
    const playerElement = parseInt(trait, 10);
    const weaponMultiplier = GetTotalMultiplierForTrait(weaponData, playerElement);
    const totalPower = ((characterPower * weaponMultiplier) + weaponData.bonusPower);

    return Math.floor((enemyPower / totalPower) * this.fightXpGain);
}

function getEnemyDetails(targets) {
    return targets.map(data => {
        const n = parseInt(data, 10)
        return {
            original: data,
            power: n & 16777215,
            trait: n >> 24
        }
    })
}

function sumOfArray(arr) {
    let sum = 0
    arr.forEach(val => {
        sum += parseFloat(val)
    })
    return BigInt(sum).toString()
}

function truncateToDecimals(num, dec = 2) {
    const calcDec = Math.pow(10, dec);
    return Math.trunc(num * calcDec) / calcDec;
}

function toFixed(num, fixed) {
	const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
	return num.toString().match(re)[0];
}