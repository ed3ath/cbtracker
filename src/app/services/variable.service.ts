import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  // account page
  activeGroupIndex = 0
  groups: any[] = []
  accountChars: any[] = []
  accountBalances: any[] = []
  repRequirements: any
  readyToFight: any[] = []

  constructor() { }
}
