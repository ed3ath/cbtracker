import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPayPalModule } from 'ngx-paypal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { TreasuryComponent } from './pages/treasury/treasury.component';
import { OptionsComponent } from './pages/options/options.component';
import { AdsComponent } from './includes/ads/ads.component';
import { AdblockerComponent } from './pages/adblocker/adblocker.component';
import { MarketComponent } from './pages/market/market.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    NavbarComponent,
    SpinnerComponent,
    AccountsComponent,
    TreasuryComponent,
    OptionsComponent,
    AdsComponent,
    AdblockerComponent,
    MarketComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    NgxPayPalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
