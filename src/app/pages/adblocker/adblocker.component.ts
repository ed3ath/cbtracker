import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-adblocker',
  templateUrl: './adblocker.component.html',
  styleUrls: ['./adblocker.component.css']
})
export class AdblockerComponent implements OnInit {

  constructor(private router: Router, private scriptService: ScriptService) { }

  ngOnInit(): void {
    this.scriptService.detectAdblocker().then(async (res: boolean) => {
      if (res) this.router.navigate(['/tracker/home'])
    })
  }

}
