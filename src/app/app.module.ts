import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { TreasuryComponent } from './pages/treasury/treasury.component';
import { AdsComponent } from './includes/ads/ads.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    NavbarComponent,
    SpinnerComponent,
    AccountsComponent,
    TreasuryComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
