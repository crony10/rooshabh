import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanktopsforgirlsComponent } from './tanktopsforgirls.component';

describe('TanktopsforgirlsComponent', () => {
  let component: TanktopsforgirlsComponent;
  let fixture: ComponentFixture<TanktopsforgirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanktopsforgirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanktopsforgirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
