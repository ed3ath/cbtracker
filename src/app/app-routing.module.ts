import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { TreasuryComponent } from './pages/treasury/treasury.component';
import { OptionsComponent } from './pages/options/options.component';

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
      { path: 'home', component: HomeComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'treasury', component: TreasuryComponent },
      { path: 'options', component: OptionsComponent },
      { path: '*', redirectTo: '/home', pathMatch: 'full' },
    ]
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
