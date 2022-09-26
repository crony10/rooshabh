import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanktopsgirlComponent } from './tanktopsgirl.component';

describe('TanktopsgirlComponent', () => {
  let component: TanktopsgirlComponent;
  let fixture: ComponentFixture<TanktopsgirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanktopsgirlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanktopsgirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
