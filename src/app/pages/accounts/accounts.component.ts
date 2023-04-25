import { Component, OnInit, HostListener } from '@angular/core';
import { Drawer, DrawerInterface } from 'flowbite';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

import { EventService } from 'src/app/services/event.service';
import { VariableService } from 'src/app/services/variable.service';
import { ConfigService } from 'src/app/services/config.service';
import { GroupService } from 'src/app/services/group.service';
import { Web3Service } from 'src/app/services/web3.service';
import { UtilService } from 'src/app/services/util.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { ApiService } from 'src/app/services/api.service';

import { ComponentCanDeactivate } from 'src/app/guard/deactivate.guard';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, ComponentCanDeactivate {
  isLoading = true
  groupDrawer!: DrawerInterface
  newGroupDrawer!: DrawerInterface
  manageGroupDrawer!: DrawerInterface
  addAccountDrawer!: DrawerInterface
  manageAccountDrawer!: DrawerInterface
  combatDrawer!: DrawerInterface

  activeAccountIndex = -1
  simulations: any[] = []
  screenWidth = 0

  simulating = false
  prices: any = {
    gas: 0,
    skill: 0,
    valor: 0
  }
  isLoadingCurrency = false

  constructor(
    private eventService: EventService,
    public variableService: VariableService,
    public configService: ConfigService,
    public groupService: GroupService,
    public web3Service: Web3Service,
    public utilService: UtilService,
    public currencyService: CurrencyService,
    private responsiveService: ResponsiveService,
    private apiService: ApiService
  ) {
    this.loadPrices()
  }

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    this.configService.firstLoad = true
    this.configService.saveFirstLoad()
    this.eventService.destroy('chain_changed')
    this.eventService.destroy('version_changed')
    this.eventService.destroy('currency_changed')
    this.eventService.destroy('multiplier_changed')
    return true
  }

  default() {
    this.variableService.repRequirements = null
    this.variableService.accountBalances = this.groupService.getActiveGroupAccounts().map(() => ({
      gas: 0,
      wallet: 0,
      unclaimed: 0,
      claimable: 0
    }))
    this.variableService.readyToFight = this.groupService.getActiveGroupAccounts().map(() => 0)
    this.variableService.accountChars = this.groupService.getActiveGroupAccounts().map(() => [])
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
    this.variableService.readyToFightClass = this.getMultiplierColor()

    this.eventService.subscribe('chain_changed', () => {
      this.initAll()
    })
    this.eventService.subscribe('version_changed', () => {
      this.initAll()
    })
    this.eventService.subscribe('currency_changed', () => {
      this.loadPrices()
    })
    this.eventService.subscribe('multiplier_changed', () => {
      this.variableService.readyToFightClass = this.getMultiplierColor()
    })

    if (this.configService.firstLoad) {
      this.configService.firstLoad = false
      this.configService.saveFirstLoad()
      this.initAll()
    } else {
      this.isLoading = false
    }

    this.screenWidth = this.responsiveService.screenWidth

    this.responsiveService.screenWidth$.subscribe((width) => {
      this.screenWidth = width
    })
  }

  initAll() {
    this.isLoading = true
    this.loadGroups()
    this.default()
    this.loadAllData()
  }

  loadAllData() {
    this.web3Service.getReputationLevelRequirements().then((repRequirements) => {
      this.variableService.repRequirements = repRequirements
      this.loadData()
    });
  }

  loadGroups() {
    this.variableService.groups = this.configService.getAllGroups()
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
        this.configService.updateRemoteConfig(this.apiService)
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
      this.configService.updateRemoteConfig(this.apiService)
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
        this.configService.updateRemoteConfig(this.apiService)
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
        this.variableService.readyToFight = this.groupService.getActiveGroupAccounts().map(() => 0)
        this.addAccountDrawer.hide()
        this.configService.updateRemoteConfig(this.apiService)
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
        this.configService.updateRemoteConfig(this.apiService)
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

          const accountChars = [...this.variableService.accountChars]
          const accountBalances = [...this.variableService.accountBalances]

          accountChars.splice(accountIndex, 1)
          accountBalances.splice(accountIndex, 1)

          this.variableService.accountChars = accountChars
          this.variableService.accountBalances = accountBalances

          this.loadGroups()
          this.manageAccountDrawer.hide()
          this.configService.updateRemoteConfig(this.apiService)
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
    const characterContract = this.web3Service.getContract('characters')
    const cryptobladesContract = this.web3Service.getContract('cryptoblades')

    const charRepId = await characterContract.NFTVAR_REPUTATION()
    const accounts = this.groupService.getActiveGroupAccounts()
    if (accounts.length > 0) {
      const { ratio, balances } = await this.web3Service.getAccountBalances(accounts, this.configService.version === 2)
      this.variableService.accountBalances = balances
      this.prices.valor = ratio * this.prices.valor

      const accountData = await this.web3Service.multicall(this.web3Service.getBatchCallData(this.web3Service.abis['characters'], this.web3Service.getOtherContractAddress('characters'), accounts.map((account: string) => ({
        name: 'balanceOf',
        params: [account]
      }))))

      const accountCharIds = await Promise.all(accounts.map(async (address: string, i: number) => {
        const count = this.utilService.bnToNumber(accountData[i])
        if (count > 0) {
          const calls = [...Array(count).keys()].map((j: number) => ({
            name: 'tokenOfOwnerByIndex',
            params: [address, j]
          }))
          return await this.web3Service.multicall(this.web3Service.getBatchCallData(this.web3Service.abis['characters'], this.web3Service.getOtherContractAddress('characters'), calls))
        } else {
          return []
        }
      }))

      this.variableService.accountChars = await Promise.all(
        accounts.map(async (account: string, i: number) => {
          const charsExp = await cryptobladesContract.getXpRewards([...accountCharIds[i].map((j: any) => this.utilService.bnToNumber(j))])
          return await Promise.all(accountCharIds[i].map((j: any) => this.utilService.bnToNumber(j)).map(async (charId: string, j: number) => {
            const charsInfo = await this.web3Service.multicall(this.web3Service.getBatchCallData(this.web3Service.abis['characters'], this.web3Service.getOtherContractAddress('characters'), [{
              name: 'get',
              params: [charId]
            }, {
              name: 'getTotalPower',
              params: [charId]
            }, {
              name: 'getStaminaPoints',
              params: [charId]
            }, {
              name: 'getNftVar',
              params: [charId, charRepId?.toString()]
            }]))

            const data = this.utilService.characterFromContract(charId, charsInfo[0].map((k: any) => this.utilService.bnToNumber(k)))
            const power = this.utilService.bnToNumber(charsInfo[1])
            const stamina = this.utilService.bnToNumber(charsInfo[2])
            const rep = this.utilService.bnToNumber(charsInfo[3])

            const exp = this.utilService.bnToNumber(charsExp[j])

            if (stamina >= this.configService.fightMultiplier * 40) {
              this.variableService.readyToFight[i] += 1
            }
            const nextLevel = this.utilService.getNextTargetExpLevel(data.level)
            const nextExp = nextLevel.exp - (data.xp + exp)
            const rank = this.variableService.repRequirements ? this.utilService.reputationToTier(this.utilService.getReputationTier(rep, this.variableService.repRequirements)) : 'PEASANT'

            return {
              data,
              power,
              stamina,
              rep,
              exp,
              nextLevel,
              nextExp,
              rank
            }
          }))
        })
      )
    }
    console.log('Took', new Date().getTime() - time, 'ms to load.')
    this.isLoading = false
  }
  async loadPrices() {
    this.isLoadingCurrency = true
    this.prices = {
      gas: 0,
      skill: 0,
      valor: 0
    }
    this.prices = await this.currencyService.loadPrices(this.configService.chain)
    this.isLoadingCurrency = false
  }

  async simulateCombat() {
    const elChar = (<HTMLInputElement>document.getElementById('input-character'))
    const elMultiplier = (<HTMLInputElement>document.getElementById('input-multiplier'))

    if (elChar.value && elMultiplier.value) {
      this.simulating = true
      this.simulations = []
      const cryptobladesContract = this.web3Service.getContract('cryptoblades')
      const equipmentContract = this.web3Service.getContract('equipment')

      const targets = await cryptobladesContract.getTargets(elChar.value)
      const baseExp = +(await cryptobladesContract.fightXpGain()).toString()
      const powerData = this.utilService.powerDataFromContract(await equipmentContract.getStoredPowerData(elChar.value))
      const enemies = this.utilService.getEnemyDetails(targets.map((i: any) => this.utilService.bnToNumber(i)))

      const rewards = await this.web3Service.multicall(this.web3Service.getBatchCallData(this.web3Service.abis['cryptoblades'], this.web3Service.getConfigAddress('cryptoblades'), [...enemies].map((enemy: any) => ({
        name: 'getTokenGainForFight',
        params: [enemy.power]
      }))))


      this.simulations = enemies.map((enemy: any, i: number) => {
        const chance = this.utilService.getWinChance(enemy.power, powerData.pvePower[enemy.trait])
        const exp = Math.floor((enemy.power / powerData.pvePower[4]) * baseExp) * +elMultiplier.value
        const reward = +this.utilService.fromEther(this.utilService.bnToNumber(rewards[i]))
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
    switch (this.configService.fightMultiplier) {
      case 5: return 'bg-danger text-white'
      case 4: return 'bg-warning text-white'
      case 3: return 'bg-primary text-white'
      case 2: return 'bg-success text-white'
      case 1: return 'bg-gray-700 text-white'
      default: return 'bg-gray-700 text-white'
    }
  }

  displayCurrency(i: number) {
    let display = ''
    if (this.screenWidth >= 580) {
      display += ` | Unc: ${this.utilService.formatNumber(this.variableService.accountBalances && this.variableService.accountBalances[i] ? this.variableService.accountBalances[i].unclaimed : 0)}${this.configService.display ? ' (' +
        this.utilService.convertTokenToLocalCurrency(this.variableService.accountBalances[i].unclaimed,
          this.configService.version, this.prices, this.configService.currency) + ')' : ''
        }`
    }
    if (this.screenWidth >= 840) {
      display += ` | Wallet:
      ${this.utilService.formatNumber(this.variableService.accountBalances
        && this.variableService.accountBalances[i] ?
        this.variableService.accountBalances[i].wallet :
        0)
        }${this.configService.display ? ' (' +
          this.utilService.convertTokenToLocalCurrency(this.variableService.accountBalances[i].wallet,
            this.configService.version, this.prices, this.configService.currency) + ')' :
          ''
        }`
    }
    if (this.screenWidth >= 1080) {
      display += ` | ${this.web3Service.getChainSymbol()}:
      ${this.utilService.formatNumber(this.variableService.accountBalances
        && this.variableService.accountBalances[i] ?
        this.variableService.accountBalances[i].gas :
        0)
        }${this.configService.display ? ' (' +
          this.utilService.convertGasToLocalCurrency(this.variableService.accountBalances[i].gas,
            this.prices, this.configService.currency) + ')' : ''
        } `
    }
    return display
  }
}
