import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanktopComponent } from './tanktop.component';

describe('TanktopComponent', () => {
  let component: TanktopComponent;
  let fixture: ComponentFixture<TanktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
