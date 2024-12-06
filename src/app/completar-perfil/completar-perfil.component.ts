import { Component } from '@angular/core';

@Component({
  selector: 'app-completar-perfil',
  templateUrl: './completar-perfil.component.html',
  styleUrls: ['./completar-perfil.component.css']
})
export class CompletarPerfilComponent {
  imageSrc: string = 'assets/add_a_photo.png'; // Imagen inicial por defecto
  isImageUploaded: boolean = false; // Controla la visibilidad del botón

  // Simula un clic en el input file al hacer clic en la imagen o el botón
  onImageClick(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  // Actualiza la imagen cuando se selecciona un archivo
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string; // Actualiza la imagen
        this.isImageUploaded = true; // Muestra el botón cuando se sube la imagen
      };
      reader.readAsDataURL(file); // Lee el archivo seleccionado
    }
  }
}
