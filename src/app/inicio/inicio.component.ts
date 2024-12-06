import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: 'Optimiza tu proceso de reclutamiento',
      description:
        'Descubre cómo Trazzing puede ayudarte a encontrar el mejor talento de manera eficiente y efectiva.',
      image: '/assets/banner1.png',
      link: '#empresas',
    },
    {
      title: 'Encuentra el trabajo ideal para ti',
      description:
        'Explora oportunidades de empleo y conéctate con empresas que valoran tus habilidades y experiencia.',
      image: '/assets/banner2.png',
      link: '#empleo',
    },
    {
      title: 'Únete a nuestra comunidad de HeadHunters',
      description:
        'Conéctate con empresas que buscan tu talento para encontrar a los mejores profesionales.',
      image: '/assets/banner3.jpg',
      link: '#unete',
    },
  ];

  currentSlide = 0;
  interval: any;
  isContentVisible = false; // Controla la visibilidad del contenido

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.showContent();
    this.interval = setInterval(() => {
      this.hideContent();
      setTimeout(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showContent();
      }, 1000); // Tiempo para sincronizar la transición
    }, 6000);
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeSlide(index: number) {
    this.stopAutoSlide(); // Detener el ciclo automático
    this.isContentVisible = false; // Ocultar el contenido
    setTimeout(() => {
      this.currentSlide = index; // Cambiar el índice de la diapositiva
      this.showContent(); // Mostrar el contenido
      this.startAutoSlide(); // Reiniciar el ciclo automático
    }, 500); // Sincronización de la animación
  }

  showContent() {
    this.isContentVisible = true; // Hacer visible el contenido
  }

  hideContent() {
    this.isContentVisible = false; // Ocultar el contenido
  }

  getBackgroundImage() {
    return `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${this.slides[this.currentSlide].image}')`;
  }
}
