import { Component, OnInit } from '@angular/core';

import timezones from 'src/app/data/timezone.json'
import languages from 'src/app/data/languages.json'

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  timezones: any[] = []
  languages: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.timezones = timezones
    this.languages = languages
  }

}
