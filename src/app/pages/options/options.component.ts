
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

import timezones from 'src/app/data/timezone.json'
import languages from 'src/app/data/languages.json'

import { ConfigService } from 'src/app/services/config.service';
import { ThemeService } from 'src/app/services/theme.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { Web3Service } from 'src/app/services/web3.service';
import { UtilService } from 'src/app/services/util.service';

const keys = ['currency', 'rpcUrls', 'display', 'theme', 'activeGroupIndex', 'expanded', 'names', 'chain', 'groups', 'timezone', 'version']
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
    public web3Service: Web3Service,
    public utilService: UtilService
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
            this.configService.rpcUrls = { ...this.configService.rpcUrls, [chain]: rpcUrl }
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
              keys.forEach(key => {
                if (data[key]) {
                  localStorage.setItem(key, this.utilService.isArrayOrObject(data[key]) ? JSON.stringify(data[key]) : `${data[key]}`)
                }
              })
              localStorage.setItem('firstLoad', 'true')
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
    const a: any = {};
    for (var i = 0; i < localStorage.length; i++) {
      const k: any = localStorage.key(i);
      if (keys.includes(k)) {
        const v = this.utilService.parseOrNot(localStorage.getItem(k))
        a[k] = v;
      }
    }
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
