import { Injectable } from '@angular/core';

import axios from 'axios'

import currencies from 'src/app/data/currencies.json';
import coingecko from 'src/app/data/coingecko.json'

import { EventService } from './event.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencies: string[] = []
  coingecko: any

  constructor(
    private eventService: EventService,
    private configService: ConfigService
  ) {
    this.currencies = currencies
    this.coingecko = coingecko
  }

  setActiveCurrency(currency: string) {
    this.configService.currency = currencies.includes(currency) ? currency : 'usd'
    this.configService.saveCurrency()
    this.eventService.publish('currency_changed', currency)
  }

  async loadPrices(chain: string) {
    const tokens = ['cryptoblades', this.coingecko[chain]]
    const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${tokens.join(',')}&vs_currencies=${this.configService.currency}`)
    return {
      gas: res.data[this.coingecko[chain]][this.configService.currency],
      skill: res.data.cryptoblades[this.configService.currency],
      valor: res.data.cryptoblades[this.configService.currency]
    }
  }
}
