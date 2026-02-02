import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  heroData = {
    greeting: '¡Hola! Soy',
    name: 'Juan Diego Cifuentes Posada',
    role: 'Desarrollador de Software Junior',
    subtitle: 'Fullstack Developer | Laravel & Angular',
    description: 'Tecnólogo en Análisis y Desarrollo de Software especializado en el ecosistema Fullstack. Apasionado por crear soluciones escalables con Laravel, Angular y Tailwind CSS.',
    location: 'Santander de Quilichao, Cauca',
    ctaText: 'Ver proyectos',
    cvText: 'Descargar CV',
    cvUrl: 'assets/CV_Juan_Diego_Cifuentes_Posada.pdf'
  };

  socialLinks = [
  { name: 'GitHub', url: 'https://github.com/JuanDiPosada', icon: 'fab fa-github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/juan-cifuentes-421b5831b', icon: 'fab fa-linkedin' },
  { name: 'Email', url: 'mailto:juandiegocifuentesposada@gmail.com', icon: 'fas fa-envelope' }
];

  scrollToProjects(): void {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV(): void {
    window.open(this.heroData.cvUrl, '_blank');
  }
}