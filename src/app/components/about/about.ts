// about.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  aboutData = {
    title: 'Sobre mí',
    age: '19 años',
    location: 'Santander de Quilichao, Cauca',
    profile: 'Tecnólogo en Análisis y Desarrollo de Software con enfoque en el ecosistema Fullstack (Laravel & Angular). Experiencia en la construcción de interfaces modernas con Tailwind CSS y el desarrollo de APIs REST. Con un nivel de inglés B2, poseo la capacidad de documentar y colaborar en entornos técnicos. Enfocado en la optimización de procesos mediante soluciones de software escalables y la aplicación de metodologías ágiles.',
    image: 'assets/profile.jpg'
  };

  education = {
    degree: 'Tecnólogo en Análisis y Desarrollo de Software',
    institution: 'SENA (Servicio Nacional de Aprendizaje)',
    period: 'Abril 2024 - Diciembre 2025',
    highlights: [
      'Formación técnica en desarrollo de aplicaciones',
      'Análisis de sistemas y programación web',
      'Gestión de bases de datos',
      'Metodologías de desarrollo de software'
    ]
  };

  softSkills = [
  { name: 'Pensamiento analítico y resolución de problemas', icon: 'fas fa-brain' },
  { name: 'Trabajo en equipo y comunicación efectiva', icon: 'fas fa-handshake' },
  { name: 'Aprendizaje autodidacta y adaptabilidad', icon: 'fas fa-book-reader' },
  { name: 'Proactividad e iniciativa', icon: 'fas fa-rocket' },
  { name: 'Atención al detalle y organización', icon: 'fas fa-bullseye' },
  { name: 'Gestión del tiempo y cumplimiento de plazos', icon: 'fas fa-clock' }
  ];

  languages = [
    { name: 'Español', level: 'Nativo', percentage: 100 },
    { name: 'Inglés', level: 'B2', percentage: 55 }
  ];
}