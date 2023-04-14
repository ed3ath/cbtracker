import { Injectable } from '@angular/core';
import * as ethers from 'ethers'
import {
  Multicall
} from 'ethereum-multicall';

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
    return new ethers.providers.JsonRpcProvider(this.getChainRpc(chain))
  }

  getOtherContractAddress(chain: string, nft: string): string {
    return this.otherAddress[chain][nft]
  }

  async getNetwork(url: string) {
    try {
      const rpc = new ethers.providers.JsonRpcProvider(url)
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
    const options: any = { ethersProvider: this.getProvider(chain), tryAggregate: false }
    if (['COINEX', 'METER', 'SKALE'].includes(chain)) {
      options.multicallCustomContractAddress = this.getMulticallAddress(chain)
    }
    return new Multicall(options)
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
    const num = ethers.BigNumber.from(val.hex).toString()
    if (format) {
      return +ethers.utils.formatEther(num)
    }
    return +num
  }

  async getReputationLevelRequirements() {
    const conQuest = this.getContract(this.configService.chain, 'quest')
    const conMultiCall = this.getMulticall(this.configService.chain)
    const calls = [
      {
        reference: 'VAR_REPUTATION_LEVEL_2',
        methodName: 'VAR_REPUTATION_LEVEL_2',
        methodParameters: []
      },
      {
        reference: 'VAR_REPUTATION_LEVEL_3',
        methodName: 'VAR_REPUTATION_LEVEL_3',
        methodParameters: []
      },
      {
        reference: 'VAR_REPUTATION_LEVEL_4',
        methodName: 'VAR_REPUTATION_LEVEL_4',
        methodParameters: []
      },
      {
        reference: 'VAR_REPUTATION_LEVEL_5',
        methodName: 'VAR_REPUTATION_LEVEL_5',
        methodParameters: []
      }
    ]
    const result = await conMultiCall.call([
      {
        reference: 'repRequirements',
        contractAddress: this.getConfigAddress(this.configService.chain, 'quest'),
        abi: this.abis['quest'],
        calls
      },
    ])

    const [VAR_REPUTATION_LEVEL_2, VAR_REPUTATION_LEVEL_3, VAR_REPUTATION_LEVEL_4, VAR_REPUTATION_LEVEL_5] = result.results['repRequirements'].callsReturnContext.map((i: any) => i.returnValues[0])

    const requirementsRaw = await conQuest.getVars([
      VAR_REPUTATION_LEVEL_2,
      VAR_REPUTATION_LEVEL_3,
      VAR_REPUTATION_LEVEL_4,
      VAR_REPUTATION_LEVEL_5,
    ])

    return {
      level2: +requirementsRaw[0],
      level3: +requirementsRaw[1],
      level4: +requirementsRaw[2],
      level5: +requirementsRaw[3],
    };
  }

  async getPartners() {
    const treasuryContract = this.getContract(this.configService.chain, 'treasury')
    const multicallContract = this.getMulticall(this.configService.chain)
    const partnerIds = await treasuryContract.getActivePartnerProjectsIds()
    const results = this.parseMulticallResult(await multicallContract.call([{
      reference: 'treasury',
      contractAddress: this.getConfigAddress(this.configService.chain, 'treasury'),
      abi: this.abis['treasury'],
      calls: partnerIds.map((partnerId: any) => ({
        reference: partnerId,
        methodName: 'partneredProjects',
        methodParameters: [partnerId]
      }))
    },
    {
      reference: 'ratio',
      contractAddress: this.getConfigAddress(this.configService.chain, 'treasury'),
      abi: this.abis['treasury'],
      calls: partnerIds.map((partnerId: any) => ({
        reference: partnerId,
        methodName: 'getSkillToPartnerRatio',
        methodParameters: [partnerId]
      }))
    }]))

    return results.treasury?.map((partner: any, i: number) => ({
      id: this.multicallBnToNumber(partner[0]),
      name: partner[1],
      symbol: partner[2],
      address: partner[3],
      supply: this.multicallBnToNumber(partner[4]),
      price: this.multicallBnToNumber(partner[5], true),
      ratio: this.multicallBnToNumber(results.ratio[i][0], true)
    }))
  }

  async getAccountBalances(accounts: string[], isGen2: boolean) {
    const treasuryContract = this.getContract(this.configService.chain, 'treasury')
    const multicallContract = this.getMulticall(this.configService.chain)
    const balanceCall = accounts.map((address: string) => {
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
      return ethers.utils.formatEther((await this.getBalance(this.configService.chain, address)).toString())
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
        this.multiplier = +ethers.utils.formatEther(await treasuryContract.getProjectMultiplier(rewardId))
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
    }
  }
}
