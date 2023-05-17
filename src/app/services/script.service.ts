import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScriptService {

  constructor() { }

  public loadExternalJsScript(id: string, src: string, async = false, target: any = undefined, data: any = undefined, child: any = true): HTMLScriptElement {
    const exist = document.getElementById(id);
    exist?.remove();
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    if (data) {
      Object.keys(data).forEach((attr) => {
        script.setAttribute(attr, data[attr]);
      })
    }
    if (async) {
      script.async = true;
    }
    if (target) {
      if (child) {
        target.appendChild(script, target);
      } else {
        target.parentNode.appendChild(script, target);
      }
    } else {
      document.head.appendChild(script);
    }
    return script;
  }

  public loadJsScript(id: string, text: string, element: any = undefined): HTMLScriptElement | void {
    const exist = document.getElementById(id);
    if (!exist) {
      const script = document.createElement('script');
      script.id = id;
      script.innerText = text;
      script.type = 'text/javascript'
      if (element) {
        element.appendChild(script)
      } else {
        document.head.appendChild(script);
      }
      return script;
    }
  }

  detectAdblocker(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const script = this.loadExternalJsScript('adblocker-script', 'https://app.web3ads.net/main.js', true)
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
    })
  }
}
