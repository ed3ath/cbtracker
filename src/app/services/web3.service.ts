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
import marketAbi from 'build/contracts/NFTMarket.json'
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
      raid: raidAbi.abi,
      market: marketAbi.abi
    }
    this.envName = envName
    this.otherAddress = otherAddress
  }

  getChainRpc(chain: string) {
    const localRpcUrls = this.configService.getRpcUrls()
    return localRpcUrls[chain] ? localRpcUrls[chain] : this.chainInfo[chain].rpcUrls[0]
  }

  getConfigAddress(contract: string) {
    return this.chainInfo[this.configService.chain][this.envName[contract]]
  }

  getProvider() {
    return new ethers.JsonRpcProvider(this.getChainRpc(this.configService.chain))
  }

  getOtherContractAddress(nft: string): string {
    return this.otherAddress[this.configService.chain][nft]
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

  getContract(contract: string): any {
    return new ethers.Contract(other.includes(contract) ? this.getOtherContractAddress(contract) : this.getConfigAddress(contract), this.abis[contract], this.getProvider())
  }

  getChainSymbol() {
    return this.chainInfo[this.configService.chain].currencySymbol
  }

  async getBalance(address: string) {
    return await this.getProvider().getBalance(address)
  }

  getMulticallAddress() {
    return this.chainInfo[this.configService.chain].VUE_APP_MULTICALL_CONTRACT_ADDRESS
  }

  getMulticall() {
    return new ethers.Contract(this.getMulticallAddress(), multicallAbi, this.getProvider())
  }

  getCalls(name: string, params: any) {
    return params.map((param: any) => ({
      name,
      params: Array.isArray(param) ? param : [param],
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


  async multicall({ abi, calls }: any) {
    const itf = new ethers.Interface(abi)
    const contract = this.getMulticall()
    const calldata = calls.map((call: any) => [
      call.address.toLowerCase(),
      itf.encodeFunctionData(call.name, call.params)
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
    const conQuest = this.getContract('quest')
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
    const result = await this.multicall(this.getBatchCallData(this.abis['quest'], this.getConfigAddress('quest'), calls))
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
    const treasuryContract = this.getContract('treasury')
    const partnerIds = await treasuryContract.getActivePartnerProjectsIds()

    const calls = [
      ...this.getCalls('partneredProjects', partnerIds.map((id: number | string) => this.utilService.bnToNumber(id))),
      ...this.getCalls('getSkillToPartnerRatio', partnerIds.map((id: number | string) => this.utilService.bnToNumber(id)))
    ]

    const results = await this.multicall(this.getBatchCallData(this.abis['treasury'], this.getConfigAddress('treasury'), calls))
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
    const treasuryContract = this.getContract('treasury')
    const walletBalances = await this.multicall(this.getBatchCallData(this.abis['token'], this.getConfigAddress(isGen2 && this.configService.chain === 'BNB' ? 'valor' : 'skill'), this.getCalls('balanceOf', accounts)))
    const unclaimedBalances = await this.multicall(this.getBatchCallData(this.abis['cryptoblades'], this.getConfigAddress('cryptoblades'), isGen2 && this.configService.chain === 'BNB' ? this.getCalls('userVars', accounts.map((account: string) => [account, 10011])) : this.getCalls('getTokenRewardsFor', accounts)))
    const gasBalance = await Promise.all(accounts.map(async (address: string) => {
      return ethers.formatEther((await this.getBalance(address)).toString())
    }))
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
        const unclaimed = +this.utilService.fromEther(this.utilService.bnToNumber(unclaimedBalances[i]))
        const wallet = +this.utilService.fromEther(this.utilService.bnToNumber(walletBalances[i]))
        const claimable = unclaimed * this.multiplier
        return {
          gas,
          unclaimed,
          wallet,
          claimable
        }
      })
    }
  }
}
