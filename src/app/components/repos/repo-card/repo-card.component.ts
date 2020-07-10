import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {

  @Input() name: string = '';
  @Input() url: string = '';
  @Input() description: string = '';
  @Input() forks: number = 0;
  @Input() openIssues: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
