import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlussizebraComponent } from './plussizebra.component';

describe('PlussizebraComponent', () => {
  let component: PlussizebraComponent;
  let fixture: ComponentFixture<PlussizebraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlussizebraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlussizebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
