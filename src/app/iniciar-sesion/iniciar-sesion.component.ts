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
}
