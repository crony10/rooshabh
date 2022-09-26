import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtbraComponent } from './t-shirtbra.component';

describe('TShirtbraComponent', () => {
  let component: TShirtbraComponent;
  let fixture: ComponentFixture<TShirtbraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TShirtbraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtbraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
