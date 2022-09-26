import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtsboysComponent } from './t-shirtsboys.component';

describe('TShirtsboysComponent', () => {
  let component: TShirtsboysComponent;
  let fixture: ComponentFixture<TShirtsboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TShirtsboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtsboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
