import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDelTrabajoComponent } from './detalle-del-trabajo.component';

describe('DetalleDelTrabajoComponent', () => {
  let component: DetalleDelTrabajoComponent;
  let fixture: ComponentFixture<DetalleDelTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleDelTrabajoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleDelTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
