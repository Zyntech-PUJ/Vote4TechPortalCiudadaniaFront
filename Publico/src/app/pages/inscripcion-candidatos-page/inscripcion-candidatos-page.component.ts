import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inscripcion-candidatos-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inscripcion-candidatos-page.component.html',
  styleUrl: './inscripcion-candidatos-page.component.css'
})
export class InscripcionCandidatosPageComponent {
  protected readonly documentos = [
    'Documento de identidad original y copia ampliada al 150%.',
    'Formulario oficial de inscripcion diligenciado y firmado.',
    'Aval del partido, movimiento politico o grupo significativo de ciudadanos (si aplica).',
    'Fotografia reciente tipo documento en fondo claro.',
    'Certificados y soportes exigidos por la normativa vigente para el cargo a postularse.',
    'Declaracion de no inhabilidades e incompatibilidades, segun corresponda.'
  ];

  protected readonly pasos = [
    'Acercarse personalmente a la Registraduria de la circunscripcion correspondiente.',
    'Solicitar turno de atencion para el tramite de inscripcion de candidatos.',
    'Entregar la documentacion completa para validacion.',
    'Subsanar observaciones en los plazos indicados por el funcionario.',
    'Conservar el comprobante de radicacion del tramite.'
  ];
}
