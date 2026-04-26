import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface RegistroCivilDetalle {
  slug: string;
  titulo: string;
  resumen: string;
  presencial: string;
  documentos: string[];
  pasos: string[];
  observaciones: string[];
}

export interface CitaRegistroCivilRequest {
  tramite: string;
  tipoDocumento: string;
  numeroDocumento: string;
  nombres: string;
  correo: string;
  telefono: string;
  sede: string;
  fecha: string;
  hora: string;
}

export interface CitaRegistroCivilResult {
  ok: boolean;
  codigo: string;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class RegistroCivilInformacionService {
  private readonly detalles: RegistroCivilDetalle[] = [
    {
      slug: 'registro-civil',
      titulo: 'Registro civil',
      resumen: 'Orientacion general para inscripcion y correccion de registros civiles.',
      presencial: 'Este tramite es presencial. Debe realizarse directamente en la Registraduria o punto autorizado.',
      documentos: [
        'Documento de identificacion del solicitante',
        'Soporte del hecho vital a registrar segun el caso',
        'Documentos adicionales solicitados por el funcionario'
      ],
      pasos: [
        'Verifique requisitos del tramite en esta pantalla.',
        'Agende una cita presencial en la sede de su preferencia.',
        'Presente documentos originales y copias legibles.',
        'Radique la solicitud y conserve el numero de atencion.'
      ],
      observaciones: [
        'No se realizan radicaciones virtuales para este servicio.',
        'La validacion final depende del analisis del despacho.'
      ]
    },
    {
      slug: 'tarjeta-identidad',
      titulo: 'Tarjeta de identidad',
      resumen: 'Informacion para solicitud, renovacion y duplicado de tarjeta de identidad.',
      presencial: 'El tramite se realiza de forma presencial en Registraduria. No hay expedicion virtual.',
      documentos: [
        'Registro civil del menor',
        'Documento del acudiente',
        'Soportes adicionales segun novedad del tramite'
      ],
      pasos: [
        'Confirme requisitos segun tipo de solicitud.',
        'Agende cita presencial para atencion.',
        'Asista con el menor y la documentacion requerida.',
        'Espere notificacion para entrega del documento.'
      ],
      observaciones: [
        'La captura de datos biometrica es presencial y obligatoria.',
        'Revise periodicamente el estado de produccion del documento.'
      ]
    },
    {
      slug: 'cedula-ciudadania',
      titulo: 'Cedula de ciudadania',
      resumen: 'Guia para primera vez, duplicado y rectificacion de cedula.',
      presencial: 'La solicitud de cedula es presencial. No se tramita completamente en linea.',
      documentos: [
        'Registro civil o documento base segun el caso',
        'Comprobante de pago cuando aplique',
        'Soportes de correccion o rectificacion'
      ],
      pasos: [
        'Revise el tipo de tramite requerido.',
        'Agende cita para radicar en sede.',
        'Presente documentos y complete validaciones.',
        'Consulte estado y reclame en punto autorizado.'
      ],
      observaciones: [
        'La disponibilidad de entrega depende del operador de produccion.',
        'Los datos deben coincidir con el registro civil base.'
      ]
    },
    {
      slug: 'certificados',
      titulo: 'Certificados',
      resumen: 'Informacion para certificados asociados a identidad y registro civil.',
      presencial: 'La expedicion oficial para estos certificados se gestiona en punto de atencion presencial.',
      documentos: [
        'Documento de identificacion del solicitante',
        'Datos de la persona o registro a certificar',
        'Poder o autorizacion si aplica'
      ],
      pasos: [
        'Seleccione el certificado requerido.',
        'Agende cita en sede habilitada.',
        'Radique la solicitud con soportes.',
        'Retire o reciba respuesta segun canal definido por la sede.'
      ],
      observaciones: [
        'Los tiempos pueden variar por tipo de certificacion.',
        'Algunos certificados requieren validaciones adicionales.'
      ]
    },
    {
      slug: 'colombianos-exterior',
      titulo: 'Colombianos en el exterior',
      resumen: 'Orientacion para tramites de identificacion y registro para colombianos fuera del pais.',
      presencial: 'La atencion se realiza presencialmente en consulados o puntos autorizados.',
      documentos: [
        'Documento colombiano vigente o soporte de identidad',
        'Documento de permanencia en el pais de residencia',
        'Soportes segun tipo de tramite'
      ],
      pasos: [
        'Verifique requisitos del consulado correspondiente.',
        'Agende cita presencial consular.',
        'Presente documentos en fecha y hora.',
        'Haga seguimiento del tramite por los canales oficiales del consulado.'
      ],
      observaciones: [
        'No se realizan entregas finales virtuales para documentos fisicos.',
        'Los tiempos dependen de rutas diplomaticas y logisticas.'
      ]
    },
    {
      slug: 'tarifas',
      titulo: 'Tarifas',
      resumen: 'Referencias informativas de costos de tramites de registro e identificacion.',
      presencial: 'La validacion y pago oficial se confirma en sede fisica al momento de la atencion.',
      documentos: [
        'Documento de identificacion',
        'Comprobante de pago si ya fue generado',
        'Soporte del tramite solicitado'
      ],
      pasos: [
        'Consulte tarifa estimada del tramite.',
        'Agende cita para validacion presencial.',
        'Confirme valor vigente con el funcionario.',
        'Realice radicacion presencial del tramite.'
      ],
      observaciones: [
        'Las tarifas pueden cambiar segun disposiciones vigentes.',
        'La sede confirma el valor final aplicable.'
      ]
    },
    {
      slug: 'consulta-registro-civil',
      titulo: 'Consulta registro civil',
      resumen: 'Informacion para consultas orientativas sobre estado o datos de registro civil.',
      presencial: 'Las consultas formales y certificadas se atienden de manera presencial.',
      documentos: [
        'Documento de identidad del solicitante',
        'Datos basicos del registro consultado',
        'Autorizacion cuando se trate de terceros'
      ],
      pasos: [
        'Prepare datos de identificacion del registro.',
        'Agende cita para atencion en sede.',
        'Solicite la consulta formal al funcionario.',
        'Reciba orientacion y pasos siguientes.'
      ],
      observaciones: [
        'La informacion entregada depende de restricciones legales.',
        'Algunas consultas requieren validacion de legitimidad.'
      ]
    },
    {
      slug: 'estado-documento',
      titulo: 'Consulta estado de tu documento',
      resumen: 'Guia para seguimiento del estado de documentos de identificacion.',
      presencial: 'La entrega y validacion final del documento es presencial en Registraduria.',
      documentos: [
        'Numero de documento o comprobante de tramite',
        'Documento de identidad vigente cuando exista',
        'Soporte de solicitud del documento'
      ],
      pasos: [
        'Verifique estado preliminar del documento.',
        'Agende cita si requiere aclaracion presencial.',
        'Asista a sede para validacion y entrega.',
        'Confirme recepcion conforme del documento.'
      ],
      observaciones: [
        'El estado puede cambiar segun fase de produccion.',
        'La entrega se hace al titular o autorizado.'
      ]
    }
  ];

  getDetallePorSlug(slug: string): RegistroCivilDetalle {
    const detalle = this.detalles.find((item) => item.slug === slug);
    if (detalle) {
      return detalle;
    }

    return {
      slug,
      titulo: 'Servicio de registro civil e identificacion',
      resumen: 'Informacion general del servicio seleccionado.',
      presencial: 'Este servicio se realiza presencialmente en la Registraduria.',
      documentos: ['Documento de identidad', 'Soportes del tramite'],
      pasos: ['Revise requisitos', 'Agende cita', 'Asista presencialmente'],
      observaciones: ['No se realizan tramites virtuales para esta gestion.']
    };
  }

  getTramitesParaCita(): string[] {
    return [
      'Registro civil',
      'Tarjeta de identidad',
      'Cedula de ciudadania',
      'Certificados',
      'Consulta registro civil',
      'Consulta estado de documento'
    ];
  }

  getSedes(): string[] {
    return [
      'Sede principal nacional',
      'Sede regional',
      'Registraduria municipal',
      'Punto auxiliar de atencion'
    ];
  }

  getHorarios(): string[] {
    return ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
  }

  agendarCita(data: CitaRegistroCivilRequest): Observable<CitaRegistroCivilResult> {
    const codigo = `RC-${data.numeroDocumento.slice(-4)}-${Math.floor(Math.random() * 900 + 100)}`;
    return of({
      ok: true,
      codigo,
      mensaje:
        'Cita registrada. Recuerde que el tramite se realiza presencialmente; debe presentar los documentos originales en la sede seleccionada.'
    });
  }
}
