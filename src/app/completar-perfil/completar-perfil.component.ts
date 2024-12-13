import { Component } from '@angular/core';

@Component({
  selector: 'app-completar-perfil',
  templateUrl: './completar-perfil.component.html',
  styleUrls: ['./completar-perfil.component.css']
})
export class CompletarPerfilComponent {
  imageSrc: string = 'assets/add_a_photo.png';
  isImageUploaded: boolean = false; 

  onImageClick(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string; 
        this.isImageUploaded = true;
      };
      reader.readAsDataURL(file); 
    }
  }
  
  
  fileName: string | null = null;
  isModalVisible: boolean = false;
  activeCard: 'card1' | 'card2' | null = null;

  handleFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (file.type === 'application/pdf') {
        this.fileName = file.name;
        this.isModalVisible = true;
      } else {
        alert('Por favor, sube un archivo en formato PDF.');
        input.value = '';
      }
    }
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  showCard(card: 'card1' | 'card2'): void {
    this.activeCard = card; // Mostrar la tarjeta seleccionada
    this.isModalVisible = false; // Cerrar el modal principal
  }

  closeCard(): void {
    this.activeCard = null; // Cerrar cualquier tarjeta activa
  }
}
