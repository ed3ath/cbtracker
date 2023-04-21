import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { TreasuryComponent } from './pages/treasury/treasury.component';
import { MarketComponent } from './pages/market/market.component';
import { OptionsComponent } from './pages/options/options.component';
import { AdblockerComponent } from './pages/adblocker/adblocker.component';

import { AdblockerGuard } from './guard/adblocker.guard';
import { DeactivateGuard } from './guard/deactivate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tracker/home',
    pathMatch: 'full'
  },
  {
    path: 'tracker',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [AdblockerGuard] },
      { path: 'accounts', component: AccountsComponent, canActivate: [AdblockerGuard] },
      { path: 'treasury', component: TreasuryComponent, canActivate: [AdblockerGuard] },
      { path: 'market', component: MarketComponent, canActivate: [AdblockerGuard] },
      { path: 'options', component: OptionsComponent, canActivate: [AdblockerGuard] },
      { path: 'adblocker', component: AdblockerComponent},
      { path: '*', redirectTo: '/home', pathMatch: 'full' },
    ],
    canDeactivate: [DeactivateGuard]
  },
  {
    path: '*',
    redirectTo: '/tracker/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
