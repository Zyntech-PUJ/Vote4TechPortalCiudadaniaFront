import { Injectable } from '@angular/core';

export interface CensoBanner {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  route: string;
}

@Injectable({ providedIn: 'root' })
export class CensoElectoralService {
  getBanners(): CensoBanner[] {
    return [
      {
        title: 'Censo Electoral al 7 de abril de 2026',
        subtitle: 'Consulta el potencial electoral habilitado, distribución por departamento y grupo etario.',
        buttonLabel: 'Ver censo 2026',
        route: '/electoral/censo-electoral/censo-2026'
      },
      {
        title: 'Consulta los censos históricos utilizados para los procesos electorales desde el año 2018',
        subtitle: 'Evolución del potencial electoral en los últimos comicios nacionales y regionales.',
        buttonLabel: 'Ver históricos',
        route: '/electoral/censo-electoral/historicos'
      }
    ];
  }
}
