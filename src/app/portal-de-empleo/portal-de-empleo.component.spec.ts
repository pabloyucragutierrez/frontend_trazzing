import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalDeEmpleoComponent } from './portal-de-empleo.component';

describe('PortalDeEmpleoComponent', () => {
  let component: PortalDeEmpleoComponent;
  let fixture: ComponentFixture<PortalDeEmpleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortalDeEmpleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortalDeEmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
