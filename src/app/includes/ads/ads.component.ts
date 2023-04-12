import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { ScriptService } from 'src/app/services/script.service';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit, AfterViewInit, OnDestroy {
  zones = {
    '970x90': {
      desktop: '63780c0b3c0a9f5c7b6bdf3c',
      mobile: '63780c0b3c0a9f5c7b6bdf3c'
    },
    '728x90': {
      desktop: '63778cb199a182518a5e8804',
      mobile: '63778cb199a182518a5e8804'
    },
    '300x250':
    {
      desktop: '63778ce599a182518a5e886a',
      mobile: '63778ce599a182518a5e886a'
    },
    '300x600': {
      desktop: '6435ec1446ab30ef2817e541',
      mobile: '6435ec1446ab30ef2817e541'
    },
    '468x60': {
      desktop: '63780cc6484f9641cff418b8',
      mobile: '63780cc6484f9641cff418b8'
    },
    '320x50': {
      desktop: '6435ec35d59ed4301ab4d8c8',
      mobile: '6435ec35d59ed4301ab4d8c8'
    },
    '250x250': {
      desktop: '6435ee76a9ce34cf0a8de990',
      mobile: '6435ee76a9ce34cf0a8de990'
    }
  } as any

  @Input() type = ''
  @Input() device = 'desktop'
  scriptAds!: Element
  zone: any
  height = ''
  width = ''

  @ViewChild('banner', { read: ElementRef }) banner!: ElementRef;

  constructor(
    private script: ScriptService,
    public responsiveService: ResponsiveService
  ) { }

  ngOnInit(): void {
    this.zone = this.zones[this.type] ? this.zones[this.type][this.device] : undefined
    const dimension = this.extractDimension(this.type)
    this.width = dimension[0]
    this.height = dimension[1]
    this.responsiveService.screenWidth$.subscribe((width: number) => {
      if (this.type === '970x90' || this.type === '728x90' || this.type === '320x50') {
        if (width >= 970) {
          this.zone = this.zones['970x90'][this.device]
          this.width = '970'
          this.height = '90'
        } else if (width >= 728) {
          this.zone = this.zones['728x90'][this.device]
          this.width = '728'
          this.height = '90'
        } else {
          this.zone = this.zones['320x50'][this.device]
          this.width = '320'
          this.height = '50'
        }
        this.loadAds()
      }
    })
  }

  ngOnDestroy(): void {
    if (this.banner) {
      document.querySelectorAll('script[src*=cdn\\.bmcdn4]').forEach((el) => {
        el.remove()
      })
      if (this.scriptAds) {
        this.scriptAds.remove()
      }
    }
  }

  ngAfterViewInit() {
    this.loadAds()
  }

  extractDimension(type: string) {
    return type.split('x')
  }

  getDimension(type: string) {
    const dimension = this.extractDimension(type)
    return `w-[${dimension[0]}px] h-[${dimension[1]}px]`
  }

  loadAds() {
    if (this.banner) {
      document.querySelectorAll('script[src*=cdn\\.bmcdn4]').forEach((el) => {
        el.remove()
      })
      if (this.scriptAds) {
        this.scriptAds.remove()
      }

      setTimeout(() => {
        this.scriptAds = this.script.loadJsScript(
          `!function(e,n,c,t,o,r,d){!function e(n,c,t,o,r,m,d,s,a){s=c.getElementsByTagName(t)[0],(a=c.createElement(t)).async=!0,a.src="https://"+r[m]+"/js/"+o+".js?v="+d,a.onerror=function(){a.remove(),(m+=1)>=r.length||e(n,c,t,o,r,m)},s.parentNode.insertBefore(a,s)}(window,document,"script","${this.zone}",["cdn.bmcdn4.com"], 0, new Date().getTime())}();`,
          this.banner.nativeElement)
      }, 3000)
    }
  }

}
