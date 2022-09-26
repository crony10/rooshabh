import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortiesforgirlsComponent } from './shortiesforgirls.component';

describe('ShortiesforgirlsComponent', () => {
  let component: ShortiesforgirlsComponent;
  let fixture: ComponentFixture<ShortiesforgirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortiesforgirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortiesforgirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
