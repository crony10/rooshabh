import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleevelessComponent } from './sleeveless.component';

describe('SleevelessComponent', () => {
  let component: SleevelessComponent;
  let fixture: ComponentFixture<SleevelessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleevelessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleevelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
