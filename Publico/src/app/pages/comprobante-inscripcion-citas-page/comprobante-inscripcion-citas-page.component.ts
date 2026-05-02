import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NumericOnlyDirective } from '../../shared/directives/numeric-only.directive';
import {
  CitaComprobanteRequest,
  CitaComprobanteResult,
  ComprobanteInscripcionCitasService
} from '../../services/comprobante-inscripcion-citas.service';

@Component({
  selector: 'app-comprobante-inscripcion-citas-page',
  standalone: true,
  imports: [RouterLink, FormsModule, NumericOnlyDirective],
  templateUrl: './comprobante-inscripcion-citas-page.component.html',
  styleUrl: './comprobante-inscripcion-citas-page.component.css'
})
export class ComprobanteInscripcionCitasPageComponent {
  private readonly citasSvc = inject(ComprobanteInscripcionCitasService);

  cedula = '';
  nombres = '';
  correo = '';
  telefono = '';
  sede = '';
  fecha = '';
  hora = '';

  resultado: CitaComprobanteResult | null = null;
  validationError = '';
  notification = '';
  isSubmitting = false;
  isTemporarilyBlocked = false;

  private readonly correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  private readonly celularColombiaRegex = /^3\d{9}$/;
  private readonly bloqueoMs = 4000;

  readonly sedes = this.citasSvc.getSedes();
  readonly horarios = this.citasSvc.getHorarios();

  get submitButtonLabel(): string {
    if (this.isSubmitting) {
      return 'Enviando solicitud...';
    }

    if (this.isTemporarilyBlocked) {
      return 'Espere unos segundos...';
    }

    return 'Agendar cita';
  }

  agendar(): void {
    if (this.isSubmitting || this.isTemporarilyBlocked) {
      return;
    }

    const payload: CitaComprobanteRequest = {
      cedula: this.cedula.trim(),
      nombres: this.nombres.trim(),
      correo: this.correo.trim(),
      telefono: this.telefono.trim(),
      sede: this.sede.trim(),
      fecha: this.fecha,
      hora: this.hora
    };

    this.validationError = '';
    this.notification = '';

    if (!payload.cedula || !payload.nombres || !payload.correo || !payload.telefono || !payload.sede || !payload.fecha || !payload.hora) {
      this.validationError = 'Completa todos los campos para agendar la cita.';
      return;
    }

    if (!this.correoRegex.test(payload.correo)) {
      this.validationError = 'Ingrese un correo electronico valido.';
      return;
    }

    if (!this.celularColombiaRegex.test(payload.telefono)) {
      this.validationError = 'Ingrese un celular colombiano valido (10 digitos, inicia por 3).';
      return;
    }

    this.isSubmitting = true;
    this.citasSvc.agendar(payload).subscribe({
      next: (res) => {
        this.resultado = res;
        this.notification = 'Solicitud aceptada. Su cita fue registrada correctamente.';
        this.isTemporarilyBlocked = true;
        setTimeout(() => {
          this.isTemporarilyBlocked = false;
        }, this.bloqueoMs);
      },
      error: () => {
        this.validationError = 'No fue posible procesar la solicitud. Intente nuevamente.';
        this.isSubmitting = false;
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
