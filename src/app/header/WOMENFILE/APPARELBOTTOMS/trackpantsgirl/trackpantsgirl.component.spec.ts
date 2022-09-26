import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackpantsgirlComponent } from './trackpantsgirl.component';

describe('TrackpantsgirlComponent', () => {
  let component: TrackpantsgirlComponent;
  let fixture: ComponentFixture<TrackpantsgirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackpantsgirlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackpantsgirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
