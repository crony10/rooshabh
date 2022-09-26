import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanktopsboysComponent } from './tanktopsboys.component';

describe('TanktopsboysComponent', () => {
  let component: TanktopsboysComponent;
  let fixture: ComponentFixture<TanktopsboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanktopsboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanktopsboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
