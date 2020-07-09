import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private _http: HttpClient) { }

  loadConfig() {
    return this._http.get('/assets/config/config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      }).catch(error => {
        console.log(error);
      });
  }

  getUsersURL() {
    if (this.appConfig) {
      return this.appConfig.githubAPI.url + this.appConfig.githubAPI.get.users;
    } else {
      return '';
    }
  }

}
