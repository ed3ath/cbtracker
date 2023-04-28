import { Injectable } from '@angular/core';
import axios from "axios";

import { environment } from '../../environments/environment';

export const HttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  client: any;

  constructor() {
    this.client = axios.create({
      baseURL: environment.apiUrl,
      withCredentials: false
    });
  }

  execute(method: string, resource: string, data: any = undefined, params: any = undefined) {

    return this.client({
      method,
      url: resource,
      data,
      params
    }).then((req: any) => {
      return req.data;
    });
  }

  async checkToken(data: any) {
    return await this.execute(HttpMethod.POST, "/api/players/check", data);
  }

  async createSubscription(data: any) {
    return await this.execute(HttpMethod.POST, "/api/payments/subscribe", data);
  }

  async login(data: any) {
    return await this.execute(HttpMethod.POST, "/api/players/login", data);
  }

  async create(data: any) {
    return await this.execute(HttpMethod.POST, "/api/players/create", data);
  }

  async saveConfig(data: any) {
    return await this.execute(HttpMethod.POST, "/api/players/config", data);
  }

  async getUnreadAlerts(data: any) {
    return await this.execute(HttpMethod.GET, "/api/alerts/unread", null, data);
  }

  async markAlertAsRead(data: any) {
    return await this.execute(HttpMethod.POST, "/api/alerts/read", data);
  }

  async getPaypalClientId() {
    return await this.execute(HttpMethod.GET, "/paypal/clientId");
  }

  async captureOrder(data: any) {
    return await this.execute(HttpMethod.POST, "/api/payments/capture", data);
  }
}
