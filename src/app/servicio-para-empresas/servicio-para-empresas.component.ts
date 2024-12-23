import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-para-empresas',
  templateUrl: './servicio-para-empresas.component.html',
  styleUrls: ['./servicio-para-empresas.component.css'],
})
export class ServicioParaEmpresasComponent implements OnInit {
  isModalOpen: boolean = false; // Controla si el modal está visible
  isPay2ModalOpen: boolean = false; // Controla si modal__pay2 está visible
  isPay3ModalOpen: boolean = false; // Controla si modal__pay3 está visible
  selectedPlan: string = ''; // Almacena el título del plan seleccionado
  selectedPlanPriceMonthly: number = 0; // Precio mensual del plan seleccionado
  selectedPlanPriceAnnual: number = 0; // Precio anual del plan seleccionado
  selectedPlanPriceTotal: number = 0; // Total a pagar según el tipo de plan
  activePlanIndex: number | null = null; // Índice del plan activo

  // Información de las tarjetas
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
        'Todo lo incluido en The Coach, más',
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
        'Todo lo incluido en The Manager, más',
        'Consultoría en estrategias de retención de talento',
        'Acceso a eventos exclusivos de networking',
        'Integración de herramientas de seguimiento de candidatos (ATS)',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  openModal(planTitle: string): void {
    // Encuentra el plan seleccionado en el array `cards`
    const selectedCard = this.cards.find((card) => card.title === planTitle);
    if (selectedCard) {
      this.selectedPlan = planTitle; // Asigna el título del plan
      this.selectedPlanPriceMonthly = selectedCard.monthlyPrice; // Precio mensual del plan
      this.selectedPlanPriceAnnual = selectedCard.annualPrice; // Precio anual del plan
      this.selectedPlanPriceTotal = 0; // Reinicia el total a pagar
    }
    this.isModalOpen = true; // Muestra modal__pay
  }

  closeModal(): void {
    this.isModalOpen = false; // Oculta modal__pay
    this.isPay2ModalOpen = false; // Oculta modal__pay2
    this.resetPlanSelection(); // Resetea la selección del plan
  }

  openModal2(): void {
    this.isPay3ModalOpen = true;
  }

  closeModal2(): void {
    this.isPay3ModalOpen = false; // Oculta modal__pay3
    this.resetPlanSelection(); // Resetea la selección del plan
  }

  // Método para resetear la selección de plan
resetPlanSelection(): void {
  this.activePlanIndex = null; // Desactiva cualquier plan seleccionado
  this.selectedPlan = ''; // Limpia el título del plan seleccionado
  this.selectedPlanPriceTotal = 0; // Reinicia el precio total
}

  showPay2Modal(): void {
    if (this.activePlanIndex !== null) {
      this.isModalOpen = false; // Oculta modal__pay
      this.isPay2ModalOpen = true; // Muestra modal__pay2
    }
  }

  setActivePlan(planIndex: number): void {
    this.activePlanIndex = planIndex; // Almacena el índice del plan seleccionado
    if (planIndex === 0) {
      this.selectedPlanPriceTotal = this.selectedPlanPriceMonthly; // Total mensual
    } else if (planIndex === 1) {
      this.selectedPlanPriceTotal = this.selectedPlanPriceAnnual * 12; // Total anual (por mes * 12)
    }
  }

  goBackToModalPay(): void {
    this.isPay2ModalOpen = false; // Oculta modal__pay2
    this.isModalOpen = true; // Muestra modal__pay
  }
}
