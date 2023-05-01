import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScriptService } from 'src/app/services/script.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-adblocker',
  templateUrl: './adblocker.component.html',
  styleUrls: ['./adblocker.component.css']
})
export class AdblockerComponent implements OnInit {

  constructor(private router: Router, private scriptService: ScriptService, private subService: SubscriptionService) { }

  ngOnInit(): void {
    this.scriptService.detectAdblocker().then(async (res: boolean) => {
      const subscribed = await this.subService.checkToken()
      if (res || subscribed) this.router.navigate(['/tracker/home'])
    })
  }

}
