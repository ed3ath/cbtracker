import { Injectable } from '@angular/core';

import axios from 'axios'
import * as ethers from 'ethers'

import currencies from 'src/app/data/currencies.json';
import coingecko from 'src/app/data/coingecko.json'

import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencies: string[] = []
  coingecko: any
  activeCurrency = 'usd'

  constructor(private eventService: EventService) {
    this.currencies = currencies
    this.coingecko = coingecko
  }

  setActiveCurrency(currency: string) {
    this.activeCurrency = currencies.includes(currency) ? currency : 'usd'
    this.eventService.publish('currency_changed', currency)
  }

  async loadPrices(chain: string) {
    const tokens = ['cryptoblades', this.coingecko[chain]]
    const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${tokens.join(',')}&vs_currencies=${this.activeCurrency}`)
    return {
      gas: res.data[this.coingecko[chain]][this.activeCurrency],
      skill: res.data.cryptoblades[this.activeCurrency],
      valor: chain !== 'BNB' ? 0 : 0
    }
  }
}
