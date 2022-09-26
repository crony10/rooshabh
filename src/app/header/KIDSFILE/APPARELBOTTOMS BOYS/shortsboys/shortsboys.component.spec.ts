import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortsboysComponent } from './shortsboys.component';

describe('ShortsboysComponent', () => {
  let component: ShortsboysComponent;
  let fixture: ComponentFixture<ShortsboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortsboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortsboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
