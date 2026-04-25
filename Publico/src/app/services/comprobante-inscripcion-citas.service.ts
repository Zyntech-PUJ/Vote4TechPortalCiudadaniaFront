import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CitaComprobanteRequest {
  cedula: string;
  nombres: string;
  correo: string;
  telefono: string;
  sede: string;
  fecha: string;
  hora: string;
}

export interface CitaComprobanteResult {
  ok: boolean;
  codigoCita: string;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class ComprobanteInscripcionCitasService {
  getSedes(): string[] {
    return [
      'Bogota - Sede CAN',
      'Medellin - Centro de Servicios',
      'Cali - Punto de Atencion Electoral',
      'Barranquilla - Oficina Regional'
    ];
  }

  getHorarios(): string[] {
    return ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
  }

  agendar(data: CitaComprobanteRequest): Observable<CitaComprobanteResult> {
    const codigo = `CITA-${data.cedula.slice(-4)}-${Math.floor(Math.random() * 900 + 100)}`;
    return of({
      ok: true,
      codigoCita: codigo,
      mensaje: 'Tu cita fue agendada exitosamente para tramitar el certificado de votacion.'
    });
  }
}
