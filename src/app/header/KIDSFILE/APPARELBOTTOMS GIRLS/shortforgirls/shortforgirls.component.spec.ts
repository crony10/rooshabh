import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortforgirlsComponent } from './shortforgirls.component';

describe('ShortforgirlsComponent', () => {
  let component: ShortforgirlsComponent;
  let fixture: ComponentFixture<ShortforgirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortforgirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortforgirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
