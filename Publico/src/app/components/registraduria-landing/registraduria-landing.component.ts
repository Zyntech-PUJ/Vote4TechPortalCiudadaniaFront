import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registraduria-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registraduria-landing.component.html',
  styleUrl: './registraduria-landing.component.css'
})
export class RegistraduriaLandingComponent {
  protected readonly navItems = [
    'Registrador Nacional',
    'Atencion y servicios a la ciudadania',
    'Participa',
    'Capacitacion Electoral - SICE',
    'CEDAE',
    'Observatorio Electoral'
  ];

  protected readonly serviceCards = [
    {
      title: 'Registro civil e identificacion',
      icon: 'id-card',
      highlighted: false,
      route: '/registro-civil-e-identificacion'
    },
    {
      title: 'Electoral',
      icon: 'ballot',
      highlighted: true,
      route: '/electoral'
    }
  ];
}
