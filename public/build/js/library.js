const stakingRewardAddress = '0xd6b2D8f59Bf30cfE7009fB4fC00a7b13Ca836A2c';
const conStakingTokenAddress = '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab';
const mainAddress = '0x39Bea96e13453Ed52A734B6ACEeD4c41F57B2271';
const charAddress = '0xc6f252c2cdd4087e30608a35c022ce490b58179b';
const weapAddress = '0x7e091b0a220356b157131c831258a9c98ac8031a';
const oracleAddress = '0x1cbfa0ec28da66896946474b2a93856eb725fbba';
const defaultAddress = '0x0000000000000000000000000000000000000000';

const web3 = new Web3('https://bsc-dataseed1.defibit.io/');

const conStakingReward = new web3.eth.Contract(IStakingRewards, stakingRewardAddress);
const conStakingToken = new web3.eth.Contract(IERC20, conStakingTokenAddress);
const conCryptoBlades = new web3.eth.Contract(CryptoBlades, mainAddress);
const conCharacters = new web3.eth.Contract(Characters, charAddress);
const conWeapons = new web3.eth.Contract(Weapons, weapAddress);
const conOracle = new web3.eth.Contract(BasicPriceOracle, oracleAddress);

const isAddress = address => web3.utils.isAddress(address);
const getBNBBalance = address => web3.eth.getBalance(address);
const fromEther = (value) => web3.utils.fromWei(BigInt(value).toString(), 'ether');

const getRewardsPoolBalance = () => conStakingToken.methods.balanceOf(mainAddress).call({ from: defaultAddress });
const getStakingPoolBalance = () => conStakingToken.methods.balanceOf(stakingRewardAddress).call({ from: defaultAddress });

const getStakedBalance = address => conStakingToken.methods.balanceOf(address).call({ from: defaultAddress });
const getStakedRewards = address => conStakingReward.methods.balanceOf(address).call({ from: defaultAddress });
const getStakedTimeLeft = address => conStakingReward.methods.getStakeUnlockTimeLeft().call({ from: address });
const getAccountCharacters = address => conCryptoBlades.methods.getMyCharacters().call({ from: address });
const getAccountWeapons = address => conCryptoBlades.methods.getMyWeapons().call({ from: address });
const getAccountSkillReward = address => conCryptoBlades.methods.getTokenRewards().call({ from: address });
const getOwnRewardsClaimTax = address => conCryptoBlades.methods.getOwnRewardsClaimTax().call({ from: address });
const getRewardsClaimTaxMax = address => conCryptoBlades.methods.REWARDS_CLAIM_TAX_MAX().call({ from: address });
const getIngameSkill = address => conCryptoBlades.methods.inGameOnlyFunds(address).call({ from: address });
const getCharacterExp = charId => conCryptoBlades.methods.getXpRewards(`${charId}`).call({ from: defaultAddress });
const characterTargets = (charId, weapId) => conCryptoBlades.methods.getTargets(charId, weapId).call({ from: defaultAddress });
const getCharacterStamina = charId => conCharacters.methods.getStaminaPoints(`${charId}`).call({ from: defaultAddress });
const getCharacterData = charId => conCharacters.methods.get(`${charId}`).call({ from: defaultAddress });
const getWeaponData = weapId => conWeapons.methods.get(`${weapId}`).call({ from: defaultAddress });
const getOraclePrice = () => conOracle.methods.currentPrice().call({ from: defaultAddress });
const fetchFightGasOffset = async () => conCryptoBlades.methods.fightRewardGasOffset().call({ from: defaultAddress });
const fetchFightBaseline = async () => conCryptoBlades.methods.fightRewardBaseline().call({ from: defaultAddress });
const usdToSkill = async value => conCryptoBlades.methods.usdToSkill(value).call({ from: defaultAddress });
const decodeAbi = (types, data) => web3.eth.abi.decodeParameters(types, data);
const getPastLogs = options => web3.eth.getPastLogs(options);
const getLatestBlock = async () =>  web3.eth.getBlock('latest')
const getPastEvents = async (event, fromBlock, toBlock, address, topics) =>  conCryptoBlades.getPastEvents(event, {fromBlock, toBlock, address, topics})
const getTransaction = async hash => web3.eth.getTransaction(hash)
const getTransactionReceipt = async hash => web3.eth.getTransactionReceipt(hash)
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