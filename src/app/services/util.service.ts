import { Injectable } from '@angular/core'
import seedrandom from 'seedrandom'
import BigNumber from 'bignumber.js'
import * as ethers from 'ethers'

import characterNames from 'src/app/data/character-names.json'

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  experienceTable: number[]
  WeaponElement: any
  WeaponTrait: any
  ReputationTier: {
    PEASANT: number
    TRADESMAN: number
    NOBLE: number
    KNIGHT: number
    KING: number
  }
  characterNames: any

  constructor() {
    this.experienceTable = [
      16, 17, 18, 19, 20, 22, 24, 26, 28, 30, 33, 36, 39, 42, 46, 50, 55, 60,
      66, 72, 79, 86, 94, 103, 113, 124, 136, 149, 163, 178, 194, 211, 229, 248,
      268, 289, 311, 334, 358, 383, 409, 436, 464, 493, 523, 554, 586, 619, 653,
      688, 724, 761, 799, 838, 878, 919, 961, 1004, 1048, 1093, 1139, 1186,
      1234, 1283, 1333, 1384, 1436, 1489, 1543, 1598, 1654, 1711, 1769, 1828,
      1888, 1949, 2011, 2074, 2138, 2203, 2269, 2336, 2404, 2473, 2543, 2614,
      2686, 2759, 2833, 2908, 2984, 3061, 3139, 3218, 3298, 3379, 3461, 3544,
      3628, 3713, 3799, 3886, 3974, 4063, 4153, 4244, 4336, 4429, 4523, 4618,
      4714, 4811, 4909, 5008, 5108, 5209, 5311, 5414, 5518, 5623, 5729, 5836,
      5944, 6053, 6163, 6274, 6386, 6499, 6613, 6728, 6844, 6961, 7079, 7198,
      7318, 7439, 7561, 7684, 7808, 7933, 8059, 8186, 8314, 8443, 8573, 8704,
      8836, 8969, 9103, 9238, 9374, 9511, 9649, 9788, 9928, 10069, 10211, 10354,
      10498, 10643, 10789, 10936, 11084, 11233, 11383, 11534, 11686, 11839,
      11993, 12148, 12304, 12461, 12619, 12778, 12938, 13099, 13261, 13424,
      13588, 13753, 13919, 14086, 14254, 14423, 14593, 14764, 14936, 15109,
      15283, 15458, 15634, 15811, 15989, 16168, 16348, 16529, 16711, 16894,
      17078, 17263, 17449, 17636, 17824, 18013, 18203, 18394, 18586, 18779,
      18973, 19168, 19364, 19561, 19759, 19958, 20158, 20359, 20561, 20764,
      20968, 21173, 21379, 21586, 21794, 22003, 22213, 22424, 22636, 22849,
      23063, 23278, 23494, 23711, 23929, 24148, 24368, 24589, 24811, 25034,
      25258, 25483, 25709, 25936, 26164, 26393, 26623, 26854, 27086, 27319,
      27553, 27788, 28024, 28261, 28499, 28738, 28978,
    ]
    this.WeaponElement = {
      Fire: 0,
      Earth: 1,
      Lightning: 2,
      Water: 3,
    }

    this.WeaponTrait = {
      STR: 0,
      DEX: 1,
      CHA: 2,
      INT: 3,
      PWR: 4,
    }

    this.ReputationTier = {
      PEASANT: 0,
      TRADESMAN: 1,
      NOBLE: 2,
      KNIGHT: 3,
      KING: 4,
    }

    this.characterNames = characterNames
  }

  getNextTargetExpLevel(level: number) {
    let next = (Math.floor(level / 10) + 1) * 10
    if (next === level) {
      next = level + 11
    }
    let exp = 0
    for (let i = level; i < next; i++) {
      exp += this.experienceTable[i]
    }
    return {
      level: next,
      exp,
    }
  }

  getPotentialXp(charPower: number, enemyPower: number, stamina: number) {
    return Math.floor((enemyPower / charPower) * 32) * stamina
  }

  getEnemyDetails(targets: any) {
    return targets.map((data: string) => {
      const n = parseInt(data, 10)
      const power = n & 16777215
      const trait = n >> 24
      return {
        original: data,
        power,
        trait,
        element: this.traitNumberToName(trait),
      }
    })
  }

  sumOfArray(arr: Array<string | number>) {
    let sum = 0
    if (arr) {
      arr.forEach((val) => {
        sum += Number(val)
      })
    }
    return sum
  }

  truncateToDecimals(num: number, dec = 2) {
    const calcDec = Math.pow(10, dec)
    return Math.trunc(num * calcDec) / calcDec
  }

  toFixed(num: any, fixed: any) {
    const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
    return num?.toString().match(re)[0]
  }

  ucfirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  fromEther(value: any) {
    return ethers.formatEther(BigInt(Math.trunc(value)).toString()).toString()
  }

  toEther(value: any) {
    return ethers.parseEther(value.toFixed(18))
  }

  sumOfStakedSkill(...arr: any[]) {
    let total = 0
    arr.forEach((i: any) => {
      total += parseFloat(this.fromEther(i))
    })
    return total
  }

  formatNumber(val: string | number, dec = 6) {
    return Number(val).toLocaleString('en', {
      minimumFractionDigits: dec,
      maximumFractionDigits: dec,
    })
  }

  currencyFormat(value: number, currency = 'USD') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    })
  }

  toBn(value: BigNumber.Value) {
    return new BigNumber(value)
  }

  addressPrivacy(address: string) {
    return `${address.substr(0, 4)}...${address.substr(-4)}`
  }

  reputationToTier(reputation: number) {
    switch (reputation) {
      case this.ReputationTier.PEASANT:
        return 'Peasant'
      case this.ReputationTier.TRADESMAN:
        return 'Tradesman'
      case this.ReputationTier.NOBLE:
        return 'Noble'
      case this.ReputationTier.KNIGHT:
        return 'Knight'
      case this.ReputationTier.KING:
        return 'King'
      default:
        return 'Peasant'
    }
  }

  traitNumberToName(traitNum: number): string {
    switch (traitNum) {
      case this.WeaponElement.Fire:
        return 'Fire'
      case this.WeaponElement.Earth:
        return 'Earth'
      case this.WeaponElement.Water:
        return 'Water'
      case this.WeaponElement.Lightning:
        return 'Lightning'
      default:
        return '???'
    }
  }

  characterFromContract(id: string | number, data: any) {
    const xp = data[0]
    const level = parseInt(data[1], 10)
    const trait = +data[2]
    const traitName = this.traitNumberToName(+data[2])
    const staminaTimestamp = data[3]
    const head = +data[4]
    const arms = +data[5]
    const torso = +data[6]
    const legs = +data[7]
    const boots = +data[8]
    const race = +data[9]
    return {
      id: +id,
      xp,
      level,
      trait,
      traitName,
      staminaTimestamp,
      head,
      arms,
      torso,
      legs,
      boots,
      race,
    }
  }

  getStatPatternFromProperties(properties: number) {
    return (properties >> 5) & 0x7f
  }

  getStat1Trait(statPattern: number) {
    return statPattern % 5
  }

  getStat2Trait(statPattern: number) {
    return Math.floor(statPattern / 5) % 5
  }

  getStat3Trait(statPattern: number) {
    return Math.floor(Math.floor(statPattern / 5) / 5) % 5
  }

  statNumberToName(statNum: number) {
    switch (statNum) {
      case this.WeaponTrait.CHA:
        return 'CHA'
      case this.WeaponTrait.DEX:
        return 'DEX'
      case this.WeaponTrait.INT:
        return 'INT'
      case this.WeaponTrait.PWR:
        return 'PWR'
      case this.WeaponTrait.STR:
        return 'STR'
      default:
        return '???'
    }
  }

  getWeaponTraitFromProperties(properties: number) {
    return (properties >> 3) & 0x3
  }

  weaponFromContract(id: string | number, data: any) {
    const properties = data[0]
    const stat1 = data[1]
    const stat2 = data[2]
    const stat3 = data[3]
    const level = +data[4]
    const cosmetics = +data[5]
    const blade = (cosmetics & 0xff).toString()
    const crossguard = ((cosmetics >> 8) & 0xff).toString()
    const grip = ((cosmetics >> 16) & 0xff).toString()
    const pommel = ((cosmetics >> 24) & 0xff).toString()
    const burnPoints = +data[6]
    const bonusPower = +data[7]
    const weaponType = +data[8]

    const stat1Value = +stat1
    const stat2Value = +stat2
    const stat3Value = +stat3

    const statPattern = this.getStatPatternFromProperties(+properties)
    const stat1Type = this.getStat1Trait(statPattern)
    const stat2Type = this.getStat2Trait(statPattern)
    const stat3Type = this.getStat3Trait(statPattern)

    const traitNum = this.getWeaponTraitFromProperties(+properties)

    const lowStarBurnPoints = burnPoints & 0xff
    const fourStarBurnPoints = (burnPoints >> 8) & 0xff
    const fiveStarBurnPoints = (burnPoints >> 16) & 0xff

    const stars = +properties & 0x7
    return {
      id: +id,
      properties,
      element: this.traitNumberToName(traitNum),
      stat1Value,
      stat1Type,
      stat2Value,
      stat2Type,
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
      traitNum,
      weaponType,
      stat1,
      stat2,
      stat3
    }
  }

  getRandom(rng: () => number, arr: string | any[]) {
    return arr[Math.floor(rng() * arr.length)]
  }

  getCharacterNameFromSeed(seed: { toString: () => any }) {
    const rng = seedrandom(seed?.toString())

    const firstKey = this.getRandom(rng, ['one', 'two', 'three', 'more'])
    const secondKey = this.getRandom(rng, ['one', 'two', 'three', 'more'])

    const firstName = this.getRandom(rng, this.characterNames[firstKey])
    const secondName = this.getRandom(rng, this.characterNames[secondKey])

    return `${firstName} ${secondName}`
  }

  getCharacterPowerByLevel(level: number) {
    return (1000 + level * 10) * (Math.floor(level / 10) + 1)
  }

  getAlignedCharacterPower(
    charData: any,
    weapData: any
  ) {
    const playerElement = Number(charData.trait)
    const weaponMultiplier = this.GetTotalMultiplierForTrait(
      weapData,
      playerElement
    )
    return charData.power * weaponMultiplier + weapData.bonusPower
  }

  getElementAdvantage(playerElement: number, enemyElement: number) {
    if ((playerElement + 1) % 4 === enemyElement) {
      return 1
    }
    if ((enemyElement + 1) % 4 === playerElement) {
      return -1
    }
    return 0
  }

  AdjustStatForTrait(statValue: any, statTrait: any, charTrait: any) {
    let value = statValue
    if (statTrait === charTrait) {
      value = Math.floor(value * 1.07)
    } else if (statTrait === this.WeaponTrait.PWR) {
      value = Math.floor(value * 1.03)
    }
    return value
  }

  MultiplierPerEffectiveStat(statValue: number) {
    return statValue * 0.25
  }

  Stat1PercentForChar(wep: any, trait: any) {
    return this.MultiplierPerEffectiveStat(
      this.AdjustStatForTrait(wep.stat1Value, wep.stat1Type, trait)
    )
  }

  Stat2PercentForChar(wep: any, trait: any) {
    return this.MultiplierPerEffectiveStat(
      this.AdjustStatForTrait(wep.stat2Value, wep.stat2Type, trait)
    )
  }

  Stat3PercentForChar(wep: any, trait: any) {
    return this.MultiplierPerEffectiveStat(
      this.AdjustStatForTrait(wep.stat3Value, wep.stat3Type, trait)
    )
  }

  GetTotalMultiplierForTrait(wep: any, trait: number) {
    return (
      1 +
      0.01 *
      (this.Stat1PercentForChar(wep, trait) +
        this.Stat2PercentForChar(wep, trait) +
        this.Stat3PercentForChar(wep, trait))
    )
  }

  getWinChance(
    enemyPower: number,
    playerPower: number
  ) {
    const playerMin = playerPower * 0.9
    const playerMax = playerPower * 1.1
    const playerRange = playerMax - playerMin;
    const enemyMin = enemyPower * 0.9
    const enemyMax = enemyPower * 1.1
    const enemyRange = enemyMax - enemyMin
    let rollingTotal = 0;

    if (playerMin >= enemyMin) {
      rollingTotal = (playerMin - enemyMin) / enemyRange;
      rollingTotal += (1 - rollingTotal) * ((playerMax - enemyMax) / playerRange);
      rollingTotal += (1 - rollingTotal) * 0.5;
    } else {
      rollingTotal = (enemyMin - playerMin) / playerRange;
      rollingTotal += (1 - rollingTotal) * ((enemyMax - playerMax) / enemyRange);
      rollingTotal += (1 - rollingTotal) * 0.5;
      rollingTotal = 1 - rollingTotal;
    }
    return rollingTotal
  }

  getReputationTier(reputation: number, reputationLevelRequirements: any) {
    if (Number(reputation) < reputationLevelRequirements.level2) {
      return this.ReputationTier.PEASANT;
    } else if (reputation < reputationLevelRequirements.level3) {
      return this.ReputationTier.TRADESMAN;
    } else if (reputation < reputationLevelRequirements.level4) {
      return this.ReputationTier.NOBLE;
    } else if (reputation < reputationLevelRequirements.level5) {
      return this.ReputationTier.KNIGHT;
    } else {
      return this.ReputationTier.KING;
    }
  }

  powerDataFromContract(data: any[]) {
    const pvePower = [];
    for (let i = 0; i < 5; i++)
      pvePower[i] = parseInt(data[0][i], 10);

    const pvpTierPower = [];
    for (let i = 0; i < 4; i++)
      pvpTierPower[i] = parseInt(data[1][i], 10);

    const pvpFfaPower = [];
    for (let i = 0; i < 4; i++)
      pvpFfaPower[i] = parseInt(data[2][i], 10);

    const charTrait = data[4];
    const wepTrait = data[5];
    const shieldTrait = data[6];
    return { pvePower, pvpTierPower, pvpFfaPower, charTrait, wepTrait, shieldTrait };
  }

  elementColor(element: string) {
    switch (element) {
      case 'Fire': return 'text-red-800'
      case 'Earth': return 'text-green-900'
      case 'Lightning': return 'text-yellow-400'
      case 'Water': return 'text-blue-600'
      default: return 'text-white dark:text-gray-500'
    }
  }

  chanceColor(chance: number) {
    if (chance >= 0.8) return 'text-green-700'
    if (chance >= 0.6) return 'text-blue-700'
    if (chance >= 0.5) return 'text-yellow-700'
    return 'text-red-700'
  }

  formatSkillRatio(value: any) {
    return this.toBn(1)
      .dividedBy(
        this.toBn(this.toEther(value).toString())
          .dividedBy(this.toBn(2).exponentiatedBy(64))
      )
      .toFixed(4);
  }

  moneyPerUnclaimed(price: number, ratio: number, multiplier: number) {
    return this.currencyFormat((price /
      Number(this.formatSkillRatio(ratio))) *
      Number(multiplier)
    );
  }

  convertTokenToLocalCurrency(amount: number, version: number, prices: any, currency: string) {
    return this.currencyFormat(amount * (version === 1 ? prices.skill : prices.valor), currency)
  }

  convertGasToLocalCurrency(amount: number, prices: any, currency: string) {
    return this.currencyFormat(amount * prices.gas, currency)
  }

  parseOrNot(str: any) {
    try {
      return JSON.parse(str)
    } catch (e) {
      return str
    }
  }

  isValidJson(str: any) {
    try {
      JSON.parse(str)
      return true
    } catch (e) {
      return false
    }
  }

  isArrayOrObject(vr: any) {
    return ((!!vr) && (vr.constructor === Array)) || ((!!vr) && (vr.constructor === Object))
  }

  bnToNumber(val: any) {
    return +BigInt(val).toString()
  }

  splitArray(arr: any[], len: number, size = 2) {
    const newArr = []
    for (let i = 0; i < len; i++) {
      newArr.push(arr.splice(0, arr.length >= size ? size : arr.length))
    }
    return newArr
  }
}
