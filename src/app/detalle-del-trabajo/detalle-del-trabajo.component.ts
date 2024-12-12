import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-del-trabajo',
  templateUrl: './detalle-del-trabajo.component.html',
  styleUrls: ['./detalle-del-trabajo.component.css']
})
export class DetalleDelTrabajoComponent {
  isModalVisible: boolean = false;

  // Método para mostrar el modal
  showModal() {
    this.isModalVisible = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalVisible = false;
  }
}
