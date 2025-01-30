import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrl: './registrate.component.css',
})
export class RegistrateComponent {
  documentType: string = ''; // Tipo de documento seleccionado
  documentNumber: string = ''; // Número ingresado
  documentPattern: string = '^[0-9]{8}$'; // Patrón inicial (DNI)
  documentMaxLength: number = 8; // Longitud inicial (DNI)
  documentTitle: string = 'El número de documento debe contener exactamente 8 dígitos.'; // Mensaje inicial

  constructor(private router: Router, private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  onSubmit(form: HTMLFormElement): void {
    if (!form.checkValidity()) {
      form.reportValidity();
    } else {
      console.log('Formulario enviado correctamente.');
      this.router.navigate(['/completar-perfil']);
    }
  }

  isPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  updateDocumentValidation(): void {
    switch (this.documentType) {
      case 'passport':
        this.documentPattern = '^[0-9]{9}$';
        this.documentMaxLength = 9;
        this.documentTitle = 'El pasaporte debe contener exactamente 9 dígitos.';
        break;
      case 'license':
        this.documentPattern = '^[0-9]{8}$';
        this.documentMaxLength = 8;
        this.documentTitle = 'El carnet de conducir debe contener exactamente 8 dígitos.';
        break;
      case 'foreign-card':
        this.documentPattern = '^[0-9]{20}$';
        this.documentMaxLength = 20;
        this.documentTitle = 'El carnet de extranjería debe contener exactamente 20 dígitos.';
        break;
      default: // DNI
        this.documentPattern = '^[0-9]{8}$';
        this.documentMaxLength = 8;
        this.documentTitle = 'El DNI debe contener exactamente 8 dígitos.';
        break;
    }
  }
}
