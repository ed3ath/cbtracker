import { Injectable } from '@angular/core';
import * as ethers from 'ethers'
import {
  Multicall
} from 'ethereum-multicall';

import { EventService } from './event.service';

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
  activeChain = 'BNB'
  multiplier = 0

  constructor(private eventService: EventService) {
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
    this.activeChain = this.getChain()
  }

  getChainRpc(chain: string) {
    return this.chainInfo[chain].rpcUrls[0]
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
    this.activeChain = chain
    this.eventService.publish('chain_changed', chain)
    this.multiplier = 0
    this.saveChain(chain)
  }

  multicallBnToNumber(val: any, format = false) {
    const num = ethers.BigNumber.from(val.hex).toString()
    if (format) {
      return +ethers.utils.formatEther(num)
    }
    return +num
  }

  async getReputationLevelRequirements() {
    const conQuest = this.getContract(this.activeChain, 'quest')
    const conMultiCall = this.getMulticall(this.activeChain)
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
        contractAddress: this.getConfigAddress(this.activeChain, 'quest'),
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
    const treasuryContract = this.getContract(this.activeChain, 'treasury')
    const multicallContract = this.getMulticall(this.activeChain)
    const partnerIds = await treasuryContract.getActivePartnerProjectsIds()
    const results = this.parseMulticallResult(await multicallContract.call([{
      reference: 'treasury',
      contractAddress: this.getConfigAddress(this.activeChain, 'treasury'),
      abi: this.abis['treasury'],
      calls: partnerIds.map((partnerId: any) => {
        return {
          reference: partnerId,
          methodName: 'partneredProjects',
          methodParameters: [partnerId]
        }
      })
    }]))
    return results.treasury?.map((partner: any) => ({
      id: this.multicallBnToNumber(partner[0]),
      name: partner[1],
      symbol: partner[2],
      address: partner[3],
      supply: this.multicallBnToNumber(partner[4]),
      price: this.multicallBnToNumber(partner[5], true)
    }))
  }

  async getAccountBalances(accounts: string[], isGen2: boolean) {
    const treasuryContract = this.getContract(this.activeChain, 'treasury')
    const multicallContract = this.getMulticall(this.activeChain)
    const balanceCall = accounts.map((address: string) => {
      return {
        reference: address,
        methodName: 'balanceOf',
        methodParameters: [address]
      }
    })
    const unclaimedCall = accounts.map((address: string) => {
      if (isGen2 && this.activeChain === 'BNB') {
        return {
          reference: address,
          methodName: 'userVars',
          methodParameters: [address, 1011]
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
      contractAddress: this.getConfigAddress(this.activeChain, isGen2 && this.activeChain === 'BNB' ? 'valor' : 'skill'),
      abi: this.abis['token'],
      calls: balanceCall
    })
    calls.push({
      reference: 'unclaimed',
      contractAddress: this.getConfigAddress(this.activeChain, 'cryptoblades'),
      abi: this.abis['cryptoblades'],
      calls: unclaimedCall
    })
    const gasBalance = await Promise.all(accounts.map(async (address: string) => {
      return ethers.utils.formatEther((await this.getBalance(this.activeChain, address)).toString())
    }))
    const results = await multicallContract.call(calls)
    const parsedResults = this.parseMulticallResult(results)

    const partners = await this.getPartners()
    if (partners) {
      let rewardId = partners.find((i: any) => i.symbol === 'SKILL')?.id;
      if (isGen2) {
        rewardId = partners.find((i: any) => i.symbol === 'VALOR')?.id
      }
      if (rewardId) {
        this.multiplier = +ethers.utils.formatEther(await treasuryContract.getProjectMultiplier(rewardId))
      }
    }

    return accounts.map((address: string, i: number) => {
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

  saveChain(chain: string) {
    localStorage.setItem('chain', chain)
  }

  getChain() {
    return localStorage.getItem('chain') || 'BNB'
  }
}
