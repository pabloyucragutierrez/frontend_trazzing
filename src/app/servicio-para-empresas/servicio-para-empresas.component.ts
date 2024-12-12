import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-para-empresas',
  templateUrl: './servicio-para-empresas.component.html',
  styleUrls: ['./servicio-para-empresas.component.css'],
})
export class ServicioParaEmpresasComponent implements OnInit {
  isModalOpen: boolean = false; // Controla si el modal está visible
  isPay2ModalOpen: boolean = false; // Controla si modal__pay2 está visible
  selectedPlan: string = ''; // Almacena el título del plan seleccionado

  // Información de las tarjetas
  cards = [
    {
      title: 'The Coach',
      description: 'Ideal para empresas con 50 a 300 colaboradores.',
      monthlyPrice: '$59',
      annualPrice: '$50',
      features: [
        'Gestión completa del proceso de reclutamiento',
        'Acceso a base de datos de candidatos',
        'Publicación de vacantes en múltiples plataformas',
        'Soporte personalizado',
      ],
    },
    {
      title: 'The Manager',
      description: 'Ideal para empresas con 50 a 300 colaboradores.',
      monthlyPrice: '$59',
      annualPrice: '$50',
      features: [
        'Gestión completa del proceso de reclutamiento',
        'Acceso a base de datos de candidatos',
        'Publicación de vacantes en múltiples plataformas',
        'Soporte personalizado',
      ],
    },
    {
      title: 'The Boss',
      description: 'Ideal para empresas con 50 a 300 colaboradores.',
      monthlyPrice: '$59',
      annualPrice: '$50',
      features: [
        'Gestión completa del proceso de reclutamiento',
        'Acceso a base de datos de candidatos',
        'Publicación de vacantes en múltiples plataformas',
        'Soporte personalizado',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  openModal(planTitle: string): void {
    this.selectedPlan = planTitle; // Actualiza el texto del título
    this.isModalOpen = true; // Muestra modal__pay
  }

  closeModal(): void {
    this.isModalOpen = false; // Oculta modal__pay
    this.isPay2ModalOpen = false; // Oculta modal__pay2
  }

  showPay2Modal(): void {
    this.isModalOpen = false; // Oculta modal__pay
    this.isPay2ModalOpen = true; // Muestra modal__pay2
  }
}
