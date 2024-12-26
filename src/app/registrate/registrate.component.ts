import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrl: './registrate.component.css'
})
export class RegistrateComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
