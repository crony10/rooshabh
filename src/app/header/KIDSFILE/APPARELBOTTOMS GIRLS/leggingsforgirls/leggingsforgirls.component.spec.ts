import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeggingsforgirlsComponent } from './leggingsforgirls.component';

describe('LeggingsforgirlsComponent', () => {
  let component: LeggingsforgirlsComponent;
  let fixture: ComponentFixture<LeggingsforgirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeggingsforgirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeggingsforgirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
