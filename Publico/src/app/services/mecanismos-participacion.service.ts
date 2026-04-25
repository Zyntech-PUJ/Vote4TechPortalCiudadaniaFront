import { Injectable } from '@angular/core';

export interface PublicacionMecanismo {
  tipoArchivo: 'XLS' | 'PDF' | 'DOC';
  descripcion: string;
  fecha: string;
  nota?: string;
}

@Injectable({ providedIn: 'root' })
export class MecanismosParticipacionService {
  getPublicaciones(): PublicacionMecanismo[] {
    return [
      {
        tipoArchivo: 'XLS',
        descripcion: 'Formulario MPFT08 Inscripcion Promotor - Comite Promotor MP (Excel - 335 KB)',
        fecha: 'Martes 13 de abril de 2021'
      },
      {
        tipoArchivo: 'PDF',
        descripcion: 'Resolucion 8628 de 14 de agosto de 2024',
        fecha: 'Martes 20 de agosto de 2024'
      },
      {
        tipoArchivo: 'PDF',
        descripcion: 'Resolucion NP 9506 del 05 de agosto de 2025',
        fecha: 'Martes 05 de agosto de 2025',
        nota: 'Por la cual se reglamenta el procedimiento para la inscripcion del Mecanismo de Participacion Ciudadana de cabildo abierto.'
      }
    ];
  }

  getNormasRelacionadas(): string[] {
    return [
      'Constitucion Politica de 1991, articulos 103, 258 y 259.',
      'Ley Estatutaria 134 de 1994 - Normas sobre mecanismos de participacion ciudadana.',
      'Ley Estatutaria 1757 de 2015 - Disposiciones en materia de promocion y proteccion del derecho a la participacion democratica.',
      'Resolucion del CNE 06245 de 22 de diciembre de 2015 - Procedimiento de verificacion de autenticidad de apoyos ciudadanos.',
      'Resolucion de la RNEC No. 6917 de 10 de agosto de 2016 - Procedimiento para recoleccion de firmas de cabildo abierto.',
      'Sentencia C-223 de 08 de abril de 2015 - Control constitucional de normas de promocion y proteccion del derecho a la participacion democraticaid.'
    ];
  }
}
