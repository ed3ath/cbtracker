import { Injectable } from '@angular/core';

import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  subscribed = false
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
  newsAlert = false
  accountAlert = false
  userToken = ''
  configKeys = ['currency', 'rpcUrls', 'display', 'theme', 'activeGroupIndex', 'expanded', 'names', 'chain', 'groups', 'timezone', 'version', 'newsAlert', 'accountAlert']

  constructor(private utilService: UtilService) {
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
    this.newsAlert = this.getNewsAlert()
    this.accountAlert = this.getAccountAlert()
    this.userToken = this.getUserToken()
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
    const list = JSON.parse(localStorage.getItem('groups') || '[]')
    if (!this.subscribed) return list.splice(0, 1)
    return list
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
    return this.subscribed ? JSON.parse(localStorage.getItem('rpcUrls') || '{}') : '{}'
  }

  saveRpcUrls() {
    if (this.subscribed) localStorage.setItem('rpcUrls', JSON.stringify(this.rpcUrls))
  }

  getNewsAlert() {
    return this.subscribed && localStorage.getItem('newsAlert') === 'true'
  }

  saveNewsAlert() {
    if (this.subscribed) localStorage.setItem('newsAlert', `${this.newsAlert}`)
  }

  getAccountAlert() {
    return this.subscribed && localStorage.getItem('accountAlert') === 'true'
  }

  saveAccountAlert() {
    if (this.subscribed) localStorage.setItem('accountAlert', `${this.accountAlert}`)
  }

  getUserToken() {
    return localStorage.getItem('userToken') || ''
  }

  saveUserToken() {
    localStorage.setItem('userToken', this.userToken)
  }

  getAllConfig() {
    const accepted: any = {}
    for (var i = 0; i < localStorage.length; i++) {
      const k: any = localStorage.key(i);
      if (this.configKeys.includes(k)) {
        const v = this.utilService.parseOrNot(localStorage.getItem(k))
        accepted[k] = v
      }
    }
    return accepted
  }

  saveRemoteConfig(config: any) {
    if (this.subscribed && config) {
      this.configKeys.forEach(key => {
        if (config[key]) {
          localStorage.setItem(key, this.utilService.isArrayOrObject(config[key]) ? JSON.stringify(config[key]) : `${config[key]}`)
        }
      })
      localStorage.setItem('firstLoad', 'true')
    }
  }
}
