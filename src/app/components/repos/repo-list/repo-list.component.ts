import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RepoService } from '../../../services/repos/repo.service';
import { UserService } from '../../../services/user/user.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  repos: Array<any> = [];
  username: string = '';
  page: number = 1;
  totalCount: number = 0;

  constructor(private _route: ActivatedRoute, private _router: Router, private _repoService: RepoService, private _userService: UserService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.username = params.username;
      this.page = parseInt(params.page);

      this.loadData();
    });
  }

  loadData(): void {
    if (this.isInCache()) {
      let data = JSON.parse(localStorage.getItem(this.username));

      this.repos = data.repos;
      this.totalCount = data.totalCount;
    } else {
      this.getNumberRepos();
      this.getRepos();
    }
  }

  getNumberRepos(): void {
    this._userService.getUser(this.username).subscribe(
      response => {
        this.totalCount = response.public_repos;
      },
      error => {
        console.log(error);
      }
    );
  }

  getRepos(): void {
    console.log('getting from api');
    this._repoService.get(this.username, this.page.toString()).subscribe(
      response => {
        this.repos = response.body;
        this.saveCache();
      },
      error => {
        console.log(error);
      }
    );
  }

  isInCache(): boolean {
    let data = JSON.parse(localStorage.getItem(this.username));

    if (data) {
      let now = new Date();
      let savedDate = new Date(data.date);

      let difference = now.valueOf() - savedDate.valueOf();
      let minutes = Math.round(((difference % 86400000) % 3600000) / 60000);

      return minutes <= 120 && data.page === this.page;
    }

    return false;
  }

  changePage(pageEvent: PageEvent): void {
    this.page = pageEvent.pageIndex + 1;
    this._router.navigateByUrl('repos/' + this.username + '/' + this.page);
    this.getRepos();
  }

  saveCache(): void {
    let data = {
      repos: this.repos,
      date: new Date().toJSON(),
      page: this.page,
      totalCount: this.totalCount
    };

    localStorage.setItem(this.username, JSON.stringify(data));
  }

}
