import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodiesforgirlsComponent } from './hoodiesforgirls.component';

describe('HoodiesforgirlsComponent', () => {
  let component: HoodiesforgirlsComponent;
  let fixture: ComponentFixture<HoodiesforgirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoodiesforgirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodiesforgirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
