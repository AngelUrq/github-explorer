import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

import { RepoListComponent } from './repo-list.component';

import { MaterialModule } from '../../../material/material.module';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoListComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    
    component = fixture.componentInstance;
    component.repos = [
      { 'name': 'auto_migrations' },
      { 'name': 'blackjaxcode' },
      { 'name': 'errcountcode' },
      { 'name': 'git-server' }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 repo cards with id', () => {
    for (let repo of component.repos) {
      let element = fixture.nativeElement.querySelector('#' + repo['name']);
      expect(element).toBeTruthy();
    }
  });
});
