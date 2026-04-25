import { Injectable } from '@angular/core';

export interface CensoBanner {
  title: string;
  subtitle?: string;
  buttonLabel: string;
}

@Injectable({ providedIn: 'root' })
export class CensoElectoralService {
  getBanners(): CensoBanner[] {
    return [
      {
        title: 'Censo Electoral al 7 de abril de 2026',
        buttonLabel: '→'
      },
      {
        title: 'Consulta los censos historicos utilizados para los procesos electorales desde el ano 2018',
        buttonLabel: '→'
      }
    ];
  }
}
