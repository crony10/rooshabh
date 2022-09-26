import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodiesgirlComponent } from './hoodiesgirl.component';

describe('HoodiesgirlComponent', () => {
  let component: HoodiesgirlComponent;
  let fixture: ComponentFixture<HoodiesgirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoodiesgirlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodiesgirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
