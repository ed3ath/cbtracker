
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

import timezones from 'src/app/data/timezone.json'
import languages from 'src/app/data/languages.json'

import { ConfigService } from 'src/app/services/config.service';
import { ThemeService } from 'src/app/services/theme.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { Web3Service } from 'src/app/services/web3.service';
import { UtilService } from 'src/app/services/util.service';
import { EventService } from 'src/app/services/event.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ApiService } from 'src/app/services/api.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

import { ComponentCanDeactivate } from 'src/app/guard/deactivate.guard';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, ComponentCanDeactivate {
  timezones: any[] = []
  languages: any[] = []
  subscribed = false

  constructor(
    public configService: ConfigService,
    public themeService: ThemeService,
    public currencyService: CurrencyService,
    public web3Service: Web3Service,
    public utilService: UtilService,
    private eventService: EventService,
    private notifService: NotificationService,
    private apiService: ApiService,
    private subService: SubscriptionService
  ) { }

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    this.configService.firstLoad = true
    this.configService.saveFirstLoad()
    return true
  }

  ngOnInit(): void {
    this.timezones = timezones
    this.languages = languages
    this.subService.subscription$.subscribe((subscribed) => {
      this.subscribed = subscribed
      this.configService.subscribed = subscribed
    })
  }

  async toggleDisplay() {
    this.configService.display = !this.configService.display
    this.configService.saveDisplay()
    await this.configService.updateRemoteConfig(this.apiService)
  }

  async setCurrency(event: any) {
    this.currencyService.setActiveCurrency(event.target ? event.target.value : this.configService.currency)
    await this.configService.updateRemoteConfig(this.apiService)
  }

  async setChain(event: any) {
    this.web3Service.setActiveChain(event.target ? event.target.value : this.configService.chain)
    await this.configService.updateRemoteConfig(this.apiService)
  }

  async setTimezone(event: any) {
    this.configService.timezone = event.target ? event.target.value : this.configService.timezone
    this.configService.saveTimezone()
    await this.configService.updateRemoteConfig(this.apiService)
  }

  async setLanguage(event: any) {
    this.configService.language = event.target ? event.target.value : this.configService.language
    this.configService.saveLanguage()
    await this.configService.updateRemoteConfig(this.apiService)
  }

  async setFightMultiplier(event: any) {
    this.eventService.publish('multiplier_changed', +event.target.value)
    this.configService.setFightMultiplier(event.target ? +event.target.value : this.configService.fightMultiplier)
    await this.configService.updateRemoteConfig(this.apiService)
  }

  async toggleNewsAlert() {
    if (this.subscribed) {
      this.configService.newsAlert = !this.configService.newsAlert
      this.configService.saveNewsAlert()
      await this.configService.updateRemoteConfig(this.apiService)
      if (this.configService.newsAlert && this.notifService.getPermission() !== "granted") {
        this.notifService.requestPermission()
      }
    }
  }

  async toggleAccountAlert() {
    if (this.subscribed) {
      this.configService.accountAlert = !this.configService.accountAlert
      this.configService.saveAccountAlert()
      await this.configService.updateRemoteConfig(this.apiService)
      if (this.configService.accountAlert && this.notifService.getPermission() !== "granted") {
        this.notifService.requestPermission()
      }
    }
  }

  async setRpcUrl(event: any) {
    if (event.target && this.subscribed) {
      const rpcUrl = event.target.value
      const chain = event.target.dataset.chain
      this.web3Service.getNetwork(rpcUrl).then(async (networkId: any) => {
        if (+networkId.toString() > 0) {
          if (+networkId.toString() === +this.web3Service.getNetworkId(chain)) {
            this.configService.rpcUrls = { ...this.configService.rpcUrls, [chain]: rpcUrl }
            this.configService.saveRpcUrls()
            await this.configService.updateRemoteConfig(this.apiService)
          } else {
            Swal.fire('', `Mismatch network Id. RPC URL provided returns ${networkId}. Require: ${this.web3Service.getNetworkId(chain)}`, 'error')
          }
        } else {
          Swal.fire('', `${rpcUrl} is not a valid rpc`, 'error')
        }
      })
    }
  }

  showImport() {
    Swal.fire({
      title: '',
      html: 'Import your data',
      input: 'file',
      showCancelButton: true,
      inputAttributes: {
        'accept': '.json',
        'aria-label': 'Upload your JSON file'
      }
    }).then((response) => {
      if (response.isConfirmed) {
        if (response.value && response.value.type === 'application/json') {
          let fileReader = new FileReader();
          fileReader.onload = async () => {
            const res = fileReader.result
            if (res && this.utilService.isValidJson(res.toString())) {
              const data = JSON.parse(res.toString())
              const accepted: any = {}
              this.configService.configKeys.forEach(key => {
                if (data[key]) {
                  localStorage.setItem(key, this.utilService.isArrayOrObject(data[key]) ? JSON.stringify(data[key]) : `${data[key]}`)
                  accepted[key] = data[key]
                }
              })
              localStorage.setItem('firstLoad', 'true')
              if (this.subscribed) {
                await this.apiService.saveConfig({
                  token: this.configService.userToken,
                  config: accepted
                })
              }
              Swal.fire('', 'Data successfully imported', 'success')
            }
          }
          fileReader.readAsText(response.value);
        }
      }
    })
  }

  exportData() {
    const fileName = `CBTracker-V2-${new Date().getTime()}.json`
    const a = this.configService.getAllConfig()
    const textToSave = JSON.stringify(a)
    const textToSaveAsBlob = new Blob([textToSave], {
      type: "text/plain"
    });
    const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    const downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

}
