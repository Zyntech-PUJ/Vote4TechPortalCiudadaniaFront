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

  readonly sedes = this.citasSvc.getSedes();
  readonly horarios = this.citasSvc.getHorarios();

  agendar(): void {
    const payload: CitaComprobanteRequest = {
      cedula: this.cedula,
      nombres: this.nombres,
      correo: this.correo,
      telefono: this.telefono,
      sede: this.sede,
      fecha: this.fecha,
      hora: this.hora
    };

    if (!payload.cedula || !payload.nombres || !payload.correo || !payload.telefono || !payload.sede || !payload.fecha || !payload.hora) {
      return;
    }

    this.citasSvc.agendar(payload).subscribe((res) => {
      this.resultado = res;
    });
  }
}
