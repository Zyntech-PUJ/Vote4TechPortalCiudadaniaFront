import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LugarVotacionService, ConsultaLugarVotacionResult } from '../../services/lugar-votacion.service';
import { NumericOnlyDirective } from '../../shared/directives/numeric-only.directive';

@Component({
  selector: 'app-lugar-votacion-page',
  standalone: true,
  imports: [RouterLink, FormsModule, NumericOnlyDirective],
  templateUrl: './lugar-votacion-page.component.html',
  styleUrl: './lugar-votacion-page.component.css'
})
export class LugarVotacionPageComponent {
  private readonly lugarVotacionSvc = inject(LugarVotacionService);

  cedula = '';
  eleccion = '';
  resultado: ConsultaLugarVotacionResult | null = null;

  readonly elecciones = this.lugarVotacionSvc.getElecciones();

  consultar() {
    if (!this.cedula.trim() || !this.eleccion) return;
    this.lugarVotacionSvc.consultar(this.cedula, this.eleccion).subscribe(res => {
      this.resultado = res;
    });
  }
}
