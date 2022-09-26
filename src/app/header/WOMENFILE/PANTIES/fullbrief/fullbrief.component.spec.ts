import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullbriefComponent } from './fullbrief.component';

describe('FullbriefComponent', () => {
  let component: FullbriefComponent;
  let fixture: ComponentFixture<FullbriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullbriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullbriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
