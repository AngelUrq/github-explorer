import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.get(UserService);
    service.getUsersURL = "https://api.github.com/users?per_page=4";
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve 4 users from the API via GET', () => {
    const users =  [
      { 'login': 'defunkt' },
      { 'login': 'mojombo' },
      { 'login': 'wycats' },
      { 'login': 'pjhyett' }
    ];

    service.getUsers('').subscribe(response => {
      expect(response.body.length).toBe(4);
    });

    const request = httpTestingController.expectOne(`${service.getUsersURL}`);

    expect(request.request.method).toBe('GET');

    request.flush(users);
  });

});
