import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ConsultaJuradoConfig {
  tituloEvento: string;
  subtitulo: string;
  ayuda: string;
  recordatorio: string;
  nota: string;
}

export interface ConsultaJuradoResult {
  found: boolean;
  mensaje: string;
}

interface ResponseEleccionJuradoDTO {
  idAsignacionJurado: number;
  nombreEleccion: string;
  tipoJurado: string;
  numeroMesa: number;
  fechaCapacitacion: string;
  estado: string;
  nombreCiudadano: string;
  generoCiudadano: string;
}

@Injectable({ providedIn: 'root' })
export class ConsultaJuradoService {
  private readonly http = inject(HttpClient);

  getConfig(): ConsultaJuradoConfig {
    return {
      tituloEvento: 'Consulta nacional de jurados de votacion',
      subtitulo: 'Consulta si fuiste designado como jurado de votacion',
      ayuda: 'Por favor digite su numero de cedula y de clic en consultar.',
      recordatorio: 'Recuerde: A mas tardar 7:30 am los jurados de votacion deberan estar ubicados en la mesa en la cual prestaran su servicio.',
      nota: 'Nota: El jurado de votacion que se presente a la mesa de votacion con posterioridad a la hora senalada sera considerado como no asistente y, en consecuencia, sera reemplazado y se atendra a las sanciones legales correspondientes.'
    };
  }

  consultarJurado(cedula: string): Observable<ConsultaJuradoResult> {
    if (!cedula.trim()) {
      return of({ found: false, mensaje: 'Debe ingresar un numero de cedula valido.' });
    }

    return this.http
      .get<ResponseEleccionJuradoDTO>(`/api/eleccion-jurado/cedula/${encodeURIComponent(cedula)}`)
      .pipe(
        map(j => ({
          found: true,
          mensaje: `${j.nombreCiudadano}, usted fue designado como jurado tipo ${j.tipoJurado} en la eleccion "${j.nombreEleccion}", mesa ${j.numeroMesa}. Estado: ${j.estado}.`
        })),
        catchError((err) => {
          if (err.status === 404) {
            return of({ found: false, mensaje: 'No se encontro designacion de jurado para el documento ingresado.' });
          }
          return of({ found: false, mensaje: 'No fue posible consultar la designacion de jurado en este momento. Intente nuevamente.' });
        })
      );
  }
}
