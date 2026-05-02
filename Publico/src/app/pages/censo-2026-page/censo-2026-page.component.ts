import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

export interface DepartamentoCenso {
  departamento: string;
  hombres: number;
  mujeres: number;
  total: number;
}

export interface GrupoEtario {
  rango: string;
  porcentaje: number;
  cantidad: number;
}

@Component({
  selector: 'app-censo-2026-page',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './censo-2026-page.component.html',
  styleUrl: './censo-2026-page.component.css'
})
export class Censo2026PageComponent {

  readonly fechaCorte = '7 de abril de 2026';
  readonly totalVotantes = 40_234_812;
  readonly totalHombres = 19_458_320;
  readonly totalMujeres = 20_776_492;
  readonly totalMunicipios = 1_122;
  readonly totalPuestos = 12_487;

  readonly departamentos: DepartamentoCenso[] = [
    { departamento: 'Bogotá D.C.',      hombres: 3_521_440, mujeres: 3_874_310, total: 7_395_750 },
    { departamento: 'Antioquia',         hombres: 2_743_180, mujeres: 2_962_540, total: 5_705_720 },
    { departamento: 'Valle del Cauca',   hombres: 1_983_250, mujeres: 2_104_870, total: 4_088_120 },
    { departamento: 'Cundinamarca',      hombres: 1_204_310, mujeres: 1_298_460, total: 2_502_770 },
    { departamento: 'Atlántico',         hombres: 1_062_840, mujeres: 1_143_210, total: 2_206_050 },
    { departamento: 'Bolívar',           hombres:   924_510, mujeres:   987_340, total: 1_911_850 },
    { departamento: 'Santander',         hombres:   840_220, mujeres:   903_680, total: 1_743_900 },
    { departamento: 'Córdoba',           hombres:   712_940, mujeres:   764_080, total: 1_477_020 },
    { departamento: 'Tolima',            hombres:   612_310, mujeres:   648_920, total: 1_261_230 },
    { departamento: 'Cauca',             hombres:   534_870, mujeres:   573_140, total: 1_108_010 },
    { departamento: 'Nariño',            hombres:   517_230, mujeres:   549_460, total: 1_066_690 },
    { departamento: 'Norte de Santander',hombres:   492_810, mujeres:   527_360, total: 1_020_170 },
    { departamento: 'Risaralda',         hombres:   438_140, mujeres:   472_890, total:   911_030 },
    { departamento: 'Huila',             hombres:   403_620, mujeres:   431_240, total:   834_860 },
    { departamento: 'Meta',              hombres:   374_210, mujeres:   399_580, total:   773_790 },
    { departamento: 'Boyacá',            hombres:   342_870, mujeres:   371_090, total:   713_960 },
    { departamento: 'Cesar',             hombres:   318_450, mujeres:   341_230, total:   659_680 },
    { departamento: 'Magdalena',         hombres:   304_820, mujeres:   327_360, total:   632_180 },
    { departamento: 'Caldas',            hombres:   284_310, mujeres:   302_640, total:   586_950 },
    { departamento: 'Sucre',             hombres:   261_440, mujeres:   279_820, total:   541_260 },
    { departamento: 'La Guajira',        hombres:   238_790, mujeres:   256_430, total:   495_220 },
    { departamento: 'Quindío',           hombres:   218_340, mujeres:   234_650, total:   452_990 },
    { departamento: 'Chocó',             hombres:   187_210, mujeres:   198_840, total:   386_050 },
    { departamento: 'Caquetá',           hombres:   152_630, mujeres:   162_310, total:   314_940 },
    { departamento: 'Exterior',          hombres:   146_380, mujeres:   158_940, total:   305_320 },
    { departamento: 'Otros departamentos', hombres: 637_010, mujeres: 708_080, total: 1_345_090 },
  ];

  readonly gruposEtarios: GrupoEtario[] = [
    { rango: '18 – 25 años', porcentaje: 14.8, cantidad: 5_954_752 },
    { rango: '26 – 35 años', porcentaje: 22.3, cantidad: 8_972_362 },
    { rango: '36 – 45 años', porcentaje: 21.6, cantidad: 8_690_719 },
    { rango: '46 – 55 años', porcentaje: 18.4, cantidad: 7_403_205 },
    { rango: '56 – 65 años', porcentaje: 13.1, cantidad: 5_270_760 },
    { rango: '66 – 75 años', porcentaje:  6.8, cantidad: 2_735_967 },
    { rango: '76 años o más', porcentaje: 3, cantidad: 1_207_044 },
  ];

  porcentaje(valor: number): number {
    return Math.round((valor / this.totalVotantes) * 1000) / 10;
  }
}
