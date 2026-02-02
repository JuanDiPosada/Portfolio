// contact.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactInfo = {
    title: 'Contacto',
    subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
    email: 'juandiegocifuentesposada@gmail.com',
    phone: '+57 318 239 1853',
    location: 'Santander de Quilichao, Cauca, Colombia'
  };

  socialLinks = [
  { platform: 'GitHub', url: 'https://github.com/JuanDiPosada', icon: 'fab fa-github', username: '@JuanDiPosada' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/juan-cifuentes-421b5831b', icon: 'fab fa-linkedin', username: 'Juan Cifuentes' }
];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    const mailtoLink = `mailto:${this.contactInfo.email}?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent(`Nombre: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMensaje:\n${this.formData.message}`)}`;
    window.location.href = mailtoLink;
    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}