import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

declare let window: any;

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css'],
})
export class AdsComponent implements OnInit, AfterViewInit {
  @Input() provider = 'coinserom';
  @Input() type = '728x90';
  @Input() dynamic = '728x90';

  safeUrl!: SafeResourceUrl;
  zone: any;
  subscribed = false;

  zones: any = {
    '728x90': {
      id: '2202295',
      width: 728,
      height: 90,
    },
    '970x90': {
      id: '2202296',
      width: 970,
      height: 90,
    },
    '468x60': {
      id: '2202297',
      width: 468,
      height: 60,
    },
    '300x250': {
      id: '2202313',
      width: 300,
      height: 250,
    },
    '250x250': {
      id: '2202314',
      width: 250,
      height: 250,
    },
    '320x50': {
      id: '2202298',
      width: 320,
      height: 50,
    },
  };

  constructor(
    public responsiveService: ResponsiveService,
    public sanitizer: DomSanitizer,
    private subService: SubscriptionService
  ) {
    this.subService.subscription$.subscribe((subscribed) => {
      this.subscribed = subscribed;
      if (!this.subscribed) {
        this.loadAds();
      }
    });
    this.responsiveService.screenWidth$.subscribe((width: number) => {
      const rectangles = ['970x90', '728x90', '468x60', '320x50'];
      if (
        width >= 970 &&
        rectangles.includes(this.type) &&
        this.provider !== 'coinserom' &&
        this.dynamic === '970x90'
      ) {
        this.zone = this.zones['970x90'];
      } else if (
        width >= 728 &&
        rectangles.includes(this.type) &&
        this.dynamic === '728x90'
      ) {
        this.zone = this.zones['728x90'];
      } else if (width >= 468 && rectangles.includes(this.type)) {
        this.zone = this.zones['468x60'];
      } else if (width < 468 && rectangles.includes(this.type)) {
        this.zone = this.zones['320x50'];
      }

      if (this.type === '250x250') {
        if (width >= 1280) {
          this.zone = this.zones['250x250'];
        } else if (width >= 970) {
          this.zone = this.zones['970x90'];
        } else if (width >= 728) {
          this.zone = this.zones['728x90'];
        } else if (width >= 468) {
          this.zone = this.zones['468x60'];
        } else {
          this.zone = this.zones['320x50'];
        }
      }
    });
  }

  ngOnInit() {
    if (!this.subscribed && this.provider == 'a-ads') {
      this.loadAds();
    }
  }

  ngAfterViewInit() {
    if (!this.subscribed && this.provider == 'smartyads') {
      this.loadAds();
    }
  }

  loadAds() {
    this.zone = this.zones[this.type];
    if (this.provider === 'smartyads') {
      var adUnits = [
        {
          code: 'block_827',
          placement_id: 827,
          sizes: [728, 90],
          coppa: 0,
          gdpr: 0,
          us_privacy: '',
          gdpr_consent: '',
        },
      ];
      window.smarty.buildUnits(adUnits);
    }
    if (this.provider === 'a-ads' && this.zone) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `//ad.a-ads.com/${this.zone.id}?size=${this.type}`
      );
    }
  }
}
