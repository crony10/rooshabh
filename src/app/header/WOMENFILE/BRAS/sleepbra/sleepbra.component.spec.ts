import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepbraComponent } from './sleepbra.component';

describe('SleepbraComponent', () => {
  let component: SleepbraComponent;
  let fixture: ComponentFixture<SleepbraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepbraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepbraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
