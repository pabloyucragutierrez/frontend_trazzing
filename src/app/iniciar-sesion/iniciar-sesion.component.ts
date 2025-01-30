import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
  onSubmit(form: HTMLFormElement): void {
    if (!form.checkValidity()) {
      // Mostrar mensajes de error si el formulario no es válido
      form.reportValidity();
    } else {
      // Procesar el formulario si es válido
      console.log('Formulario enviado correctamente.');
    }
  }

  isPasswordVisible: boolean = false; // Estado inicial oculto

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
