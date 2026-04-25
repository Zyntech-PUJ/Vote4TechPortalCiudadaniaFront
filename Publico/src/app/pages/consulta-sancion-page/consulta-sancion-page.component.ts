import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ConsultaSancionConfig,
  ConsultaSancionResult,
  ConsultaSancionService
} from '../../services/consulta-sancion.service';

@Component({
  selector: 'app-consulta-sancion-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './consulta-sancion-page.component.html',
  styleUrl: './consulta-sancion-page.component.css'
})
export class ConsultaSancionPageComponent {
  private readonly sancionSvc = inject(ConsultaSancionService);

  cedula = '';
  resultado: ConsultaSancionResult | null = null;
  readonly config: ConsultaSancionConfig = this.sancionSvc.getConfig();

  consultar(): void {
    if (!this.cedula.trim()) return;

    this.sancionSvc.consultarSancion(this.cedula).subscribe(res => {
      this.resultado = res;
    });
  }

  sanitizeCedula(): void {
    this.cedula = this.cedula.replaceAll(/\D+/g, '');
  }

  allowOnlyDigits(event: KeyboardEvent): void {
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    const allowedKeys = new Set([
      'Backspace',
      'Delete',
      'Tab',
      'Escape',
      'Enter',
      'ArrowLeft',
      'ArrowRight',
      'Home',
      'End'
    ]);

    if (allowedKeys.has(event.key)) {
      return;
    }

    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }
}
