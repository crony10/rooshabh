import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BermudasComponent } from './bermudas.component';

describe('BermudasComponent', () => {
  let component: BermudasComponent;
  let fixture: ComponentFixture<BermudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BermudasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BermudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
