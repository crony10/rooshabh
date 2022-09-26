import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackpantComponent } from './trackpant.component';

describe('TrackpantComponent', () => {
  let component: TrackpantComponent;
  let fixture: ComponentFixture<TrackpantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackpantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackpantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
