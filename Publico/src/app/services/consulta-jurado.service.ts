import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

    // Reemplazar con llamada HTTP real cuando el backend este disponible.
    return of({
      found: false,
      mensaje: 'No se encontro designacion de jurado para el documento ingresado.'
    });
  }
}
