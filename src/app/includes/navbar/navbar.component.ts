
import { Component, OnInit } from '@angular/core';
import { Drawer, DrawerInterface } from 'flowbite';
import { NavigationEnd, Router } from "@angular/router";

import { Web3Service } from 'src/app/services/web3.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { ThemeService } from 'src/app/services/theme.service';

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

  constructor(private router: Router, public web3Service: Web3Service, public currencyService: CurrencyService, public themeService: ThemeService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.page = this.router.url.split('tracker/')[1];
        this.setActivePage(this.page)
      }
    });
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  setActivePage(page: string) {
    const list = document.querySelectorAll('a.block.py-2.pl-3.pr-4.rounded')
    const e = document.querySelector(`a[routerLink="/tracker/${page}"]`)
    list.forEach(el => {
      el.className = 'block py-2 pl-3 pr-4 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
    })
    if (e) {
      e.className = 'block py-2 pl-3 pr-4 text-white md:p-0 dark:text-white rounded bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
    }
  }

  ngOnInit(): void {
    this.currencyDrawer = new Drawer (document.getElementById('currency-menu'), {
      placement: 'right',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    });
    this.chainDrawer = new Drawer (document.getElementById('chain-menu'), {
      placement: 'right',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    });
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
    const file = this.theme === 'light' && chain === 'METER' ?  `${chain.toLowerCase()}-light` : chain.toLowerCase()
    return `./assets/icons/chains/${file}.svg`
  }

}
