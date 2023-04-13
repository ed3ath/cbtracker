import { Component, Input, OnInit } from '@angular/core';

import { ResponsiveService } from 'src/app/services/responsive.service';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  @Input() provider = 'coinserom'
  @Input() type = '728x90'

  zone: any;

  zones: any = {
    '728x90': {
      id: '790de8a419154ae596dc8aee2a95fca3',
      width: 728,
      height: 90
    },
    '300x250': {
      id: '8658ef860f9f4f45ba8c94f86e9a6692',
      width: 300,
      height: 250
    },
    '468x60': {
      id: '5f51530f35a94425a2fc0b331c4d644f',
      width: 468,
      height: 60
    },
    '250x250': {
      id: 'd04e6c44df2b4b04ae37e3d9d57f8ed6',
      width: 250,
      height: 250
    },
    '160x600': {
      id: 'a9f49465453d435bbacd00adbd5884c5',
      width: 160,
      height: 600
    },
    '970x90': {
      id: '4f9e30a14ade4f62b7886f5fb3d9d15f',
      width: 970,
      height: 90
    },
    '750x100': {
      id: '7a06303233c5475e906ca50f542d1a74',
      width: 750,
      height: 100
    },
    '320x100': {
      id: '895cf1fdc6194af49d7ce3d9c9517032',
      width: 320,
      height: 100
    },
    '320x50': {
      id: 'f4009e443caa48e4b91d19260bf5ebb5',
      width: 320,
      height: 50
    }
  }

  constructor(public responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.zone = this.zones[this.type]
    this.responsiveService.screenWidth$.subscribe((width: number) => {
      const rectangles = ['970x90', '728x90', '468x60', '320x50']
      if (width >= 970 && rectangles.includes(this.type)) {
        this.zone = this.zones['970x90']
      } else if(width >= 728 && rectangles.includes(this.type)) {
        this.zone = this.zones['728x90']
      } else if(width >= 468 && rectangles.includes(this.type)) {
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
  }

}
