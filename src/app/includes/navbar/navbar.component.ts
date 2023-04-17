
import { Component, OnInit } from '@angular/core';
import { Drawer, DrawerInterface } from 'flowbite';
import { NavigationEnd, Router } from "@angular/router";

import { Web3Service } from 'src/app/services/web3.service';
import { ConfigService } from 'src/app/services/config.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UtilService } from 'src/app/services/util.service';
import { EventService } from 'src/app/services/event.service';
import { VariableService } from 'src/app/services/variable.service';
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

  constructor(
    private router: Router,
    public web3Service: Web3Service,
    public configService: ConfigService,
    public currencyService: CurrencyService,
    public themeService: ThemeService,
    public utilService: UtilService,
    private eventService: EventService,
    private variableService: VariableService,
    private scriptService: ScriptService
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.page = this.router.url.split('tracker/')[1];
        this.setActivePage(this.page)
        if (this.variableService.adScript) {
          this.variableService.adScript.remove()
        }
        this.variableService.adScript = this.scriptService.loadJsScript(`(function(__htavim){
          var d = document,
              s = d.createElement('script'),
              l = d.scripts[d.scripts.length - 1];
          s.settings = __htavim || {};
          s.src = "\/\/nowhaphopi.com\/d.mPFezadOGUlDtBPS3vpBvfbSmOVkJQZhDi0a0gN\/j\/gE4kMHzwYM1gL\/THQx2\/O\/D\/g\/zcNej-YL";
          l.parentNode.insertBefore(s, l);
          })()`)
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

  ngOnInit(): void {
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
    this.currencyDrawer.show()
  }

  showChainDrawer() {
    this.chainDrawer.show()
  }

  getLogo(chain: string) {
    const file = this.configService.theme === 'light' && chain === 'METER' ? `${chain.toLowerCase()}-light` : chain.toLowerCase()
    return `./assets/icons/chains/${file}.svg`
  }

}
