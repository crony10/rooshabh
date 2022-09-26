import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdetailsComponent } from './showdetails.component';

describe('ShowdetailsComponent', () => {
  let component: ShowdetailsComponent;
  let fixture: ComponentFixture<ShowdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
