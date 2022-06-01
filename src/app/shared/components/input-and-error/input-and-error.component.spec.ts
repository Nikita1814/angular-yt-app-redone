import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAndErrorComponent } from './input-and-error.component';

describe('InputAndErrorComponent', () => {
  let component: InputAndErrorComponent;
  let fixture: ComponentFixture<InputAndErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAndErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAndErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
