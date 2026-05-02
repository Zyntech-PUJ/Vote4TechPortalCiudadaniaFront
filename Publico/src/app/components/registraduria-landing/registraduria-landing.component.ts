import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoticiasComponent } from '../noticias/noticias.component';

@Component({
  selector: 'app-registraduria-landing',
  standalone: true,
  imports: [RouterLink, NoticiasComponent],
  templateUrl: './registraduria-landing.component.html',
  styleUrl: './registraduria-landing.component.css'
})
export class RegistraduriaLandingComponent {
  protected readonly navItems = [
    { label: 'Registrador Nacional',                route: '/registro-civil-e-identificacion' },
    { label: 'Atencion y servicios a la ciudadania', route: '/servicios-ciudadania' },
    { label: 'Participa',                            route: '/electoral/mecanismos-participacion' },
    { label: 'Capacitacion Electoral - SICE',        route: '/electoral/capacitacion-electoral' },
    { label: 'CEDAE',                                route: '/electoral/inscripcion-candidatos' },
    { label: 'Observatorio Electoral',               route: '/electoral/resultados-historicos' }
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
