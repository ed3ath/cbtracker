import { Component, OnDestroy, OnInit } from '@angular/core';
import { Drawer, DrawerInterface } from 'flowbite';
import Swal from 'sweetalert2'

import { EventService } from 'src/app/services/event.service';
import { ConfigService } from 'src/app/services/config.service';
import { GroupService } from 'src/app/services/group.service';
import { Web3Service } from 'src/app/services/web3.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, OnDestroy {
  isLoading = true
  activeGroupIndex = 0
  groups: any[] = []
  groupDrawer!: DrawerInterface
  newGroupDrawer!: DrawerInterface
  manageGroupDrawer!: DrawerInterface
  addAccountDrawer!: DrawerInterface
  manageAccountDrawer!: DrawerInterface
  combatDrawer!: DrawerInterface

  accountChars: any[] = []
  accountBalances: any[] = []
  repRequirements: any

  activeAccountIndex = -1
  simulations: any[] = []
  readyToFight: any[] = []
  fightMultiplier = 1

  simulating = false
  expanded = false

  constructor(
    private eventService: EventService,
    public configService: ConfigService,
    public groupService: GroupService,
    public web3Service: Web3Service,
    public utilService: UtilService
  ) {
  }

  default() {
    this.repRequirements = null
    this.accountBalances = this.groupService.getActiveGroupAccounts().map(() => ({
      gas: 0,
      wallet: 0,
      unclaimed: 0,
      claimable: 0
    }))
    this.readyToFight = this.groupService.getActiveGroupAccounts().map(() => 0)
    this.accountChars = this.groupService.getActiveGroupAccounts().map(() => [])
  }

  ngOnInit(): void {
    const options = {
      placement: 'right',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-90',
    }
    this.groupDrawer = new Drawer(document.getElementById('groups-drawer'), options);
    this.newGroupDrawer = new Drawer(document.getElementById('new-group-drawer'), options)
    this.manageGroupDrawer = new Drawer(document.getElementById('manage-group-drawer'), options)
    this.addAccountDrawer = new Drawer(document.getElementById('add-account-drawer'), options)
    this.manageAccountDrawer = new Drawer(document.getElementById('manage-account-drawer'), options)
    this.combatDrawer = new Drawer(document.getElementById('combat-drawer'), options)

    this.loadGroups()
    this.default()
    this.loadAllData()

    this.eventService.subscribe('chain_changed', () => {
      this.isLoading = true
      this.default()
      this.loadAllData()
    })
    this.eventService.subscribe('version_changed', () => {
      this.isLoading = true
      this.default()
      this.loadAllData()
    })
  }

  loadAllData() {
    this.web3Service.getReputationLevelRequirements().then((repRequirements) => {
      this.repRequirements = repRequirements
      this.loadData()
    });
  }

  ngOnDestroy(): void {
    this.eventService.destroy('chain_changed')
    this.eventService.destroy('version_changed')
  }

  loadGroups() {
    this.groups = this.configService.getAllGroups()
  }

  showGroupsDrawer() {
    this.groupDrawer.show()
  }

  setGroupIndex(index: number) {
    this.groupService.setActiveGroupIndex(index)
    this.groupDrawer.hide()
  }

  showNewGroupDrawer() {
    this.groupDrawer.hide()
    this.newGroupDrawer.show()
  }

  hideNewGroupDrawer() {
    this.newGroupDrawer.hide()
  }

  showManageGroupDrawer() {
    this.groupDrawer.hide()
    this.manageGroupDrawer.show()
  }

  hideManageGroupDrawer() {
    this.manageGroupDrawer.hide()
  }

  showAddAccountDrawer() {
    this.groupDrawer.hide()
    this.addAccountDrawer.show()
  }

  showAccountDrawer(address: string) {
    const elName = (<HTMLInputElement>document.getElementById('input-manage-account-name'))
    const elAddress = (<HTMLInputElement>document.getElementById('input-manage-account-address'))
    elName.value = this.groupService.getAccountName(address)
    elAddress.value = address
    if (elAddress.value) {
      this.activeAccountIndex = this.groupService.getActiveGroupAccounts().indexOf(elAddress.value)
    }
    this.manageAccountDrawer.show()
  }

  showCombatDrawer() {
    this.manageAccountDrawer.hide()
    this.combatDrawer.show()
  }

  showLogsDrawer() {
    Swal.fire('', 'Coming soon.', 'info')
  }

  saveNewGroup() {
    const el = (<HTMLInputElement>document.getElementById('input-group-name'))
    if (el.value) {
      const newGroupIndex = this.groupService.newGroup(el.value)
      if (newGroupIndex >= 0) {
        if (newGroupIndex === 0) {
          this.groupService.importOldAccounts()
          this.loadData()
        }
        this.loadGroups()
        this.setGroupIndex(newGroupIndex)
        this.newGroupDrawer.hide()
        Swal.fire('', 'New group have been added.', 'success')
      } else {
        Swal.fire('', 'Group already exist.', 'error')
      }
      el.value = ''
    }
  }

  saveGroup() {
    const el = (<HTMLInputElement>document.getElementById('input-manage-group-name'))
    if (el.value) {
      this.groupService.setActiveGroupName(el.value)
      this.loadGroups()
      this.manageGroupDrawer.hide()
      Swal.fire('', 'Changes have been saved.', 'success')
      el.value = ''
    }
  }

  deleteGroup() {
    const groupName = this.groupService.getActiveGroupName()
    Swal.fire({
      title: '',
      icon: 'warning',
      text: `Do you want to delete the group ${groupName}? All accounts on this group will also be deleted.`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        const accounts = this.groupService.getActiveGroupAccounts()
        const names = this.configService.getAllAccountNames()
        accounts.forEach((address: string) => {
          delete names[address]
        })
        this.groupService.setAccountNames(names)
        this.groupService.deleteActiveGroup()
        this.loadGroups()
        this.manageGroupDrawer.hide()
        Swal.fire('', `Group "${groupName}" has been deleted.`, 'success')
      }
    })
  }

  saveAccount() {
    const elName = (<HTMLInputElement>document.getElementById('input-add-account-name'))
    const elAddress = (<HTMLInputElement>document.getElementById('input-add-account-address'))
    if (elName.value && elAddress.value) {
      if (!this.groupService.isValidAddress(elAddress.value)) {
        Swal.fire('', `"${elAddress.value}" is not a valid address.`, 'error')
      } else if (this.groupService.checkAccountNameExists(elName.value)) {
        Swal.fire('', `"${elName.value}" is already taken.`, 'error')
      } else if (this.groupService.checkAccountAddressExists(elAddress.value)) {
        Swal.fire('', `"${elAddress.value}" already exists.`, 'error')
      } else {
        this.groupService.addGroupAccount(elName.value, elAddress.value)
        this.loadGroups()
        this.addAccountDrawer.hide()
        this.loadData()
        Swal.fire('', `Account "${elName.value}" have been added.`, 'success')
        elName.value = ''
        elAddress.value = ''
      }
    }
  }

  saveManageAccount() {
    const elName = (<HTMLInputElement>document.getElementById('input-manage-account-name'))
    const elAddress = (<HTMLInputElement>document.getElementById('input-manage-account-address'))
    if (elName.value && elAddress.value) {
      const currentName = this.groupService.getAccountName(elAddress.value)
      if (this.groupService.checkAccountNameExists(elName.value) && currentName !== elName.value) {
        Swal.fire('', `"${elName.value}" is already taken.`, 'error')
      } else {
        this.groupService.setAccountName(elName.value, elAddress.value)
        this.loadGroups()
        this.manageAccountDrawer.hide()
        Swal.fire('', `Account "${elName.value}" have been saved.`, 'success')
        elName.value = ''
        elAddress.value = ''
      }
    }
  }

  deleteAccount() {
    const elAddress = (<HTMLInputElement>document.getElementById('input-manage-account-address'))
    if (elAddress.value) {
      Swal.fire({
        title: '',
        icon: 'warning',
        text: `Do you want to delete the account "${elAddress.value}"?.`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          const accounts = this.groupService.getActiveGroupAccounts()
          this.groupService.deleteAccount(elAddress.value)
          this.activeAccountIndex = -1
          const accountIndex = accounts.indexOf(elAddress.value)

          const accountChars = [...this.accountChars]
          const accountBalances = [...this.accountBalances]

          accountChars.splice(accountIndex, 1)
          accountBalances.splice(accountIndex, 1)

          this.accountChars = accountChars
          this.accountBalances = accountBalances

          this.loadGroups()
          this.manageAccountDrawer.hide()
          Swal.fire('', `The account "${elAddress.value}" has been deleted.`, 'success')
        }
      })
    }
  }

  parseAccountResult(results: any, address: string) {
    return this.web3Service.multicallBnToNumber(results.find((i: any) => i.reference === address).returnValues[0])
  }

  getNftIds(results: any, address: string) {
    if (results)
      return results.filter((i: any) => i.reference === address).map((i: any) => this.web3Service.multicallBnToNumber(i.returnValues[0]).toString())
    return []
  }

  async loadData() {
    this.isLoading = true
    const time = new Date().getTime()
    const multicallContract = this.web3Service.getMulticall(this.web3Service.activeChain)
    const characterContract = this.web3Service.getContract(this.web3Service.activeChain, 'characters')

    const charRepId = await characterContract.NFTVAR_REPUTATION()
    const accounts = this.groupService.getActiveGroupAccounts()
    if (accounts.length > 0) {
      const accountData = await multicallContract.call([
        {
          reference: 'charCounts',
          contractAddress: this.web3Service.getOtherContractAddress(this.web3Service.activeChain, 'characters'),
          abi: this.web3Service.abis['characters'],
          calls: accounts.map((address: string) => {
            return {
              reference: address,
              methodName: 'balanceOf',
              methodParameters: [address]
            }
          })
        },
        {
          reference: 'weaponCounts',
          contractAddress: this.web3Service.getOtherContractAddress(this.web3Service.activeChain, 'weapons'),
          abi: this.web3Service.abis['weapons'],
          calls: accounts.map((address: string) => {
            return {
              reference: address,
              methodName: 'balanceOf',
              methodParameters: [address]
            }
          })
        }
      ])
      const charCountResults = accountData.results['charCounts'].callsReturnContext
      const weaponCountResults = accountData.results['weaponCounts'].callsReturnContext

      this.accountBalances = await this.web3Service.getAccountBalances(accounts, this.utilService.version === 2)

      const charCountCalls: any[] = [];
      const weaponCountCalls: any[] = [];
      accounts.forEach((address: string) => {
        [...Array(this.parseAccountResult(charCountResults, address)).keys()].map((i: any) => {
          charCountCalls.push({
            reference: address,
            methodName: 'tokenOfOwnerByIndex',
            methodParameters: [address, i]
          })
        })
      })
      accounts.forEach((address: string) => {
        [...Array(this.parseAccountResult(weaponCountResults, address)).keys()].map((i: any) => {
          weaponCountCalls.push({
            reference: address,
            methodName: 'tokenOfOwnerByIndex',
            methodParameters: [address, i]
          })
        })
      })

      const nftCallResults = await multicallContract.call([
        {
          reference: 'charIds',
          contractAddress: this.web3Service.getOtherContractAddress(this.web3Service.activeChain, 'characters'),
          abi: this.web3Service.abis['characters'],
          calls: charCountCalls,
        },
        {
          reference: 'weaponIds',
          contractAddress: this.web3Service.getOtherContractAddress(this.web3Service.activeChain, 'weapons'),
          abi: this.web3Service.abis['weapons'],
          calls: weaponCountCalls,
        }
      ])

      if (nftCallResults.results['charIds']) {

        const charDataCalls: any[] = []
        const charPowerCall: any[] = []
        const charStaminaCall: any[] = []
        const charsExpCall: any[] = []
        const charsRepCall: any[] = []

        accounts.forEach((address: string) => {
          const accountCharIds = this.getNftIds(nftCallResults.results['charIds']?.callsReturnContext, address)
          accountCharIds.forEach((charId: string) => {
            charDataCalls.push({
              reference: charId,
              methodName: 'get',
              methodParameters: [charId]
            })
            charPowerCall.push({
              reference: charId,
              methodName: 'getTotalPower',
              methodParameters: [charId]
            })
            charStaminaCall.push({
              reference: charId,
              methodName: 'getStaminaPoints',
              methodParameters: [charId]
            })
            charsExpCall.push({
              reference: charId,
              methodName: 'getXpRewards',
              methodParameters: [[charId]]
            })
            charsRepCall.push({
              reference: charId,
              methodName: 'getNftVar',
              methodParameters: [charId, charRepId?.toString()]
            })
          })
        })

        const allCall = [
          {
            reference: 'charData',
            contractAddress: this.web3Service.getOtherContractAddress(this.web3Service.activeChain, 'characters'),
            abi: this.web3Service.abis['characters'],
            calls: charDataCalls
          },
          {
            reference: 'charPower',
            contractAddress: this.web3Service.getOtherContractAddress(this.web3Service.activeChain, 'characters'),
            abi: this.web3Service.abis['characters'],
            calls: charPowerCall
          },
          {
            reference: 'charStamina',
            contractAddress: this.web3Service.getOtherContractAddress(this.web3Service.activeChain, 'characters'),
            abi: this.web3Service.abis['characters'],
            calls: charStaminaCall
          },
          {
            reference: 'charExp',
            contractAddress: this.web3Service.getConfigAddress(this.web3Service.activeChain, 'cryptoblades'),
            abi: this.web3Service.abis['cryptoblades'],
            calls: charsExpCall
          }
        ]

        if (this.web3Service.activeChain !== 'AVAX') {
          allCall.push({
            reference: 'charRep',
            contractAddress: this.web3Service.getOtherContractAddress(this.web3Service.activeChain, 'characters'),
            abi: this.web3Service.abis['characters'],
            calls: charsRepCall
          })
        }

        const accountCharInfo = await multicallContract.call(allCall)

        this.accountChars = accounts.map((address: string, index: number) => {
          const accountCharIds = this.getNftIds(nftCallResults.results['charIds']?.callsReturnContext, address)
          return accountCharIds.map((charId: string) => {
            const data = this.utilService.characterFromContract(charId, accountCharInfo.results['charData'].callsReturnContext.find((i: any) => i.reference === charId)?.returnValues)
            const power = this.web3Service.multicallBnToNumber(accountCharInfo.results['charPower'].callsReturnContext.find((i: any) => i.reference === charId)?.returnValues[0])
            const stamina = accountCharInfo.results['charStamina'].callsReturnContext.find((i: any) => i.reference === charId)?.returnValues[0]
            const rep = this.web3Service.activeChain !== 'AVAX' ? this.web3Service.multicallBnToNumber(accountCharInfo.results['charRep'].callsReturnContext.find((i: any) => i.reference === charId)?.returnValues[0]) : 0
            const exp = this.web3Service.multicallBnToNumber(accountCharInfo.results['charExp'].callsReturnContext.find((i: any) => i.reference === charId)?.returnValues[0])
            if (stamina > 40) {
              this.readyToFight[index] += 1
            }
            return {
              data,
              power,
              stamina,
              rep,
              exp
            }
          })
        })
      }
      console.log('Took', new Date().getTime() - time, 'ms to load.')
      this.isLoading = false
    }
  }

  async simulateCombat() {
    const elChar = (<HTMLInputElement>document.getElementById('input-character'))
    const elMultiplier = (<HTMLInputElement>document.getElementById('input-multiplier'))

    if (elChar.value && elMultiplier.value) {
      this.simulating = true
      this.simulations = []
      const cryptobladesContract = this.web3Service.getContract(this.web3Service.activeChain, 'cryptoblades')
      const equipmentContract = this.web3Service.getContract(this.web3Service.activeChain, 'equipment')
      const multicallContract = this.web3Service.getMulticall(this.web3Service.activeChain)

      const targets = await cryptobladesContract.getTargets(elChar.value);
      const baseExp = +(await cryptobladesContract.fightXpGain()).toString()
      const powerData = this.utilService.powerDataFromContract(await equipmentContract.getStoredPowerData(elChar.value))
      const enemies = this.utilService.getEnemyDetails(targets);
      const rewardResults = await multicallContract.call([
        {
          reference: 'rewards',
          contractAddress: this.web3Service.getConfigAddress(this.web3Service.activeChain, 'cryptoblades'),
          abi: this.web3Service.abis['cryptoblades'],
          calls: enemies.map((enemy: any) => ({
            reference: enemy.id,
            methodName: 'getTokenGainForFight',
            methodParameters: [enemy.power]
          }))
        }
      ])
      const rewards = rewardResults.results['rewards']?.callsReturnContext.map((result: any) => this.web3Service.multicallBnToNumber(result.returnValues[0], true) * +elMultiplier.value)
      this.simulations = enemies.map((enemy: any, i: number) => {
        const chance = this.utilService.getWinChance(enemy.power,  powerData.pvePower[4])
        const exp = Math.floor((enemy.power / powerData.pvePower[4]) * baseExp) * +elMultiplier.value
        const reward = rewards[i]
        const power = enemies[i].power
        const element = enemies[i].element
        return {
          chance,
          exp,
          reward,
          power,
          element
        }
      })
      this.simulating = false
    }
  }

  toggleExpanded() {
    this.configService.expanded = !this.configService.expanded
    this.configService.saveExpanded()
  }

  getStaminaColor(stamina: number) {
    if (stamina >= 200) {
      return 'text-danger'
    } else if (stamina >= 180) {
      return 'text-warning'
    } else if (stamina >= 120) {
      return 'text-primary'
    } else if (stamina >= 80) {
      return 'text-success'
    }
    return ''
  }

  getMultiplierColor() {
    switch(this.fightMultiplier) {
      case 5: return 'bg-danger text-white'
      case 4: return 'bg-warning text-white'
      case 3: return 'bg-primary text-white'
      case 2: return 'bg-success text-white'
      case 1: return 'bg-gray-700 text-white'
      default: return 'bg-gray-700 text-white'
    }
  }
}
