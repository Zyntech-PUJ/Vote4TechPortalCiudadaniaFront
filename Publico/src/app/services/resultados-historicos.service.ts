import { Injectable } from '@angular/core';

export interface ResultadosHistoricosConfig {
  anios: string[];
  departamentos: string[];
}

@Injectable({ providedIn: 'root' })
export class ResultadosHistoricosService {
  getConfig(): ResultadosHistoricosConfig {
    return {
      anios: ['2026', '2022', '2018', '2014', '2010'],
      departamentos: [
        'Amazonas',
        'Antioquia',
        'Atlantico',
        'Bogota D.C.',
        'Bolivar',
        'Boyaca',
        'Caldas',
        'Cauca',
        'Cesar',
        'Cordoba',
        'Cundinamarca',
        'Huila',
        'Magdalena',
        'Meta',
        'Nariño',
        'Norte de Santander',
        'Quindio',
        'Risaralda',
        'Santander',
        'Sucre',
        'Tolima',
        'Valle del Cauca'
      ]
    };
  }
}
