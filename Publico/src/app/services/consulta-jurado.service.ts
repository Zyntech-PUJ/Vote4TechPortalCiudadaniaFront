import { Injectable } from '@angular/core';
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

@Injectable({ providedIn: 'root' })
export class ConsultaJuradoService {
  private readonly endpoint = 'http://localhost:8082/api/electoral/consulta-jurado';

  constructor(private readonly http: HttpClient) {}

  getConfig(): ConsultaJuradoConfig {
    return {
      tituloEvento: 'Consulta si fuiste designado como jurado de votacion',
      subtitulo: '',
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
      .get<{ found?: boolean; mensaje?: string }>(this.endpoint, {
        params: { cedula }
      })
      .pipe(
        map((res) => ({
          found: !!res.found,
          mensaje: res.mensaje ?? 'No se encontro designacion de jurado para el documento ingresado.'
        })),
        catchError(() =>
          of({
            found: false,
            mensaje: 'No fue posible consultar designación de jurado en este momento. Intente nuevamente.'
          })
        )
      );
  }
}
