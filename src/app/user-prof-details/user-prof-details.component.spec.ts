import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfDetailsComponent } from './user-prof-details.component';

describe('UserProfDetailsComponent', () => {
  let component: UserProfDetailsComponent;
  let fixture: ComponentFixture<UserProfDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
