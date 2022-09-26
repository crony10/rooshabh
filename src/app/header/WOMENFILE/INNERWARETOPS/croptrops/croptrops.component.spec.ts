import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroptropsComponent } from './croptrops.component';

describe('CroptropsComponent', () => {
  let component: CroptropsComponent;
  let fixture: ComponentFixture<CroptropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroptropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CroptropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
