import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterdetailsComponent } from './enterdetails.component';

describe('EnterdetailsComponent', () => {
  let component: EnterdetailsComponent;
  let fixture: ComponentFixture<EnterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
