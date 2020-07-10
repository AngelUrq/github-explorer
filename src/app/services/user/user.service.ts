import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../config/app-config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsersURL: string = '';
  getUserURL: string = '';

  constructor(private _http: HttpClient, private _config: AppConfigService) { 
    this.getUsersURL = this._config.getUsersURL();
    this.getUserURL = this._config.getUserURL();
  }

  getUsers(next: string): Observable<any> {
    if (next) {
      return this._http.get(next, { observe: 'response' });
    } else {
      return this._http.get(this.getUsersURL, { observe: 'response' });
    }
  }

  getUser(username: string): Observable<any> {
    return this._http.get(this.getUserURL + '/' + username);
  }

}
