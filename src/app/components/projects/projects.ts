// projects.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  featuredProject = {
    id: 1,
    title: 'GeoMarket',
    subtitle: 'Plataforma de Comercio Electrónico - Marketplace',
    description: 'Plataforma de comercio electrónico tipo Marketplace que facilita la conexión directa entre vendedores y compradores locales, optimizando la visibilidad de productos en la región.',
    role: 'Backend Lead & Database Designer',
    responsibilities: [
      'Lideré el desarrollo de la lógica de servidor utilizando PHP y Laravel',
      'Diseñé una estructura de base de datos relacional eficiente',
      'Implementé el manejo de productos y perfiles de usuario',
      'Desarrollé APIs REST para la comunicación frontend-backend'
    ],
    image: 'assets/geomarket.jpg',
    technologies: ['PHP', 'Laravel', 'MySQL', 'API REST', 'Git'],
    features: [
      'Sistema de gestión de productos',
      'Perfiles de vendedores y compradores',
      'Búsqueda y filtrado de productos',
      'Panel administrativo',
      'Base de datos optimizada'
    ],
    github: 'https://github.com/PGeoMarket/GeoMarket-Front-end',
    demo: '#'
  };

  otherProjects = [
    {
      id: 2,
      title: 'API REST Laravel GeoMarket',
      description: 'Desarrollo de APIs RESTful robustas y escalables con Laravel.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Postman'],
      github: 'https://github.com/PGeoMarket/apiGeoMarket'
    }
  ];
}