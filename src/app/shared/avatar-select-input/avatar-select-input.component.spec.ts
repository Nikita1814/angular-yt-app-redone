import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSelectInputComponent } from './avatar-select-input.component';

describe('AvatarSelectInputComponent', () => {
  let component: AvatarSelectInputComponent;
  let fixture: ComponentFixture<AvatarSelectInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarSelectInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
