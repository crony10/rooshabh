import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefforboysComponent } from './briefforboys.component';

describe('BriefforboysComponent', () => {
  let component: BriefforboysComponent;
  let fixture: ComponentFixture<BriefforboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefforboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefforboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
