import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { AppConfigService } from '../../../services/config/app-config.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<object> = [];
  next: string = '';

  constructor(private _userService: UserService, private _config: AppConfigService) { }

  ngOnInit(): void {
    this.getUsers();
    this.next = this._config.getUsersURL();
  }

  getUsers(): void {
    this._userService.get(this.next).subscribe(
      response => {
        this.users = response.body;

        if (response.headers.get('link')) {
          this.next = this.getNext(response.headers.get('link'));
        } else {
          this.next = '';
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getNext(link: string): string{
    let next: string = '';

    let links: Array<string> = link.split(',');
    next = links.find(str => str.indexOf('rel="next"') > -1);
    
    if (next) next = next.substring(next.lastIndexOf('<')+1, next.lastIndexOf('>'));

    return next;
  }

}
