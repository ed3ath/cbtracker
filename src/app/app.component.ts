import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  @HostListener('window:beforeunload')
  canDeactivate() {}

  ngOnInit() {
    const importTE = async () => {
      await import('tw-elements');
    };
    importTE();
  }
}
