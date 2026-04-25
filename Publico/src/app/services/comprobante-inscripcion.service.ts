import { Injectable } from '@angular/core';

export interface ComprobanteInscripcionConfig {
  info: string;
  tiposDocumento: string[];
}

@Injectable({ providedIn: 'root' })
export class ComprobanteInscripcionService {
  getConfig(): ComprobanteInscripcionConfig {
    return {
      info: 'Si usted realizo un tramite de inscripcion durante el periodo de 2026/01/09 al 2026/03/31, este se vera reflejado una vez sea verificado, procesado y se conforme el censo electoral definitivo para las elecciones de presidente y vicepresidente de la Republica 2026.',
      tiposDocumento: ['CC', 'TI', 'CE', 'PA']
    };
  }
}
