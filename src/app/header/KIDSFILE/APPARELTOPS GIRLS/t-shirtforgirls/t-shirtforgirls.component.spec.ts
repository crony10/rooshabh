import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtforgirlsComponent } from './t-shirtforgirls.component';

describe('TShirtforgirlsComponent', () => {
  let component: TShirtforgirlsComponent;
  let fixture: ComponentFixture<TShirtforgirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TShirtforgirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtforgirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
