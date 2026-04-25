import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NumericOnlyDirective } from '../../shared/directives/numeric-only.directive';
import { ComprobanteInscripcionService } from '../../services/comprobante-inscripcion.service';

@Component({
  selector: 'app-comprobante-inscripcion-page',
  standalone: true,
  imports: [RouterLink, FormsModule, NumericOnlyDirective],
  templateUrl: './comprobante-inscripcion-page.component.html',
  styleUrl: './comprobante-inscripcion-page.component.css'
})
export class ComprobanteInscripcionPageComponent {
  private readonly comprobanteSvc = inject(ComprobanteInscripcionService);

  tipoDocumento = 'CC';
  cedula = '';
  fechaExpedicion = '';
  fechaNacimiento = '';
  resultado = '';

  readonly config = this.comprobanteSvc.getConfig();

  ingresar(): void {
    if (!this.cedula || !this.fechaExpedicion || !this.fechaNacimiento) {
      this.resultado = 'Complete los datos solicitados.';
      return;
    }

    this.resultado = 'Consulta mock enviada. Su comprobante sera validado cuando el sistema real este disponible.';
  }
}
