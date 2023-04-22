import { Component, OnInit } from '@angular/core';

import { NavigationEnd } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  page = 'home'

  constructor(public configService: ConfigService) {}

  ngOnInit(): void { }

}
