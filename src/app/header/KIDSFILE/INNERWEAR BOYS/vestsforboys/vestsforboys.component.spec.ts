import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestsforboysComponent } from './vestsforboys.component';

describe('VestsforboysComponent', () => {
  let component: VestsforboysComponent;
  let fixture: ComponentFixture<VestsforboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestsforboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestsforboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
