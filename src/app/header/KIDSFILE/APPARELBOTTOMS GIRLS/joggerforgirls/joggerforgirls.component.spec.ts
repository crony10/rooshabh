import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoggerforgirlsComponent } from './joggerforgirls.component';

describe('JoggerforgirlsComponent', () => {
  let component: JoggerforgirlsComponent;
  let fixture: ComponentFixture<JoggerforgirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoggerforgirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoggerforgirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
