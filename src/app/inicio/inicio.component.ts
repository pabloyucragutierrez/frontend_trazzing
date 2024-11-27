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
      title: 'Encuentra el trabajo idea para ti',
      description:
        'Explora oportunidades de empleo y conécta con empresas que valoran tus habilidades y experiencia.',
      image: '/assets/banner2.png',
      link: '#empleo',
    },
    {
      title: 'Únete a nuestra comunidad de HeadHunters',
      description:
        'Contectate con empresas que buscan tu talento para encontrar a los mejores profesionales.',
      image: '/assets/banner3.jpg',
      link: '#unete',
    },
  ];

  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 3000);
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  getBackgroundImage() {
    return `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${
      this.slides[this.currentSlide].image
    }')`;
  }
}
