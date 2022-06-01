import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedVideoPageComponent } from './detailed-video-page.component';

describe('DetailedVideoPageComponent', () => {
  let component: DetailedVideoPageComponent;
  let fixture: ComponentFixture<DetailedVideoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedVideoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
