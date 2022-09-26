import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxerbriefComponent } from './boxerbrief.component';

describe('BoxerbriefComponent', () => {
  let component: BoxerbriefComponent;
  let fixture: ComponentFixture<BoxerbriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxerbriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxerbriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
