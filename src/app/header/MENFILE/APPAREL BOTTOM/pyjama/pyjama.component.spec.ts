import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyjamaComponent } from './pyjama.component';

describe('PyjamaComponent', () => {
  let component: PyjamaComponent;
  let fixture: ComponentFixture<PyjamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyjamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyjamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
