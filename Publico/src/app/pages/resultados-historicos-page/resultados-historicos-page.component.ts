import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { ResultadosHistoricosService } from '../../services/resultados-historicos.service';

@Component({
  selector: 'app-resultados-historicos-page',
  standalone: true,
  imports: [FormsModule, RouterLinkWithHref],
  templateUrl: './resultados-historicos-page.component.html',
  styleUrl: './resultados-historicos-page.component.css'
})
export class ResultadosHistoricosPageComponent {
  private readonly resultadosSvc = inject(ResultadosHistoricosService);

  anio = '';
  departamento = '';
  mensaje = '';

  readonly config = this.resultadosSvc.getConfig();

  consultar(): void {
    if (!this.anio || !this.departamento) {
      this.mensaje = 'Seleccione año y departamento.';
      return;
    }

    this.mensaje = `Consulta mock: censo historico ${this.anio} para ${this.departamento}.`;
  }
}
