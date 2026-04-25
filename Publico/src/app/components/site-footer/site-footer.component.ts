import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css'
})
export class SiteFooterComponent {
  protected readonly footerPrimaryInfo = [
    {
      icon: 'pin',
      text: 'Av. Calle 26 n. 51-50, CAN, Bogota, Colombia. CP: 111321'
    },
    {
      icon: 'mail',
      text: 'Horario de atencion correspondencia de lunes a viernes de 8:00 a. m. a 4:00 p. m. en jornada continua (Sede CAN av. calle 26 n. 51-50)'
    },
    {
      icon: 'phone',
      text: 'Conmutador: +57 (601) 220 2880'
    }
  ];

  protected readonly footerCaicInfo = [
    {
      icon: 'clock',
      text: 'Carrera 7.a n. 16-57, Piso 1, Edificio Cordoba. Horario: 8:00 a. m. a 4:00 p. m., en jornada continua'
    }
  ];

  protected readonly footerLinksColumns = [
    [
      'Politicas de privacidad',
      'Condiciones de uso',
      'Directorio',
      'Correo institucional (Office 365)',
      'Translate',
      'Mapa del sitio',
      'Contactenos'
    ],
    [
      'Biblioteca de la Registraduria',
      'Intranet',
      'Normatividad',
      'Correos judiciales',
      'PQRSDC',
      'Glosario'
    ]
  ];

  protected readonly footerSocialItems = ['f', 'X', '▶', '◎', 'in', '♪'];
}