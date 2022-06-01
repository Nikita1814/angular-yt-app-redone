import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardsPageComponent } from './user-cards-page.component';

describe('UserCardsPageComponent', () => {
  let component: UserCardsPageComponent;
  let fixture: ComponentFixture<UserCardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
