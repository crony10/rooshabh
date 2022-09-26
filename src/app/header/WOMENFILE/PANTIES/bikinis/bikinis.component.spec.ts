import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikinisComponent } from './bikinis.component';

describe('BikinisComponent', () => {
  let component: BikinisComponent;
  let fixture: ComponentFixture<BikinisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikinisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikinisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
