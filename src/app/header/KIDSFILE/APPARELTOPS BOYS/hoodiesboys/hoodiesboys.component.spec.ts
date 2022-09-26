import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodiesboysComponent } from './hoodiesboys.component';

describe('HoodiesboysComponent', () => {
  let component: HoodiesboysComponent;
  let fixture: ComponentFixture<HoodiesboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoodiesboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodiesboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
