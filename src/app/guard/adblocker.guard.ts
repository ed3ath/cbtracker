import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ScriptService } from '../services/script.service';
import { SubscriptionService } from '../services/subscription.service';

@Injectable({
  providedIn: 'root'
})
export class AdblockerGuard implements CanActivate {

  constructor(private router: Router, private scriptService: ScriptService, private subService: SubscriptionService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.scriptService.detectAdblocker().then(async res => {
      const subscribed = await this.subService.checkToken()
      if (!res && !subscribed) this.router.navigate(['/tracker/adblocker']);
      return res || subscribed
    })
  }

}
