import { Component, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  page = 'home'

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.page = this.router.url.split('tracker/')[1];
      }
    });
  }

  ngOnInit(): void { }

}
