// footer.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  footerData = {
    name: 'Juan Diego Cifuentes Posada',
    role: 'Desarrollador de Software Junior',
    location: 'Santander de Quilichao, Cauca',
    copyright: `© ${this.currentYear} Juan Diego Cifuentes. Todos los derechos reservados.`,
    builtWith: 'Desarrollado con Angular 19 y Tailwind CSS'
  };

  socialLinks = [
  { name: 'GitHub', url: 'https://github.com/JuanDiPosada', icon: 'fab fa-github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/juan-cifuentes-421b5831b', icon: 'fab fa-linkedin' },
  { name: 'Email', url: 'mailto:juandiegocifuentesposada@gmail.com', icon: 'fas fa-envelope' }
];

  quickLinks = [
    { name: 'Sobre mí', id: 'about' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Habilidades', id: 'skills' },
    { name: 'Contacto', id: 'contact' }
  ];

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}