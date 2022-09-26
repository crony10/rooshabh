import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepdressComponent } from './sleepdress.component';

describe('SleepdressComponent', () => {
  let component: SleepdressComponent;
  let fixture: ComponentFixture<SleepdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
