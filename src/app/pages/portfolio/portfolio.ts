
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {

  // WHATSAPP
  // Troque pelo seu número real: 55 + DDD + número.
  private whatsappNumber = '5511986768843';

  whatsappUrl =
    `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      'Olá, Henrique! Gostaria de conversar sobre um projeto.'
    )}`;

  // MENU MOBILE
  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }

  // FORMULÁRIO
  form = {
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    services: [] as string[],
    message: ''
  };

  // MARCAR / DESMARCAR SERVIÇOS
  toggleService(service: string): void {
    const index = this.form.services.indexOf(service);

    if (index === -1) {
      this.form.services.push(service);
    } else {
      this.form.services.splice(index, 1);
    }
  }

  // ENVIAR DADOS PARA O WHATSAPP
  sendForm(): void {
    if (
      !this.form.name.trim() ||
      !this.form.whatsapp.trim() ||
      !this.form.email.trim()
    ) {
      return;
    }

    const message = [
      'Olá, Henrique! Gostaria de conversar sobre um projeto.',
      '',
      `Nome: ${this.form.name}`,
      `Empresa: ${this.form.company || 'Não informada'}`,
      `WhatsApp: ${this.form.whatsapp}`,
      `E-mail: ${this.form.email}`,
      `Serviços: ${this.form.services.join(', ') || 'Não informado'}`,
      '',
      `Projeto: ${this.form.message || 'Não informado'}`
    ].join('\n');

    const url =
      `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}


