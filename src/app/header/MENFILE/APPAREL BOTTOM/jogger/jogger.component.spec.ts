import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoggerComponent } from './jogger.component';

describe('JoggerComponent', () => {
  let component: JoggerComponent;
  let fixture: ComponentFixture<JoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
