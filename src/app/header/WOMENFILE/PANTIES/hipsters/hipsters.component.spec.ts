import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipstersComponent } from './hipsters.component';

describe('HipstersComponent', () => {
  let component: HipstersComponent;
  let fixture: ComponentFixture<HipstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipstersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
