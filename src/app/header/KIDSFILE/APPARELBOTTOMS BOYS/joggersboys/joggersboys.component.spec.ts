import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoggersboysComponent } from './joggersboys.component';

describe('JoggersboysComponent', () => {
  let component: JoggersboysComponent;
  let fixture: ComponentFixture<JoggersboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoggersboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoggersboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
