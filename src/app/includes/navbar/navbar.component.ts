import { Component, OnInit } from '@angular/core';
import { Drawer, DrawerInterface, Modal, ModalInterface } from 'flowbite';
import { NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';
import moment from 'moment';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

import { Web3Service } from 'src/app/services/web3.service';
import { ConfigService } from 'src/app/services/config.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UtilService } from 'src/app/services/util.service';
import { EventService } from 'src/app/services/event.service';
import { ScriptService } from 'src/app/services/script.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  theme = 'light';
  page = '';
  currencyDrawer!: DrawerInterface;
  chainDrawer!: DrawerInterface;
  alertDrawer!: DrawerInterface;
  paypalModal!: ModalInterface;
  isCreating = false;
  alerts: any[] = [];
  payPalConfig?: IPayPalConfig;

  constructor(
    private router: Router,
    public web3Service: Web3Service,
    public configService: ConfigService,
    public currencyService: CurrencyService,
    public themeService: ThemeService,
    public utilService: UtilService,
    private eventService: EventService,
    private scriptService: ScriptService
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.router.url.includes('tracker/')) {
          this.page = this.router.url.split('tracker/')[1];
          this.setActivePage(this.page);
        }
      }
    });
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  toggleVersion() {
    this.configService.toggleVersion();
    this.eventService.publish('version_changed', this.configService.version);
  }

  setActivePage(page: string) {
    const list = document.querySelectorAll('a.block.py-2.pl-3.pr-4.rounded');
    const e = document.querySelector(`a[routerLink="/tracker/${page}"]`);
    list.forEach((el) => {
      el.className =
        'block py-2 pl-3 pr-4 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-warning-700 md:p-0 dark:text-white md:dark:hover:text-warning-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
    });
    if (e) {
      e.className =
        'block py-2 pl-3 pr-4 text-white md:p-0 dark:text-white rounded bg-blue-700 md:bg-transparent md:text-warning-700 md:dark:text-warning-500';
    }
  }

  async ngOnInit(): Promise<void> {
    const options = {
      placement: 'right',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-90',
    };
    this.currencyDrawer = new Drawer(
      document.getElementById('currency-menu'),
      options
    );
    this.chainDrawer = new Drawer(
      document.getElementById('chain-menu'),
      options
    );
    this.alertDrawer = new Drawer(
      document.getElementById('alert-menu'),
      options
    );
    // this.paypalModal = new Modal(document.getElementById('paypal-modal'), {
    //   placement: 'center',
    //   backdrop: 'static',
    //   backdropClasses:
    //     'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-90',
    //   closable: false,
    // });

    // const evaDav = document.querySelector('script#evadav-ads');
    // const richAds = document.querySelector('script#rich-ads');
    // const cookieBot = document.querySelector('script#Cookiebot');
    // if (!cookieBot) {
    //   this.scriptService.loadExternalJsScript('Cookiebot', 'https://consent.cookiebot.com/uc.js', false, null, {
    //     'data-cbid': 'fa9a20bb-5163-4bc9-834d-6d653ac9c31d',
    //     'data-blockingmode': 'auto',
    //     'type': 'text/javascript'
    //   })
    // }
    // if (!evaDav) {
    //   this.scriptService.loadExternalJsScript(
    //     'evadav-ads',
    //     'https://nwwais.com/pw/waWQiOjExMzk1NDYsInNpZCI6MTMwNDc3MCwid2lkIjo1MTYwNTEsInNyYyI6Mn0=eyJ.js',
    //     true
    //   );
    // }
    /*if (!richAds) {
        this.scriptService.loadExternalJsScript(
          'rich-ads',
          'https://richinfo.co/richpartners/pops/js/richads-pu-ob.js',
          false,
          null,
          {
            'data-pubid': '877517',
            'data-siteid': '328436',
          }
        );
      } */
    this.alerts = []
  }

  setCurrency(currency: string) {
    this.currencyService.setActiveCurrency(currency);
    this.currencyDrawer.hide();
  }

  setChain(chain: string) {
    this.web3Service.setActiveChain(chain);
    this.chainDrawer.hide();
  }

  showCurrencyDrawer() {
    this.hideAllDrawers();
    this.currencyDrawer.show();
  }

  showChainDrawer() {
    this.hideAllDrawers();
    this.chainDrawer.show();
  }

  getLogo(chain: string) {
    const file =
      this.configService.theme === 'light' && chain === 'METER'
        ? `${chain.toLowerCase()}-light`
        : chain.toLowerCase();
    return `./assets/icons/chains/${file}.svg`;
  }

  checkPinInput(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  formatDate(date: any) {
    if (date > 0) {
      return moment(new Date(date * 1000)).format('MMM Do YYYY, h:mm A');
    } else {
      return 'Expired';
    }
  }
  hideAllDrawers() {
    this.currencyDrawer.hide();
    this.chainDrawer.hide();
    this.alertDrawer.hide();
  }

  showAlerts() {
    this.hideAllDrawers();
    this.alertDrawer.show();
  }

  showAlertContent(id: number | string) {
    const alertInfo = this.alerts.find((i: any) => i.id === id);
    if (alertInfo) {
      Swal.fire({
        html: `<p><h3>${alertInfo.title}</h3></p><hr class="m-4"><p>${alertInfo.content}</p>`,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Close',
      });
      const alertIndex = this.alerts.findIndex((i: any) => i.id === id);
      if (alertIndex >= 0) {
        this.alerts.splice(alertIndex, 1);
      }
    }
  }
}
