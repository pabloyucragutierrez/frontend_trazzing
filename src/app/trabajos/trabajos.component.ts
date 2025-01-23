import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent {
  activeIndex: number = -1;

  showFilter(index: number): void {
    this.activeIndex = index;
  }

  hideFilters(): void {
    this.activeIndex = -1;
  }

  activeButton: string = 'Relevantes'; // Define qué botón está activo inicialmente

  setActiveButton(buttonName: string) {
    this.activeButton = buttonName; // Cambia el botón activo
  }

  isActive(buttonName: string): boolean {
    return this.activeButton === buttonName; // Comprueba si un botón está activo
  }
}
