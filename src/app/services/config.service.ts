import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  fightMultiplier = 1
  expanded = false
  theme = 'dark'
  currency = 'usd'
  display = ''

  constructor() {
    this.fightMultiplier = this.getFightMultiplier()
    this.expanded = this.getExpanded()
    this.theme = this.getTheme()
    this.currency = this.getCurrency()
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
}
