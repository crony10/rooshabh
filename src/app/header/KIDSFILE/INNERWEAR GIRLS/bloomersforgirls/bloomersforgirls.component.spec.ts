import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloomersforgirlsComponent } from './bloomersforgirls.component';

describe('BloomersforgirlsComponent', () => {
  let component: BloomersforgirlsComponent;
  let fixture: ComponentFixture<BloomersforgirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloomersforgirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloomersforgirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
