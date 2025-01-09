import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen: boolean = false; // Controla si el menú está visible
  isClosing: boolean = false;  // Controla si el menú está cerrándose

  toggleMenu() {
    if (this.isMenuOpen) {
      this.closeMenu();
    } else {
      this.isMenuOpen = true;
    }
  }

  closeMenu() {
    this.isClosing = true; // Activa la animación de cierre
    setTimeout(() => {
      this.isMenuOpen = false; // Oculta completamente después de la animación
      this.isClosing = false;
    }, 500); // Duración de la animación (debe coincidir con el CSS)
  }


  isModalOpen: boolean = false;
  
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      contactName: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(9)]],
      companyName: ['', Validators.required],
      industry: ['', Validators.required],
      collaboratorsNum: ['', Validators.required],
      comments: ['']
    });

    // Agregar opción por defecto en los selects
    this.contactForm.controls['industry'].setValue('');
    this.contactForm.controls['collaboratorsNum'].setValue('');
  }

  showModal() {
    this.isModalOpen = true;
  }

  hideModal() {
    this.isModalOpen = false;
  }

  onSubmitContact() {
    this.contactForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
    if (this.contactForm.invalid) {
      console.log('Formulario inválido');
      return;
    }

    console.log('Formulario válido', this.contactForm.value);
  }
}
