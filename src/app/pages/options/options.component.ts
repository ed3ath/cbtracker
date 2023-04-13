
import { Component, OnInit } from '@angular/core';

import timezones from 'src/app/data/timezone.json'
import languages from 'src/app/data/languages.json'

import { ConfigService } from 'src/app/services/config.service';
import { ThemeService } from 'src/app/services/theme.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { Web3Service } from 'src/app/services/web3.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  timezones: any[] = []
  languages: any[] = []

  constructor(
    public configService: ConfigService,
    public themeService: ThemeService,
    public currencyService: CurrencyService,
    public web3Service: Web3Service
    ) { }

  ngOnInit(): void {
    this.timezones = timezones
    this.languages = languages
  }

  toggleDisplay() {
    this.configService.display = !this.configService.display
    this.configService.saveDisplay()
  }

  setCurrency(event: any) {
    this.currencyService.setActiveCurrency(event.target ? event.target.value : this.configService.currency)
  }

  setChain(event: any) {
    this.web3Service.setActiveChain(event.target ? event.target.value : this.configService.chain)
  }

  setTimezone(event: any) {
    this.configService.timezone = event.target ? event.target.value : this.configService.timezone
    this.configService.saveTimezone()
  }

  setLanguage(event: any) {
    this.configService.language = event.target ? event.target.value : this.configService.language
    this.configService.saveLanguage()
  }

  setRpcUrl(event: any) {
    if (event.target) {
      const rpcUrl = event.target.value
      const chain = event.target.dataset.chain
      this.web3Service.getNetwork(rpcUrl).then((networkId: number) => {
        if (networkId > 0) {
          if (networkId === this.web3Service.getNetworkId(chain)) {
            this.configService.rpcUrls = {...this.configService.rpcUrls, [chain]: rpcUrl}
            this.configService.saveRpcUrls()
          } else {
            Swal.fire('', `Mismatch network Id. RPC URL provided returns ${networkId}. Require: ${this.web3Service.getNetworkId(chain)}`, 'error')
          }
        } else {
          Swal.fire('', `${rpcUrl} is not a valid rpc`, 'error')
        }
      })
    }
  }

}
