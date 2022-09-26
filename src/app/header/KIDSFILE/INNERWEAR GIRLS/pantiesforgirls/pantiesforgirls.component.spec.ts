import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantiesforgirlsComponent } from './pantiesforgirls.component';

describe('PantiesforgirlsComponent', () => {
  let component: PantiesforgirlsComponent;
  let fixture: ComponentFixture<PantiesforgirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantiesforgirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantiesforgirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
