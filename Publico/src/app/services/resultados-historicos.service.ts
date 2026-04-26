import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ResultadosHistoricosConfig {
  departamentos: string[];
}

interface ResponseEleccionDTO {
  idEleccion: number;
  nombre: string;
  fechaInicio: string;
  estado: string;
}

@Injectable({ providedIn: 'root' })
export class ResultadosHistoricosService {
  private readonly http = inject(HttpClient);

  getConfig(): ResultadosHistoricosConfig {
    return {
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

  getAnios(): Observable<string[]> {
    return this.http.get<ResponseEleccionDTO[]>('/api/eleccion/elecciones').pipe(
      map(elecciones => {
        const anios = [...new Set(elecciones.map(e => new Date(e.fechaInicio).getFullYear().toString()))];
        return anios.sort((a, b) => Number(b) - Number(a));
      }),
      catchError(() => of(['2026', '2022', '2018', '2014', '2010']))
    );
  }
}
