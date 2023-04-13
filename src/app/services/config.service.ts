import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  fightMultiplier = 1
  expanded = false
  theme = 'dark'
  currency = 'usd'
  display = false
  chain = 'BNB'
  version = 1
  firstLoad = true
  timezone = 'Etc/GMT+12'
  language = 'en-US'
  rpcUrls: any

  constructor() {
    this.fightMultiplier = this.getFightMultiplier()
    this.expanded = this.getExpanded()
    this.theme = this.getTheme()
    this.currency = this.getCurrency()
    this.display = this.getDisplay()
    this.chain = this.getChain()
    this.version = this.getVersion()
    this.firstLoad = this.getFirstLoad()
    this.timezone = this.getTimezone()
    this.language = this.getLanguage()
    this.rpcUrls = this.getRpcUrls()
  }

  getFightMultiplier() {
    return +(localStorage.getItem('fightMultiplier') || '1')
  }

  saveFightMultiplier() {
    localStorage.setItem('fightMultiplier', `${this.fightMultiplier}`)
  }

  setFightMultiplier(multiplier: number) {
    if (multiplier >= 1 && multiplier <= 5) {
      this.fightMultiplier = multiplier
      this.saveFightMultiplier()
    }
  }

  getActiveGroupIndex() {
    return parseInt(localStorage.getItem('activeGroupIndex') || '0')
  }

  getAllGroups() {
    return JSON.parse(localStorage.getItem('groups') || '[]')
  }

  getAllAccountNames() {
    return JSON.parse(localStorage.getItem('names') || '[]')
  }

  getExpanded() {
    return localStorage.getItem('expanded') === 'true'
  }

  saveExpanded() {
    localStorage.setItem('expanded', `${this.expanded}`)
  }

  getTheme() {
    return localStorage.getItem('theme') || 'dark'
  }

  saveTheme() {
    localStorage.setItem('theme', this.theme)
  }

  getCurrency() {
    return localStorage.getItem('currency') || 'usd'
  }

  saveCurrency() {
    localStorage.setItem('currency', this.currency)
  }

  getDisplay() {
    return localStorage.getItem('display') === 'true'
  }

  saveDisplay() {
    localStorage.setItem('display', `${this.display}`)
  }


  saveChain() {
    localStorage.setItem('chain', this.chain)
  }

  getChain() {
    return localStorage.getItem('chain') || 'BNB'
  }

  saveVersion() {
    localStorage.setItem('version', `${this.version}`)
  }

  getVersion() {
    return +(localStorage.getItem('version') || '1')
  }

  toggleVersion() {
    this.version = this.version === 1 ? 2 : 1
    this.saveVersion()
  }

  getFirstLoad() {
    return localStorage.getItem('firstLoad') === 'true'
  }

  saveFirstLoad() {
    localStorage.setItem('firstLoad', `${this.firstLoad}`)
  }

  getTimezone() {
    return localStorage.getItem('timezone') || 'Etc/GMT+12'
  }

  saveTimezone() {
    localStorage.setItem('timezone', this.timezone)
  }

  getLanguage() {
    return localStorage.getItem('language') || 'en-US'
  }

  saveLanguage() {
    localStorage.setItem('language', this.language)
  }

  getRpcUrls() {
    return JSON.parse(localStorage.getItem('rpcUrls') || '{}')
  }

  saveRpcUrls() {
    localStorage.setItem('rpcUrls', JSON.stringify(this.rpcUrls))
  }
}
