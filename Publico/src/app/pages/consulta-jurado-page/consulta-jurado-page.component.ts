import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ConsultaJuradoConfig,
  ConsultaJuradoResult,
  ConsultaJuradoService
} from '../../services/consulta-jurado.service';

@Component({
  selector: 'app-consulta-jurado-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './consulta-jurado-page.component.html',
  styleUrl: './consulta-jurado-page.component.css'
})
export class ConsultaJuradoPageComponent {
  private readonly juradoSvc = inject(ConsultaJuradoService);

  cedula = '';
  resultado: ConsultaJuradoResult | null = null;
  readonly config: ConsultaJuradoConfig = this.juradoSvc.getConfig();

  consultar(): void {
    if (!this.cedula.trim()) return;

    this.juradoSvc.consultarJurado(this.cedula).subscribe(res => {
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
