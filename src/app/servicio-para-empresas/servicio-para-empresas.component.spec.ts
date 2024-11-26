import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioParaEmpresasComponent } from './servicio-para-empresas.component';

describe('ServicioParaEmpresasComponent', () => {
  let component: ServicioParaEmpresasComponent;
  let fixture: ComponentFixture<ServicioParaEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicioParaEmpresasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioParaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
