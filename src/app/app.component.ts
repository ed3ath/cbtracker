import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  @HostListener('window:beforeunload')
  canDeactivate() {
    window.confirm('WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes.');
  }

  ngOnInit() {
    const importTE = async () => {
      await import('tw-elements');
    };
    importTE();
  }
}
