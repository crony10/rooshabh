import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxershortComponent } from './boxershort.component';

describe('BoxershortComponent', () => {
  let component: BoxershortComponent;
  let fixture: ComponentFixture<BoxershortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxershortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxershortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
