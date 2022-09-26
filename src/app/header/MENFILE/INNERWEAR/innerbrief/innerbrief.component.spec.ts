import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerbriefComponent } from './innerbrief.component';

describe('InnerbriefComponent', () => {
  let component: InnerbriefComponent;
  let fixture: ComponentFixture<InnerbriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerbriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerbriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
