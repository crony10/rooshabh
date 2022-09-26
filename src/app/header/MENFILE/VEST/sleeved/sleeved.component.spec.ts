import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleevedComponent } from './sleeved.component';

describe('SleevedComponent', () => {
  let component: SleevedComponent;
  let fixture: ComponentFixture<SleevedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleevedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleevedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
