import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortiesComponent } from './shorties.component';

describe('ShortiesComponent', () => {
  let component: ShortiesComponent;
  let fixture: ComponentFixture<ShortiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
