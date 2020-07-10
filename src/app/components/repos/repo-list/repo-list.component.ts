import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

      this.getNumberRepos();
      this.getRepos();
    });
  }

  getNumberRepos(): void {
    this._userService.getUser(this.username).subscribe(
      response => {
        this.totalCount = response.public_repos;
        console.log(this.totalCount);
      },
      error => {
        console.log(error);
      }
    );
  }

  getRepos(): void {
    this._repoService.get(this.username, this.page.toString()).subscribe(
      response => {
        this.repos = response.body;
      },
      error => {
        console.log(error);
      }
    );
  }

  changePage(pageEvent: PageEvent): void {
    this.page = pageEvent.pageIndex + 1;
    this._router.navigateByUrl('repos/' + this.username + '/' + this.page);
    this.getRepos();
  }

}
