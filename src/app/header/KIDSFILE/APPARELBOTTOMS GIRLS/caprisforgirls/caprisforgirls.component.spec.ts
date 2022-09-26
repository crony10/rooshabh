import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaprisforgirlsComponent } from './caprisforgirls.component';

describe('CaprisforgirlsComponent', () => {
  let component: CaprisforgirlsComponent;
  let fixture: ComponentFixture<CaprisforgirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaprisforgirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaprisforgirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
