import { Component } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {
  
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

  
  // isModalOpen: boolean = false;

  // showModal() {
  //   this.isModalOpen = true;
  // }

  // hideModal() {
  //   this.isModalOpen = false;
  // }
}
