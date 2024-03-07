import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ScriptService } from '../services/script.service';

@Injectable({
  providedIn: 'root'
})
export class AdblockerGuard implements CanActivate {

  constructor(private router: Router, private scriptService: ScriptService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.scriptService.detectAdblocker().then(async res => {
      if (!res) this.router.navigate(['/tracker/adblocker']);
      return res
    })
  }

}
