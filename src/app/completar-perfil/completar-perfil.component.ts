import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-completar-perfil',
  templateUrl: './completar-perfil.component.html',
  styleUrls: ['./completar-perfil.component.css']
})
export class CompletarPerfilComponent {
  imageSrc: string = 'assets/add_a_photo.png';
  isImageUploaded: boolean = false;
  fileName: string | null = null;
  isModalVisible: boolean = false;
  activeCard: 'card1' | 'card2' | null = null;

  perfilForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      fotoPerfil: ['', Validators.required],
      rolProfesional: ['', Validators.required],
      experienciaLaboral: ['', Validators.required],
      formacionAcademica: ['', Validators.required],
      habilidades: ['', Validators.required],
      cv: ['', Validators.required],
      nivelIngles: ['', Validators.required]
    });
  }

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
        this.perfilForm.get('fotoPerfil')?.setValue(file.name); // Validar campo fotoPerfil
      };
      reader.readAsDataURL(file);
    }
  }

  handleFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === 'application/pdf') {
        this.fileName = file.name;
        this.perfilForm.get('cv')?.setValue(file.name); // Validar campo CV
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

  showSuccessModal: boolean = false;  // Variable para controlar el modal de éxito

  onSubmit(): void {
    this.perfilForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
    if (this.perfilForm.invalid) {
      console.log('Formulario inválido', this.perfilForm.errors);
      return;
    }

    // Formulario válido, mostrar el modal de éxito
    console.log('Formulario válido', this.perfilForm.value);
    this.showSuccessModal = true; // Mostrar el modal de éxito
  }


  closeSuccessModal(): void {
    this.showSuccessModal = false;  // Cerrar el modal de éxito
  }

  // Métodos adicionales para obtener mensajes de error en campos específicos
  getErrorMessage(controlName: string): string {
    const control = this.perfilForm.get(controlName);
    if (control?.hasError('required') && control.touched) {
      return 'Este campo es obligatorio.';
    }
    return '';
  }
}
