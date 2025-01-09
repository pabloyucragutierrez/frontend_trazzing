import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unete-como-head-hunter',
  templateUrl: './unete-como-head-hunter.component.html',
  styleUrls: ['./unete-como-head-hunter.component.css'],
})
export class UneteComoHeadHunterComponent implements OnInit {
  headHunterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.headHunterForm = this.fb.group({
      contactName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.maxLength(9),
        ],
      ],
      experience: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      specialty: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.headHunterForm.markAllAsTouched(); // Marca todos los campos como tocados

    if (this.headHunterForm.invalid) {
      console.log('Formulario inválido');
      return;
    }

    console.log('Formulario válido', this.headHunterForm.value);
  }
}
