import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe, SlicePipe } from '@angular/common';

export interface CensoHistorico {
  anio: number;
  tipoEleccion: string;
  totalVotantes: number;
  variacion: number | null;  // % vs censo anterior
  puestosHabilitados: number;
  departamentosActivos: number;
}

@Component({
  selector: 'app-censos-historicos-page',
  standalone: true,
  imports: [RouterLink, DecimalPipe, SlicePipe],
  templateUrl: './censos-historicos-page.component.html',
  styleUrl: './censos-historicos-page.component.css'
})
export class CensosHistoricosPageComponent {

  readonly censos: CensoHistorico[] = [
    {
      anio: 2026,
      tipoEleccion: 'Presidencial y Congreso',
      totalVotantes: 40_234_812,
      variacion: 2.8,
      puestosHabilitados: 12_487,
      departamentosActivos: 32
    },
    {
      anio: 2023,
      tipoEleccion: 'Elecciones Regionales',
      totalVotantes: 39_142_080,
      variacion: 1.5,
      puestosHabilitados: 12_241,
      departamentosActivos: 32
    },
    {
      anio: 2022,
      tipoEleccion: 'Presidencial y Congreso',
      totalVotantes: 38_563_440,
      variacion: 3.2,
      puestosHabilitados: 12_074,
      departamentosActivos: 32
    },
    {
      anio: 2019,
      tipoEleccion: 'Elecciones Regionales',
      totalVotantes: 37_364_212,
      variacion: 2.1,
      puestosHabilitados: 11_820,
      departamentosActivos: 32
    },
    {
      anio: 2018,
      tipoEleccion: 'Presidencial y Congreso',
      totalVotantes: 36_393_698,
      variacion: null,
      puestosHabilitados: 11_563,
      departamentosActivos: 32
    }
  ];

  /** Variation label + CSS modifier */
  variacionLabel(v: number | null): string {
    if (v === null) return '–';
    return (v > 0 ? '+' : '') + v.toFixed(1) + '%';
  }

  variacionClass(v: number | null): string {
    if (v === null) return 'hist-var--neutral';
    return v > 0 ? 'hist-var--up' : 'hist-var--down';
  }
}
