import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverydaybraComponent } from './everydaybra.component';

describe('EverydaybraComponent', () => {
  let component: EverydaybraComponent;
  let fixture: ComponentFixture<EverydaybraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverydaybraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EverydaybraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
