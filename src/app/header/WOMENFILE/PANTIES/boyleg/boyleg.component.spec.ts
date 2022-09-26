import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoylegComponent } from './boyleg.component';

describe('BoylegComponent', () => {
  let component: BoylegComponent;
  let fixture: ComponentFixture<BoylegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoylegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoylegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
