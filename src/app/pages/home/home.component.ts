import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { EventService } from 'src/app/services/event.service';
import { Web3Service } from 'src/app/services/web3.service';
import { GroupService } from 'src/app/services/group.service';
import { ConfigService } from 'src/app/services/config.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { UtilService } from 'src/app/services/util.service';
import { ComponentCanDeactivate } from 'src/app/guard/deactivate.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent
  implements OnInit, OnDestroy, ComponentCanDeactivate
{
  isLoading = true;
  isLoadingCurrency = true;
  isGen2 = false;
  accounts: any[] = [];
  partners: any[] = [];

  nfts = {
    characters: 0,
    weapons: 0,
    shields: 0,
  };

  prices = {
    gas: 0,
    skill: 0,
    valor: 0,
  };

  balances = {
    gas: 0,
    wallet: 0,
    unclaimed: 0,
    claimable: 0,
  };

  constructor(
    private eventService: EventService,
    public web3Service: Web3Service,
    public groupService: GroupService,
    public configService: ConfigService,
    public currencyService: CurrencyService,
    public utilService: UtilService
  ) {
    this.accounts = this.groupService.getActiveGroupAccounts();
  }

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    this.configService.firstLoad = true;
    this.configService.saveFirstLoad();
    return true;
  }

  default() {
    this.nfts = {
      characters: 0,
      weapons: 0,
      shields: 0,
    };

    this.prices = {
      gas: 0,
      skill: 0,
      valor: 0,
    };

    this.balances = {
      gas: 0,
      wallet: 0,
      unclaimed: 0,
      claimable: 0,
    };
  }

  ngOnInit(): void {
    this.default();
    this.loadData();
    this.eventService.subscribe('chain_changed', () => {
      this.loadData();
    });
    this.eventService.subscribe('currency_changed', () => {
      this.loadPrices();
    });
    this.eventService.subscribe('version_changed', () => {
      this.loadBalances();
    });
  }

  ngOnDestroy(): void {
    this.eventService.destroy('currency_changed');
    this.eventService.destroy('chain_changed');
    this.eventService.destroy('version_changed');
  }

  formatPrice(val: number) {
    return val.toLocaleString('en-US', {
      style: 'currency',
      currency: this.configService.currency.toUpperCase(),
    });
  }

  formatNumber(val: number, decimal = 4) {
    return val.toLocaleString('en-US', { minimumFractionDigits: decimal });
  }

  async loadData() {
    const time = new Date().getTime();
    this.isLoading = true;

    if (this.accounts.length > 0) {
      this.nfts.characters = [
        ...(await this.web3Service.multicall(
          this.web3Service.getBatchCallData(
            this.web3Service.abis['characters'],
            this.web3Service.getOtherContractAddress('characters'),
            this.accounts.map((account: string) => ({
              name: 'balanceOf',
              params: [account],
            }))
          )
        )),
      ].reduce((a: number, b: any) => a + this.utilService.bnToNumber(b), 0);
      this.nfts.weapons = [
        ...(await this.web3Service.multicall(
          this.web3Service.getBatchCallData(
            this.web3Service.abis['weapons'],
            this.web3Service.getOtherContractAddress('weapons'),
            this.accounts.map((account: string) => ({
              name: 'balanceOf',
              params: [account],
            }))
          )
        )),
      ].reduce((a: number, b: any) => a + this.utilService.bnToNumber(b), 0);
      this.nfts.shields = [
        ...(await this.web3Service.multicall(
          this.web3Service.getBatchCallData(
            this.web3Service.abis['shields'],
            this.web3Service.getOtherContractAddress('shields'),
            this.accounts.map((account: string) => ({
              name: 'balanceOf',
              params: [account],
            }))
          )
        )),
      ].reduce((a: number, b: any) => a + this.utilService.bnToNumber(b), 0);
    }
    await this.loadPrices();
    await this.loadBalances();
    this.isLoading = false;
    console.log('Took', new Date().getTime() - time, 'ms to load.');
  }

  async loadPrices() {
    this.isLoadingCurrency = true;
    this.prices = {
      gas: 0,
      skill: 0,
      valor: 0,
    };
    this.prices = await this.currencyService.loadPrices(
      this.configService.chain
    );
    this.isLoadingCurrency = false;
  }

  async loadBalances() {
    if (this.accounts.length > 0) {
      this.isLoading = true;
      const { ratio, balances }: any =
        await this.web3Service.getAccountBalances(
          this.accounts,
          this.configService.version === 2
        );
      this.prices.valor = ratio * this.prices.valor;
      this.balances.gas = balances.reduce((a: number, b: any) => a + +b.gas, 0);
      this.balances.wallet = balances.reduce(
        (a: number, b: any) => a + b.wallet,
        0
      );
      this.balances.unclaimed = balances.reduce(
        (a: number, b: any) => a + b.unclaimed,
        0
      );
      this.balances.claimable = balances.reduce(
        (a: number, b: any) => a + b.claimable,
        0
      );
      this.isLoading = false;
    }
  }
}
