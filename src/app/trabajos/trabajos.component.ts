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
}
