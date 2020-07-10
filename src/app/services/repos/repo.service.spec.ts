import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RepoService } from './repo.service';

describe('RepoServiceService', () => {
  let service: RepoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepoService]
    });

    service = TestBed.get(RepoService);
    service.getURL = "https://api.github.com/users/AngelUrq/repos?per_page=4&page=1";
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve 4 repos from the API via GET', () => {
    const repos =  [
      { 'id': '5436534653' },
      { 'id': '5643643654' },
      { 'id': '5675676554' },
      { 'id': '2354453454' }
    ];

    service.get('AngelUrq', '1').subscribe(response => {
      expect(response.body.length).toBe(4);
    });

    const request = httpTestingController.expectOne(`${service.getURL}`);

    expect(request.request.method).toBe('GET');

    request.flush(repos);
  });
});
