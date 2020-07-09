import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../config/app-config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getURL: string = '';

  constructor(private _http: HttpClient, private _config: AppConfigService) { 
    this.getURL = this._config.getUsersURL();
  }

  get(next: string): Observable<any> {
    if (next) {
      return this._http.get(next, { observe: 'response' });
    } else {
      return this._http.get(this.getURL, { observe: 'response' });
    }
  }

}
