import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtaslipsComponent } from './kurtaslips.component';

describe('KurtaslipsComponent', () => {
  let component: KurtaslipsComponent;
  let fixture: ComponentFixture<KurtaslipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurtaslipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurtaslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
