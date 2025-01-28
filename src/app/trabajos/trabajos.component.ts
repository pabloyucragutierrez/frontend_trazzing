import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css'],
})
export class TrabajosComponent {
  activeIndex: number = -1;

  showFilter(index: number): void {
    this.activeIndex = index;
    this.mostrarFiltros = false;
  }

  hideFilters(): void {
    this.activeIndex = -1;
    this.mostrarFiltros = false;
  }

  activeButton: string = 'Relevantes'; // Define qué botón está activo inicialmente

  setActiveButton(buttonName: string) {
    this.activeButton = buttonName; // Cambia el botón activo
  }

  isActive(buttonName: string): boolean {
    return this.activeButton === buttonName; // Comprueba si un botón está activo
  }

  mostrarFiltros: boolean = false; // Define si se muestran los filtros

  toggleFiltros() {
    this.activeIndex = -1;
    this.mostrarFiltros = !this.mostrarFiltros; // Cambia el valor de mostrarFiltros
  }
}
