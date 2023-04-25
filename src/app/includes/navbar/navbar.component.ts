
import { Component, OnInit } from '@angular/core';
import { Drawer, DrawerInterface } from 'flowbite';
import { NavigationEnd, Router } from "@angular/router";
import Swal from 'sweetalert2'
import moment from 'moment'

import { Web3Service } from 'src/app/services/web3.service';
import { ConfigService } from 'src/app/services/config.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UtilService } from 'src/app/services/util.service';
import { EventService } from 'src/app/services/event.service';
import { ApiService } from 'src/app/services/api.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  theme = 'light'
  page = ''
  currencyDrawer!: DrawerInterface
  chainDrawer!: DrawerInterface
  loginDrawer!: DrawerInterface
  createDrawer!: DrawerInterface
  userInfoDrawer!: DrawerInterface
  alertDrawer!: DrawerInterface
  subscribed = false
  isCreating = false
  alerts: any[] = []

  constructor(
    private router: Router,
    public web3Service: Web3Service,
    public configService: ConfigService,
    public currencyService: CurrencyService,
    public themeService: ThemeService,
    public utilService: UtilService,
    private eventService: EventService,
    private apiService: ApiService,
    public subService: SubscriptionService,
    private scriptService: ScriptService
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.page = this.router.url.split('tracker/')[1];
        this.setActivePage(this.page)
      }
    });
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  toggleVersion() {
    this.configService.toggleVersion()
    this.eventService.publish('version_changed', this.configService.version)
  }

  setActivePage(page: string) {
    const list = document.querySelectorAll('a.block.py-2.pl-3.pr-4.rounded')
    const e = document.querySelector(`a[routerLink="/tracker/${page}"]`)
    list.forEach(el => {
      el.className = 'block py-2 pl-3 pr-4 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-warning-700 md:p-0 dark:text-white md:dark:hover:text-warning-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
    })
    if (e) {
      e.className = 'block py-2 pl-3 pr-4 text-white md:p-0 dark:text-white rounded bg-blue-700 md:bg-transparent md:text-warning-700 md:dark:text-warning-500'
    }
  }

  async ngOnInit(): Promise<void> {
    const options = {
      placement: 'right',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-90',
    }
    this.currencyDrawer = new Drawer(document.getElementById('currency-menu'), options);
    this.chainDrawer = new Drawer(document.getElementById('chain-menu'), options);
    this.loginDrawer = new Drawer(document.getElementById('login-menu'), options);
    this.createDrawer = new Drawer(document.getElementById('create-menu'), options)
    this.userInfoDrawer = new Drawer(document.getElementById('user-info-menu'), options)
    this.alertDrawer = new Drawer(document.getElementById('alert-menu'), options)
    this.subscribed = await this.subService.checkToken()
    const evaDav = document.querySelector('script#evadav-ads')
    const richAds = document.querySelector('script#rich-ads')
    if (!this.configService.subscribed) {
      if (!evaDav) {
        this.scriptService.loadExternalJsScript('evadav-ads', 'https://ajfnee.com/p/waWQiOjExMzk1NDYsInNpZCI6MTIwMjE4Nywid2lkIjo0NDUyMzYsInNyYyI6Mn0=eyJ.js', true)
      }
      if (!richAds) {
        this.scriptService.loadExternalJsScript('rich-ads', 'https://richinfo.co/richpartners/pops/js/richads-pu-ob.js', false, null, {
          'data-pubid': '877517',
          'data-siteid': '328436'
        })
      }
    }
    this.alerts = (await this.apiService.getUnreadAlerts({
      token: this.configService.userToken
    })).data
  }

  setCurrency(currency: string) {
    this.currencyService.setActiveCurrency(currency)
    this.currencyDrawer.hide()
  }

  setChain(chain: string) {
    this.web3Service.setActiveChain(chain)
    this.chainDrawer.hide()
  }

  showCurrencyDrawer() {
    this.hideAllDrawers()
    this.currencyDrawer.show()
  }

  showChainDrawer() {
    this.hideAllDrawers()
    this.chainDrawer.show()
  }

  getLogo(chain: string) {
    const file = this.configService.theme === 'light' && chain === 'METER' ? `${chain.toLowerCase()}-light` : chain.toLowerCase()
    return `./assets/icons/chains/${file}.svg`
  }

  checkPinInput(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  showLoginDrawer() {
    this.hideAllDrawers()
    if (!this.configService.userToken) {
      this.loginDrawer.show()
    } else {
      this.userInfoDrawer.show()
    }
  }

  showSubscriptionModal() {
    Swal.fire({
      title: '',
      icon: 'info',
      text: 'CB Tracker subscription costs P299/Month',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Subscribe'
    }).then((result) => {
      if (result.isConfirmed) {
        const decoded: any = this.utilService.decodeToken(this.configService.userToken)
        Swal.fire('', 'Generating payment link...', 'info')
        this.apiService.createSubscription({
          user: decoded.user
        }).then(res => {
          if (res.success) {
            window.location.href = res.data.url
          }
        })
      }
    })
  }

  showCreateDrawer() {
    this.hideAllDrawers()
    this.createDrawer.show()
  }

  login() {
    const elUser = (<HTMLInputElement>document.getElementById('input-login-user'))
    const elPin = (<HTMLInputElement>document.getElementById('input-login-pin'))
    if (elUser.value && elPin.value) {
      this.apiService.login({
        user: elUser.value,
        pin: elPin.value
      }).then((res: any) => {
        if (res.success) {
          if (res.data.token) {
            this.configService.userToken = res.data.token
            this.configService.saveUserToken()
            if (res.data.subscribed) {
              this.configService.subscribed = res.data.subscribed
              this.subscribed = res.data.subscribed
              this.subService.expiry = +res.data.expiry
              this.subService.user = res.data.user
              this.subService.subscription$.next(res.data.subscribed)
              this.configService.saveRemoteConfig(res.data.config)
            }
          }
          this.loginDrawer.hide()
          elUser.value = ''
          elPin.value = ''
          Swal.fire('', 'Login successful', 'success')
        } else {
          Swal.fire('', res.error, 'error')
        }
      })
    }
  }

  createAccount() {
    const elUser = (<HTMLInputElement>document.getElementById('input-create-user'))
    const elPin = (<HTMLInputElement>document.getElementById('input-create-pin'))
    const elPin2 = (<HTMLInputElement>document.getElementById('input-create-pin2'))
    if (elUser.value && elPin.value && elPin2.value) {
      if (elPin.value !== elPin2.value) {
        Swal.fire('', 'Pin doesn\'t match', 'error')
      } else {
        this.isCreating = true
        this.apiService.create({
          user: elUser.value,
          pin: elPin.value
        }).then((res: any) => {
          if (res.success) {
            if (res.data.token) {
              this.configService.userToken = res.data.token
              this.configService.saveUserToken()
            }
            this.createDrawer.hide()
            elUser.value = ''
            elPin.value = ''
            Swal.fire('', 'Account created.', 'success')
          } else {
            Swal.fire('', res.error, 'error')
          }
          this.isCreating = false
        })
      }
    }
  }

  formatDate(date: any) {
    if (date > 0) {
      return moment(new Date(date * 1000)).format('MMM Do YYYY, h:mm A')
    } else {
      return 'Expired'
    }
  }

  logout() {
    this.userInfoDrawer.hide()
    this.configService.userToken = ''
    this.configService.saveUserToken()
    this.subService.expiry = 0
    this.subService.user = ''
    this.subService.subscription$.next(false)
  }

  hideAllDrawers() {
    this.currencyDrawer.hide()
    this.chainDrawer.hide()
    this.loginDrawer.hide()
    this.createDrawer.hide()
    this.userInfoDrawer.hide()
    this.alertDrawer.hide()
  }

  showAlerts() {
    this.hideAllDrawers()
    this.alertDrawer.show()
  }

  showAlertContent(id: number | string) {
    const alertInfo = this.alerts.find((i: any) => i.id === id)
    if (alertInfo) {
      Swal.fire({
        html: `<p><h3>${alertInfo.title}</h3></p><hr class="m-4"><p>${alertInfo.content}</p>`,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Close'
      })
      this.apiService.markAlertAsRead({
        token: this.configService.userToken,
        id: id
      })
      const alertIndex = this.alerts.findIndex((i: any) => i.id === id)
      if (alertIndex >= 0) {
        this.alerts.splice(alertIndex, 1)
      }
    }
  }

}
