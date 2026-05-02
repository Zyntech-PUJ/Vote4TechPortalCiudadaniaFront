import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NumericOnlyDirective } from '../../shared/directives/numeric-only.directive';
import {
  CitaRegistroCivilRequest,
  CitaRegistroCivilResult,
  RegistroCivilInformacionService
} from '../../services/registro-civil-informacion.service';

@Component({
  selector: 'app-registro-civil-citas-page',
  standalone: true,
  imports: [RouterLink, FormsModule, NumericOnlyDirective],
  templateUrl: './registro-civil-citas-page.component.html',
  styleUrl: './registro-civil-citas-page.component.css'
})
export class RegistroCivilCitasPageComponent {
  private readonly infoSvc = inject(RegistroCivilInformacionService);

  tramite = '';
  tipoDocumento = 'CC';
  numeroDocumento = '';
  nombres = '';
  correo = '';
  telefono = '';
  sede = '';
  fecha = '';
  hora = '';

  resultado: CitaRegistroCivilResult | null = null;
  validationError = '';
  notification = '';
  isSubmitting = false;
  isTemporarilyBlocked = false;

  private readonly correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  private readonly celularColombiaRegex = /^3\d{9}$/;
  private readonly bloqueoMs = 4000;

  readonly tramites = this.infoSvc.getTramitesParaCita();
  readonly sedes = this.infoSvc.getSedes();
  readonly horarios = this.infoSvc.getHorarios();

  get submitButtonLabel(): string {
    if (this.isSubmitting) {
      return 'Enviando solicitud...';
    }

    if (this.isTemporarilyBlocked) {
      return 'Espere unos segundos...';
    }

    return 'Agendar cita presencial';
  }

  agendar(): void {
    if (this.isSubmitting || this.isTemporarilyBlocked) {
      return;
    }

    const payload: CitaRegistroCivilRequest = {
      tramite: this.tramite.trim(),
      tipoDocumento: this.tipoDocumento,
      numeroDocumento: this.numeroDocumento.trim(),
      nombres: this.nombres.trim(),
      correo: this.correo.trim(),
      telefono: this.telefono.trim(),
      sede: this.sede.trim(),
      fecha: this.fecha,
      hora: this.hora
    };

    this.validationError = '';
    this.notification = '';

    if (
      !payload.tramite ||
      !payload.numeroDocumento ||
      !payload.nombres ||
      !payload.correo ||
      !payload.telefono ||
      !payload.sede ||
      !payload.fecha ||
      !payload.hora
    ) {
      this.validationError = 'Complete todos los campos para agendar su cita.';
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
    this.infoSvc.agendarCita(payload).subscribe({
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
