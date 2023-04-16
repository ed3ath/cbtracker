import { Injectable } from '@angular/core';
import * as _ from 'lodash'
import * as ethers from 'ethers'

import { EventService } from './event.service';
import { ConfigService } from './config.service';
import { UtilService } from './util.service';

import appConfig from 'build/app-config.json'
import otherAddress from 'build/other.json'

import { envName } from 'src/constants'

import tokenAbi from 'build/contracts/IERC20.json'
import characterAbi from 'build/contracts/Characters.json'
import weaponAbi from 'build/contracts/Weapons.json'
import shieldAbi from 'build/contracts/Shields.json'
import cryptobladesAbi from 'build/contracts/CryptoBlades.json'
import treasuryAbi from 'build/contracts/Treasury.json'
import questAbi from 'build/contracts/SimpleQuests.json'
import equipmentAbi from 'build/contracts/EquipmentManager.json'
import raidAbi from 'build/contracts/Raid1.json'
import multicallAbi from 'build/contracts/MultiCall.json'

const other = ['characters', 'weapons', 'shields', 'equipment']

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  chains: string[]
  chainInfo: any
  abis: any

  envName: any
  otherAddress: any
  multiplier = 0

  constructor(
    private eventService: EventService,
    private configService: ConfigService,
    private utilService: UtilService
  ) {
    this.chains = appConfig.supportedChains
    this.chainInfo = appConfig.environments.production.chains
    this.abis = {
      token: tokenAbi.abi,
      characters: characterAbi.abi,
      weapons: weaponAbi.abi,
      shields: shieldAbi.abi,
      cryptoblades: cryptobladesAbi.abi,
      treasury: treasuryAbi.abi,
      quest: questAbi.abi,
      equipment: equipmentAbi.abi,
      raid: raidAbi.abi
    }
    this.envName = envName
    this.otherAddress = otherAddress
  }

  getChainRpc(chain: string) {
    const localRpcUrls = this.configService.getRpcUrls()
    return localRpcUrls[chain] ? localRpcUrls[chain] : this.chainInfo[chain].rpcUrls[0]
  }

  getConfigAddress(chain: string, contract: string) {
    return this.chainInfo[chain][this.envName[contract]]
  }

  getProvider(chain: string) {
    return new ethers.JsonRpcProvider(this.getChainRpc(chain))
  }

  getOtherContractAddress(chain: string, nft: string): string {
    return this.otherAddress[chain][nft]
  }

  async getNetwork(url: string) {
    try {
      const rpc = new ethers.JsonRpcProvider(url)
      return (await rpc.getNetwork()).chainId
    } catch (e) {
      return -1
    }
  }

  getNetworkId(chain: string) {
    return +this.chainInfo[chain].VUE_APP_NETWORK_ID
  }

  getContract(chain: string, contract: string): any {
    return new ethers.Contract(other.includes(contract) ? this.getOtherContractAddress(chain, contract) : this.getConfigAddress(chain, contract), this.abis[contract], this.getProvider(chain))
  }

  getChainSymbol(chain: string) {
    return this.chainInfo[chain].currencySymbol
  }

  async getBalance(chain: string, address: string) {
    return await this.getProvider(chain).getBalance(address)
  }

  getMulticallAddress(chain: string) {
    return this.chainInfo[chain].VUE_APP_MULTICALL_CONTRACT_ADDRESS
  }

  getMulticall(chain: string) {
    return new ethers.Contract(this.getMulticallAddress(chain), multicallAbi, this.getProvider(chain))
  }

  getCalls(name: string, params: any) {
    return params.map((param: any) => ({
      name,
      params: [param],
    }))
  }

  getBatchCallData(abi: any, address: string, calls: any) {
    return {
      abi,
      calls: calls.map((call: any) => ({
        address,
        name: call.name,
        params: call.params
      }))
    }
  }

  async multicall(chain: string, { abi, calls }: any) {
    const itf = new ethers.Interface(abi)
    const contract = this.getMulticall(chain)

    const calldata = calls.map((call: any) => [
      call.address.toLowerCase(),
      itf.encodeFunctionData(call.name, call.params)
      // coder.encode(_.find(abi, (i: any) => i.name === call.name).inputs, call.params),
    ])
    const { returnData } = await contract['aggregate'](calldata)
    return returnData.map((data: any, i: number) => itf.decodeFunctionResult(calls[i].name, data))
  }

  parseMulticallResult(result: any) {
    const data: any = {}
    Object.keys(result.results).forEach((ref: any) => {
      data[ref] = result.results[ref].callsReturnContext.map((i: any) => i.returnValues)
    })
    return data
  }

  setActiveChain(chain: string) {
    this.eventService.publish('chain_changed', chain)
    this.multiplier = 0
    this.configService.chain = chain
    this.configService.saveChain()
  }

  multicallBnToNumber(val: any, format = false) {
    const num = parseInt(val.hex, 16)
    if (format) {
      return +ethers.formatEther(num)
    }
    return +num
  }

  async getReputationLevelRequirements() {
    const conQuest = this.getContract(this.configService.chain, 'quest')
    const calls = [
      {
        name: 'VAR_REPUTATION_LEVEL_2',
        params: []
      },
      {
        name: 'VAR_REPUTATION_LEVEL_3',
        params: []
      },
      {
        name: 'VAR_REPUTATION_LEVEL_4',
        params: []
      },
      {
        name: 'VAR_REPUTATION_LEVEL_5',
        params: []
      }
    ]
    const result = await this.multicall(this.configService.chain, this.getBatchCallData(this.abis['quest'], this.getConfigAddress(this.configService.chain, 'quest'), calls))
    const [VAR_REPUTATION_LEVEL_2, VAR_REPUTATION_LEVEL_3, VAR_REPUTATION_LEVEL_4, VAR_REPUTATION_LEVEL_5] = result.map((i: any) => this.utilService.bnToNumber(i))

    const requirementsRaw = (await conQuest.getVars([
      VAR_REPUTATION_LEVEL_2,
      VAR_REPUTATION_LEVEL_3,
      VAR_REPUTATION_LEVEL_4,
      VAR_REPUTATION_LEVEL_5,
    ])).map((i: any) => this.utilService.bnToNumber(i))

    return {
      level2: requirementsRaw[0],
      level3: requirementsRaw[1],
      level4: requirementsRaw[2],
      level5: requirementsRaw[3]
    }
  }

  async getPartners() {
    const treasuryContract = this.getContract(this.configService.chain, 'treasury')
    const partnerIds = await treasuryContract.getActivePartnerProjectsIds()

    const calls = [
      ...this.getCalls('partneredProjects', partnerIds.map((id: number | string) => this.utilService.bnToNumber(id))),
      ...this.getCalls('getSkillToPartnerRatio', partnerIds.map((id: number | string) => this.utilService.bnToNumber(id)))
    ]

    const results = await this.multicall(this.configService.chain, this.getBatchCallData(this.abis['treasury'], this.getConfigAddress(this.configService.chain, 'treasury'), calls))
    const [partner, ratio] = this.utilService.splitArray(results, 2, partnerIds.length)

    return partnerIds.map((id: any, i: number) => ({
      id: this.utilService.bnToNumber(id),
      name: partner[i][1],
      symbol: partner[i][2],
      address: partner[i][3],
      supply: this.utilService.bnToNumber(partner[i][4]),
      price: +this.utilService.fromEther(this.utilService.bnToNumber(partner[i][5])),
      ratio: +this.utilService.fromEther(this.utilService.bnToNumber(ratio[i]))
    }))
  }

  async getAccountBalances(accounts: string[], isGen2: boolean) {
    const treasuryContract = this.getContract(this.configService.chain, 'treasury')
    const multicallContract = this.getMulticall(this.configService.chain)
    /*const balanceCall = accounts.map((address: string) => {
      return {
        reference: address,
        methodName: 'balanceOf',
        methodParameters: [address]
      }
    })
    const unclaimedCall = accounts.map((address: string) => {
      if (isGen2 && this.configService.chain === 'BNB') {
        return {
          reference: address,
          methodName: 'userVars',
          methodParameters: [address, 10011]
        }
      }
      return {
        reference: address,
        methodName: 'getTokenRewardsFor',
        methodParameters: [address]
      }
    })
    const calls = [];
    calls.push({
      reference: 'wallet',
      contractAddress: this.getConfigAddress(this.configService.chain, isGen2 && this.configService.chain === 'BNB' ? 'valor' : 'skill'),
      abi: this.abis['token'],
      calls: balanceCall
    })
    calls.push({
      reference: 'unclaimed',
      contractAddress: this.getConfigAddress(this.configService.chain, 'cryptoblades'),
      abi: this.abis['cryptoblades'],
      calls: unclaimedCall
    })
    const gasBalance = await Promise.all(accounts.map(async (address: string) => {
      return ethers.formatEther((await this.getBalance(this.configService.chain, address)).toString())
    }))
    const results = await multicallContract.call(calls)

    const partners = await this.getPartners()
    let ratio = 0
    let price = 0
    if (partners) {
      let rewardId = partners.find((i: any) => i.symbol === 'SKILL')?.id
      price = partners.find((i: any) => i.symbol === 'SKILL')?.price
      if (partners.find((i: any) => i.symbol === 'VALOR')) {
        ratio = price / Number(this.utilService.formatSkillRatio(partners.find((i: any) => i.symbol === 'VALOR')?.ratio))
      }
      if (isGen2 && this.configService.chain === 'BNB') {
        rewardId = partners.find((i: any) => i.symbol === 'VALOR')?.id
      }
      if (rewardId) {
        this.multiplier = +ethers.formatEther(await treasuryContract.getProjectMultiplier(rewardId))
      }
    }

    return {
      ratio, balances: accounts.map((address: string, i: number) => {
        const gas = gasBalance[i]
        const unclaimed = this.multicallBnToNumber(results.results['unclaimed'].callsReturnContext.find((i: any) => i.reference === address)?.returnValues[0], true)
        const wallet = this.multicallBnToNumber(results.results['wallet'].callsReturnContext.find((i: any) => i.reference === address)?.returnValues[0], true)
        const claimable = unclaimed * this.multiplier
        return {
          gas,
          unclaimed,
          wallet,
          claimable
        }
      })
    }*/
  }
}
