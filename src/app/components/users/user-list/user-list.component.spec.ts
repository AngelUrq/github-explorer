import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    
    component = fixture.componentInstance;
    component.users = [
      {
        'avatar_url': 'https://avatars0.githubusercontent.com/u/2?v=4',
        'html_url': 'https://github.com/defunkt',
        'login': 'defunkt'
      },
      {
        'avatar_url': 'https://avatars0.githubusercontent.com/u/2?v=4',
        'html_url': 'https://github.com/mojombo',
        'login': 'mojombo'
      },
      {
        'avatar_url': 'https://avatars0.githubusercontent.com/u/2?v=4',
        'html_url': 'https://github.com/wycats',
        'login': 'wycats'
      },
      {
        'avatar_url': 'https://avatars0.githubusercontent.com/u/2?v=4',
        'html_url': 'https://github.com/pjhyett',
        'login': 'pjhyett'
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 user cards with username as id', () => {
    for (let user of component.users) {
      let element = fixture.nativeElement.querySelector('#' + user['login']);
      expect(element).toBeTruthy();
    }
  });

  it('should get next page of users', () => {
    const link = '<https://api.github.com/users?per_page=4&since=4>; rel="next", <https://api.github.com/users{?since}>; rel="first"'
    const next = component.getNext(link);

    expect(next).toBe('https://api.github.com/users?per_page=4&since=4');
  });
});
