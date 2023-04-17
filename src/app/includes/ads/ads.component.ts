import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ResponsiveService } from 'src/app/services/responsive.service';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  @Input() provider = 'coinserom'
  @Input() type = '728x90'
  @Input() page = 'home'

  safeUrl!: SafeResourceUrl

  zone: any;

  zones: any = {
    '728x90': {
      id: '88f39f238572423eabecaafa91ab88a5',
      width: 728,
      height: 90
    },
    '300x250': {
      id: 'd4d4478362894383b4ded8c7ded56fc2',
      width: 300,
      height: 250
    },
    '468x60': {
      id: 'd93d4cbd0b7340689d403728633a1142',
      width: 468,
      height: 60
    },
    '250x250': {
      id: 'd04e6c44df2b4b04ae37e3d9d57f8ed6',
      width: 250,
      height: 250
    },
    '160x600': {
      id: '0a450c5cef4a477cabf07d84cea8b8c7',
      width: 160,
      height: 600
    },
    '300x600': {
      id: 'f0ce25d422da4f3d8b11d83afda6b6bb',
      width: 300,
      height: 600
    },
    '970x90': {
      id: 'b589c4164c814e46a31d800c1f83a87b',
      width: 970,
      height: 90
    },
    '750x100': {
      id: 'b959ccc724d34dd6b6d2c7e8bae91a9b',
      width: 750,
      height: 100
    },
    '320x100': {
      id: '473ab1390eff499f9b5fb39bf75735da',
      width: 320,
      height: 100
    },
    '320x50': {
      id: '1c008826686b4ea596fd7257359252af',
      width: 320,
      height: 50
    }
  }
  aAdsZones: any = {
    home: '2202295',
    accounts: '2202296',
    treasury: '2202297',
    options: '2202298'
  }

  constructor(public responsiveService: ResponsiveService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.zone = this.zones[this.type]
    this.responsiveService.screenWidth$.subscribe((width: number) => {
      const rectangles = ['970x90', '728x90', '468x60', '320x50']
      if (width >= 970 && rectangles.includes(this.type) && this.provider !== 'coinserom') {
        this.zone = this.zones['970x90']
      } else if (width >= 728 && rectangles.includes(this.type)) {
        this.zone = this.zones['728x90']
      } else if (width >= 468 && rectangles.includes(this.type)) {
        this.zone = this.zones['468x60']
      } else if (width < 468 && rectangles.includes(this.type)) {
        this.zone = this.zones['320x50']
      }

      if (this.type === '250x250') {
        if (width >= 1280) {
          this.zone = this.zones['250x250']
        } else if (width >= 970) {
          this.zone = this.zones['970x90']
        } else if (width >= 728) {
          this.zone = this.zones['728x90']
        } else if (width >= 468) {
          this.zone = this.zones['468x60']
        } else {
          this.zone = this.zones['320x50']
        }
      }
    })
    if (this.provider) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('//acceptable.a-ads.com/' + this.aAdsZones[this.page])
    }
  }

}
