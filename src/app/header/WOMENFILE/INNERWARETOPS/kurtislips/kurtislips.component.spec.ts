import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtislipsComponent } from './kurtislips.component';

describe('KurtislipsComponent', () => {
  let component: KurtislipsComponent;
  let fixture: ComponentFixture<KurtislipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurtislipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurtislipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
