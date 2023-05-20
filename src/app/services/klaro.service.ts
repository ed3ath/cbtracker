import { Injectable } from '@angular/core';
import { klaroConfig } from 'src/klaro-config';
import { BehaviorSubject } from 'rxjs';

declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class KlaroService {
  public klaro: any;
  public event$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

  initialize(): void {
    this.klaro = window['klaro'];
    this.klaro.resetManagers();
    this.klaro.setup(klaroConfig(this.event$));
    this.event$.subscribe((e: string) => {
      console.log(e)
    })
  }
}
