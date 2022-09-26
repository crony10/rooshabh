import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivebraComponent } from './activebra.component';

describe('ActivebraComponent', () => {
  let component: ActivebraComponent;
  let fixture: ComponentFixture<ActivebraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivebraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
