import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ResultadosHistoricosService, TipoEleccionConfig, CandidatoMock } from '../../services/resultados-historicos.service';

@Component({
  selector: 'app-resultados-historicos-page',
  standalone: true,
  imports: [FormsModule, RouterLinkWithHref, DecimalPipe],
  templateUrl: './resultados-historicos-page.component.html',
  styleUrl: './resultados-historicos-page.component.css'
})
export class ResultadosHistoricosPageComponent implements OnInit {
  private readonly resultadosSvc = inject(ResultadosHistoricosService);

  // Opciones base
  tiposEleccion: TipoEleccionConfig[] = [];
  
  // Estado de los selects
  tipoEleccionId = '';
  tipoEleccionSeleccionada: TipoEleccionConfig | null = null;
  
  anio = '';
  aniosDisponibles: string[] = [];
  
  ubicacion = '';
  ubicacionesDisponibles: string[] = [];

  // Resultados
  resultados: CandidatoMock[] | null = null;
  mensaje = '';

  ngOnInit() {
    this.tiposEleccion = this.resultadosSvc.getTiposEleccion();
  }

  onTipoEleccionChange(): void {
    // Limpiar dependientes
    this.anio = '';
    this.ubicacion = '';
    this.resultados = null;
    this.mensaje = '';

    const seleccion = this.tiposEleccion.find(t => t.id === this.tipoEleccionId);
    if (!seleccion) {
      this.tipoEleccionSeleccionada = null;
      this.aniosDisponibles = [];
      this.ubicacionesDisponibles = [];
      return;
    }

    this.tipoEleccionSeleccionada = seleccion;
    this.aniosDisponibles = seleccion.aniosValidos;

    if (seleccion.filtroGeografico === 'Departamento') {
      this.ubicacionesDisponibles = this.resultadosSvc.getDepartamentos();
    } else if (seleccion.filtroGeografico === 'Ciudad') {
      this.ubicacionesDisponibles = this.resultadosSvc.getCiudades();
    } else {
      this.ubicacionesDisponibles = [];
    }
  }

  onFiltroChange(): void {
    this.resultados = null;
    this.mensaje = '';
  }

  consultar(): void {
    if (!this.tipoEleccionSeleccionada || !this.anio) {
      this.mensaje = 'Por favor, complete los filtros requeridos.';
      return;
    }

    if (this.tipoEleccionSeleccionada.filtroGeografico !== 'Nacional' && !this.ubicacion) {
      this.mensaje = `Seleccione el ${this.tipoEleccionSeleccionada.filtroGeografico.toLowerCase()} correspondiente.`;
      return;
    }

    this.mensaje = '';
    this.resultados = this.resultadosSvc.getResultadosMock();
  }
}
