import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisolesComponent } from './camisoles.component';

describe('CamisolesComponent', () => {
  let component: CamisolesComponent;
  let fixture: ComponentFixture<CamisolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
