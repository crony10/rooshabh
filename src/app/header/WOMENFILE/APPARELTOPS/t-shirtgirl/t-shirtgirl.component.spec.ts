import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtgirlComponent } from './t-shirtgirl.component';

describe('TShirtgirlComponent', () => {
  let component: TShirtgirlComponent;
  let fixture: ComponentFixture<TShirtgirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TShirtgirlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtgirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
