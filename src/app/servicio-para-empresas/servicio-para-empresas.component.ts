import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicio-para-empresas',
  templateUrl: './servicio-para-empresas.component.html',
  styleUrls: ['./servicio-para-empresas.component.css'],
})
export class ServicioParaEmpresasComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  empresaForm: FormGroup;
  reclutamientoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reclutamientoForm = this.fb.group({
      nombreContacto: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')],
      ],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefonoContacto: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.maxLength(9),
        ],
      ],
      compania: ['', Validators.required],
      industria: ['', Validators.required],
      colaboradores: ['', Validators.required],
      requisitos: [''], // No obligatorio
    });

    this.empresaForm = this.fb.group({
      nombreContacto: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')],
      ],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.maxLength(9),
        ],
      ],
      nombreEmpresa: ['', Validators.required],
      industria: ['', Validators.required],
      numeroColaboradores: ['', Validators.required],
      comentarios: [''],
    });

    // Configurando valores por defecto
    this.empresaForm.controls['industria'].setValue('');
    this.empresaForm.controls['numeroColaboradores'].setValue('');
  }

  enviarFormulario(): void {
    if (this.reclutamientoForm.valid) {
      console.log('Formulario enviado:', this.reclutamientoForm.value);
      this.reclutamientoForm.reset();
    } else {
      this.reclutamientoForm.markAllAsTouched();
    }
  }

  onEnviarFormulario() {
    // Marca todos los campos como tocados para mostrar errores
    this.empresaForm.markAllAsTouched();

    if (this.empresaForm.invalid) {
      console.log('Formulario inválido');
      return;
    }

    console.log('Formulario válido', this.empresaForm.value);
  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contactName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z ]*')],
      ],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      phone: ['', [Validators.required, Validators.pattern('\\d{9}')]],
      companyName: ['', [Validators.required]],
      website: [
        '',
        [Validators.required], // Solo validación de requerido.
      ],

      selectedPlan: ['', [Validators.required]], // Validación para el plan seleccionado
    });
  }

  onSubmit(form: HTMLFormElement): void {
    if (!form.checkValidity()) {
      // Si el formulario no es válido, mostramos los mensajes de error del navegador.
      form.reportValidity();
    } else {
      // Lógica adicional si el formulario es válido.
      console.log('Formulario enviado correctamente.');
    }
  }
  onSubmitContact(): void {
    this.submitted = true;

    // Validar el formulario y el plan seleccionado
    if (this.contactForm.valid) {
      this.isModalOpen = false; // Cerrar el modal actual
      this.isPay2ModalOpen = true; // Abrir el siguiente modal
    } else {
      this.validatePlanSelection(); // Mostrar mensaje de error si el plan no está seleccionado
    }
  }

  isModalOpen: boolean = false;
  isPay2ModalOpen: boolean = false;
  isPay3ModalOpen: boolean = false;
  selectedPlan: string = '';
  selectedPlanPriceMonthly: number = 0;
  selectedPlanPriceAnnual: number = 0;
  selectedPlanPriceTotal: number = 0;
  activePlanIndex: number | null = null;
  showPlanError: boolean = false;

  cards = [
    {
      title: 'The Coach',
      description: 'Ideal para empresas con 50 a 300 colaboradores.',
      monthlyPrice: 59,
      annualPrice: 50,
      features: [
        'Gestión completa del proceso de reclutamiento',
        'Acceso a base de datos de candidatos',
        'Publicación de vacantes en múltiples plataformas',
        'Soporte personalizado',
      ],
    },
    {
      title: 'The Manager',
      description: 'Perfecto para empresas con 301 a 500 colaboradores.',
      monthlyPrice: 179,
      annualPrice: 150,
      features: [
        'Todo lo incluido en The Coach',
        'Estrategias avanzadas de atracción de talento',
        'Análisis y reportes detallados de candidatos',
        'Soporte extendido y asesoría',
      ],
    },
    {
      title: 'The Boss',
      description: 'Diseñado para empresas con más de 500 colaboradores.',
      monthlyPrice: 229,
      annualPrice: 200,
      features: [
        'Todo lo incluido en The Manager',
        'Consultoría en estrategias de retención de talento',
        'Acceso a eventos exclusivos de networking',
        'Integración de herramientas de seguimiento de candidatos (ATS)',
      ],
    },
  ];

  openModal(planTitle: string): void {
    const selectedCard = this.cards.find((card) => card.title === planTitle);
    if (selectedCard) {
      this.selectedPlan = planTitle;
      this.selectedPlanPriceMonthly = selectedCard.monthlyPrice;
      this.selectedPlanPriceAnnual = selectedCard.annualPrice;
      this.selectedPlanPriceTotal = 0;
    }
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.isPay2ModalOpen = false;
    this.resetPlanSelection();
  }

  openModal2(): void {
    this.isPay3ModalOpen = true;
  }

  closeModal2(): void {
    this.isPay3ModalOpen = false;
    this.resetPlanSelection();
  }

  resetPlanSelection(): void {
    this.activePlanIndex = null;
    this.selectedPlan = '';
    this.selectedPlanPriceTotal = 0;
    this.showPlanError = false;
    this.contactForm.controls['selectedPlan'].setValue('');
  }

  showPay2Modal(): void {
    if (this.activePlanIndex !== null) {
      this.isModalOpen = false;
      this.isPay2ModalOpen = true;
    }
  }

  setActivePlan(planIndex: number): void {
    this.activePlanIndex = planIndex;

    // Actualiza el control del formulario con el plan seleccionado
    if (planIndex === 0) {
      this.contactForm.controls['selectedPlan'].setValue('Mensual');
      this.selectedPlanPriceTotal = this.selectedPlanPriceMonthly;
    } else if (planIndex === 1) {
      this.contactForm.controls['selectedPlan'].setValue('Anual');
      this.selectedPlanPriceTotal = this.selectedPlanPriceAnnual * 12;
    }

    this.showPlanError = false; // Desactivar mensaje de error al seleccionar un plan
  }

  goBackToModalPay(): void {
    this.isPay2ModalOpen = false;
    this.isModalOpen = true;
  }

  validatePlanSelection(): void {
    this.showPlanError = this.contactForm.controls['selectedPlan'].invalid;
  }
}
