import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../config/app-config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  getURL: string = '';

  constructor(private _http: HttpClient, private _config: AppConfigService) { }

  get(username: string, page: string): Observable<any> {
    this.getURL = this._config.getReposURL(username, page);

    return this._http.get(this.getURL, { observe: 'response' });
  }

}
