import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunksforboysComponent } from './trunksforboys.component';

describe('TrunksforboysComponent', () => {
  let component: TrunksforboysComponent;
  let fixture: ComponentFixture<TrunksforboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrunksforboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunksforboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
