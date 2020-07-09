import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RepoService } from '../../../services/repos/repo.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  repos: Array<any> = [];
  username: string = '';
  page: string = '';

  constructor(private _route: ActivatedRoute, private _router: Router, private _repoService: RepoService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.username = params.username;
      this.page = params.page;
      this.getRepos();
    });
  }

  getRepos(): void {
    this._repoService.get(this.username, this.page).subscribe(
      response => {
        this.repos = response.body;
        // check if last page
      },
      error => {
        console.log(error);
      }
    );
  }

}
