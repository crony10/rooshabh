import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaprisgirlComponent } from './caprisgirl.component';

describe('CaprisgirlComponent', () => {
  let component: CaprisgirlComponent;
  let fixture: ComponentFixture<CaprisgirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaprisgirlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaprisgirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
