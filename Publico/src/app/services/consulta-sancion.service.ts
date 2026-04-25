import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ConsultaSancionConfig {
  tituloEvento: string;
  subtitulo: string;
  ayuda: string;
  recordatorio: string;
  nota: string;
}

export interface ConsultaSancionResult {
  found: boolean;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class ConsultaSancionService {
  private readonly endpoint = '/api/electoral/consulta-sancion';

  constructor(private readonly http: HttpClient) {}

  getConfig(): ConsultaSancionConfig {
    return {
      tituloEvento: 'Consulta de sanciones electorales',
      subtitulo: 'Verifica si el ciudadano ha sido amonestado',
      ayuda: 'Por favor digite su numero de cedula y de clic en consultar.',
      recordatorio: 'Recuerde: Esta consulta permite validar antecedentes de sanciones relacionadas con deberes electorales.',
      nota: 'Nota: Si existe una amonestacion o sancion, revise el detalle y canales de atencion para tramitar aclaraciones.'
    };
  }

  consultarSancion(cedula: string): Observable<ConsultaSancionResult> {
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
          mensaje: res.mensaje ?? (res.found ? 'El ciudadano registra sanciones.' : 'No se encontraron sanciones para el documento ingresado.')
        })),
        catchError(() =>
          of({
            found: false,
            mensaje: 'No fue posible consultar sanciones en este momento. Intente nuevamente.'
          })
        )
      );
  }
}
