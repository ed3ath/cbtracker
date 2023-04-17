import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
    if (!Notification) {
      alert(
        "Desktop notifications not available in your browser. Try another browser."
      )
    }
    this.requestPermission()
  }

  notify(title: string, message: string) {
    this.requestPermission()
    new Notification(title, {
      body: message,
    })
  }

  getPermission() {
    return Notification.permission
  }

  requestPermission() {
    if (this.getPermission() !== "granted") Notification.requestPermission()
  }
}
