import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-del-trabajo',
  templateUrl: './detalle-del-trabajo.component.html',
  styleUrls: ['./detalle-del-trabajo.component.css'],
})
export class DetalleDelTrabajoComponent {
  isModalVisible: boolean = false;
  hasApplied: boolean = false;
  applicationDate: string = '';

  // Método para mostrar el modal
  showModal() {
    this.isModalVisible = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalVisible = false;
  }

  // Método para manejar el envío del formulario
  onSubmit(form: HTMLFormElement): void {
    if (!form.checkValidity()) {
      // Si el formulario no es válido, mostramos los mensajes de error del navegador.
      form.reportValidity();
    } else {
      // Si el formulario es válido
      this.hasApplied = true;
      this.applicationDate = new Date().toLocaleDateString('es-ES'); // Obtiene la fecha actual en formato "DD/MM/YYYY"
      this.isModalVisible = false; // Cierra el modal
      console.log('Formulario enviado correctamente.');
    }
  }
}
