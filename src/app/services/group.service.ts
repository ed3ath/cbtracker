import { Injectable } from '@angular/core';
import * as ethers from 'ethers'

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService {

  constructor(private configService: ConfigService) {

  }

  getGroupName(index: number) {
    const groups = this.configService.getAllGroups()
    return groups[index]?.name
  }

  getGroupAccounts(index: number) {
    const groups = this.configService.getAllGroups()
    return groups[index]?.accounts || []
  }

  getActiveGroupName() {
    return this.getGroupName(this.configService.getActiveGroupIndex())
  }

  getActiveGroupAccounts() {
    return this.getGroupAccounts(this.configService.getActiveGroupIndex())
  }

  setGroups(groups: any) {
    localStorage.setItem('groups', JSON.stringify(groups))
  }

  setActiveGroupIndex(index: number) {
    const groups = this.configService.getAllGroups()
    if (index >= 0 && index < groups.length) {
      localStorage.setItem('activeGroupIndex', `${index}`)
    }
  }

  importOldAccounts() {
    const oldAccounts = JSON.parse(localStorage.getItem('accounts') || '[]')
    const names = this.configService.getAllAccountNames()
    if (oldAccounts.length > 0 && this.configService.getAllGroups().length > 0) {
      oldAccounts.forEach((account: string, i: number) => {
        this.addGroupAccount(names[i] ? names[i] : `Unnamed ${i+1}`, account)
      })
    }
  }

  newGroup(name: string) {
    const groups = this.configService.getAllGroups()
    if (groups.find((i: any) => i.name === name)) {
      return -1
    } else {
      groups.push({
        name,
        accounts: []
      })
      this.setGroups(groups)
      return groups.length - 1
    }
  }

  setActiveGroupName(name: string) {
    const groups = this.configService.getAllGroups()
    groups[this.configService.getActiveGroupIndex()].name = name
    this.setGroups(groups)
  }

  setActiveGroupAccounts(accounts: string[]) {
    const groups = this.configService.getAllGroups()
    groups[this.configService.getActiveGroupIndex()].accounts = accounts
    this.setGroups(groups)
  }

  setAccountNames(names: any) {
    localStorage.setItem('names', JSON.stringify(names))
  }

  checkAccountNameExists(name: string) {
    const names = this.configService.getAllAccountNames()
    return Object.keys(names).find(i => names[i] === name) ? true : false
  }

  checkAccountAddressExists(address: string) {
    const accounts = this.getActiveGroupAccounts()
    return accounts.includes(ethers.utils.getAddress(address))
  }

  setAccountName(name: string, address: string) {
    const names = this.configService.getAllAccountNames()
    this.setAccountNames({...names, [address]: name})
  }

  deleteActiveGroup() {
    const groups = this.configService.getAllGroups()
    groups.splice(this.configService.getActiveGroupIndex(), 1)
    this.setActiveGroupIndex(groups.length - 1)
    this.setGroups(groups)
  }

  isValidAddress(address: string) {
    return ethers.utils.isAddress(address)
  }

  addGroupAccount(name: string, address: string) {
    if (this.isValidAddress(address) && !this.checkAccountNameExists(name) && !this.checkAccountAddressExists(address)) {
      const accounts = this.getActiveGroupAccounts()
      accounts.push(ethers.utils.getAddress(address))
      this.setActiveGroupAccounts(accounts)
      this.setAccountName(name, address)
    }
  }

  getAccountName(address: string) {
    return this.configService.getAllAccountNames()[address] ? this.configService.getAllAccountNames()[address] : ''
  }

  deleteAccount(address: string) {
    const accounts = this.getActiveGroupAccounts()
    const names = this.configService.getAllAccountNames()
    accounts.splice(accounts.indexOf(address), 1)
    delete names[address]
    this.setActiveGroupAccounts(accounts)
    this.setAccountNames(names)
  }

}
