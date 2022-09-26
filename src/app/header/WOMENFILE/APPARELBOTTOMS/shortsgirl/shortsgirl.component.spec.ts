import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortsgirlComponent } from './shortsgirl.component';

describe('ShortsgirlComponent', () => {
  let component: ShortsgirlComponent;
  let fixture: ComponentFixture<ShortsgirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortsgirlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortsgirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
