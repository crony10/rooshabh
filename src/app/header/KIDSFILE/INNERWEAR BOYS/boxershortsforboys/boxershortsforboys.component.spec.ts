import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxershortsforboysComponent } from './boxershortsforboys.component';

describe('BoxershortsforboysComponent', () => {
  let component: BoxershortsforboysComponent;
  let fixture: ComponentFixture<BoxershortsforboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxershortsforboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxershortsforboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
