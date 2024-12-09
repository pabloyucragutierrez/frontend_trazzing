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
}
