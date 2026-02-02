// skills.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  technicalSkills = {
  frontend: [
    { name: 'HTML5', level: 90, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 80, icon: 'fab fa-css3-alt' },
    { name: 'Angular', level: 60, icon: 'fab fa-angular' },
    { name: 'Tailwind CSS', level: 60, icon: 'fas fa-wind' }
  ],
  backend: [
    { name: 'PHP', level: 75, icon: 'fab fa-php' },
    { name: 'Laravel', level: 80, icon: 'fab fa-laravel' },
    { name: 'APIs REST', level: 85, icon: 'fas fa-plug' }
  ],
  tools: [
    { name: 'Git', level: 80, icon: 'fab fa-git-alt' },
    { name: 'GitHub', level: 80, icon: 'fab fa-github' },
    { name: 'SQL Databases', level: 55, icon: 'fas fa-database' }
  ]
};
}