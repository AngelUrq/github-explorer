import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';

import { MaterialModule } from '../../../material/material.module';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    
    component.username = 'AngelUrq';
    component.imageURL = 'https://i.stack.imgur.com/frlIf.png';
    component.profileURL = 'https://www.github.com/AngelUrq';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show username as title', () => {
    let element = fixture.nativeElement.querySelector('#username-title');
    
    expect(element.textContent).toBe('AngelUrq');
  });

  it('should render profile picture', () => {
    let element = fixture.nativeElement.querySelector('#profile-picture');

    expect(element).toBeTruthy();
  });

  it('should render explore button', () => {
    let element = fixture.nativeElement.querySelector('#explore-button');

    expect(element).toBeTruthy();
  });

  it('should render GitHub button', () => {
    let element = fixture.nativeElement.querySelector('#github-button');

    expect(element).toBeTruthy();
  });

});
