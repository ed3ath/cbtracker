import { Injectable } from '@angular/core';

import { ConfigService } from './config.service';
import { ApiService } from './api.service';
import { UtilService } from './util.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  user = ''
  expiry = 0
  public subscription$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private configService: ConfigService,
    private apiService: ApiService,
    private utilService: UtilService
  ) {
    this.checkToken()
  }

  async checkToken() {
    if (this.configService.userToken) {
      const res = await this.apiService.checkToken({
        token: this.configService.userToken
      })
      if (res.success) {
        this.configService.configKeys.forEach(key => {
          if (res.config && res.config[key]) {
            localStorage.setItem(key, this.utilService.isArrayOrObject(res.config[key]) ? JSON.stringify(res.config[key]) : `${res.config[key]}`)
          }
        })
        this.configService.subscribed = res.success
        this.user = res.data.user
        this.expiry = +res.data.expiry
        if (res.data.token) {
          this.configService.userToken = res.data.token
          this.configService.saveUserToken()
        }
        this.subscription$.next(this.configService.subscribed)
        return res.success
      } else {
        this.configService.subscribed = false
        this.subscription$.next(false)
        return false
      }
    }
  }
}
