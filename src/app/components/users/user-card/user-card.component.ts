import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() username: string = '';
  @Input() profileURL: string = '';
  @Input() imageURL: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  openGitHub(): void {
    window.open(this.profileURL, '_blank');
  }

}
