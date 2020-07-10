import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<object> = [];
  next: string = '';

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    if (this.isInCache()) {
      let data = JSON.parse(localStorage.getItem('users'));

      this.users = data.users;
      this.next = data.next;
    } else {
      this.getUsers();
    }
  }

  getUsers(): void {
    this._userService.getUsers(this.next).subscribe(
      response => {
        this.users = response.body;
  
        if (response.headers.get('link')) {
          this.next = this.getNext(response.headers.get('link'));
        } else {
          this.next = '';
        }
  
        this.saveCache();
      },
      error => {
        console.log(error);
      }
    );
  }

  isInCache(): boolean {
    let data = JSON.parse(localStorage.getItem('users'));

    if (data) {
      let now = new Date();
      let savedDate = new Date(data.date);

      let difference = now.valueOf() - savedDate.valueOf();
      let minutes = Math.round(((difference % 86400000) % 3600000) / 60000);

      return minutes <= 120;
    }

    return false;
  }

  getNext(link: string): string {
    let next: string = '';

    let links: Array<string> = link.split(',');
    next = links.find(str => str.indexOf('rel="next"') > -1);
    
    if (next) next = next.substring(next.lastIndexOf('<') + 1, next.lastIndexOf('>'));

    return next;
  }

  saveCache(): void {
    let data = {
      users: this.users,
      date: new Date().toJSON(),
      next: this.next
    };

    localStorage.setItem('users', JSON.stringify(data));
  }

}
