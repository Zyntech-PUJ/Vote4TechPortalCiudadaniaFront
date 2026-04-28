import { Injectable } from '@angular/core';

export type FiltroGeografico = 'Nacional' | 'Departamento' | 'Ciudad';

export interface TipoEleccionConfig {
  id: string;
  nombre: string;
  aniosValidos: string[];
  filtroGeografico: FiltroGeografico;
}

export interface CandidatoMock {
  nombre: string;
  partido: string;
  votos: number;
  porcentaje: number;
  color: string;
}

@Injectable({ providedIn: 'root' })
export class ResultadosHistoricosService {
  
  getTiposEleccion(): TipoEleccionConfig[] {
    return [
      { id: 'presidencia', nombre: 'Presidencia', aniosValidos: ['2026', '2022', '2018', '2014', '2010'], filtroGeografico: 'Nacional' },
      { id: 'senado', nombre: 'Senado (Congreso)', aniosValidos: ['2026', '2022', '2018', '2014', '2010'], filtroGeografico: 'Nacional' },
      { id: 'camara', nombre: 'Cámara (Congreso)', aniosValidos: ['2026', '2022', '2018', '2014', '2010'], filtroGeografico: 'Departamento' },
      { id: 'gobernacion', nombre: 'Gobernación', aniosValidos: ['2023', '2019', '2015', '2011'], filtroGeografico: 'Departamento' },
      { id: 'asamblea', nombre: 'Asamblea', aniosValidos: ['2023', '2019', '2015', '2011'], filtroGeografico: 'Departamento' },
      { id: 'alcaldia', nombre: 'Alcaldía', aniosValidos: ['2023', '2019', '2015', '2011'], filtroGeografico: 'Ciudad' },
      { id: 'concejo', nombre: 'Concejo', aniosValidos: ['2023', '2019', '2015', '2011'], filtroGeografico: 'Ciudad' },
    ];
  }

  getDepartamentos(): string[] {
    return [
      'Amazonas', 'Antioquia', 'Atlantico', 'Bogota D.C.', 'Bolivar', 'Boyaca', 'Caldas', 'Cauca', 'Cesar', 'Cordoba',
      'Cundinamarca', 'Huila', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Quindio', 'Risaralda', 'Santander', 'Sucre', 'Tolima', 'Valle del Cauca'
    ];
  }

  getCiudades(): string[] {
    // Lista mock de ciudades principales
    return [
      'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Cúcuta', 'Bucaramanga', 'Pereira', 'Santa Marta', 'Ibagué',
      'Pasto', 'Manizales', 'Neiva', 'Villavicencio', 'Armenia', 'Valledupar', 'Montería', 'Sincelejo', 'Popayán', 'Tunja'
    ].sort();
  }

  getResultadosMock(): CandidatoMock[] {
    // Generar datos aleatorios simulando unos resultados de elección
    const partidos = [
      { nombre: 'Partido Conservador', color: '#00529b' },
      { nombre: 'Partido Liberal', color: '#d32f2f' },
      { nombre: 'Pacto Histórico', color: '#8e24aa' },
      { nombre: 'Centro Democrático', color: '#1976d2' },
      { nombre: 'Partido Verde', color: '#388e3c' },
      { nombre: 'Cambio Radical', color: '#f57c00' }
    ];

    const candidatosNames = ['Juan Pérez', 'María Gómez', 'Carlos Rodríguez', 'Ana Martínez', 'Luis Fernando López'];
    
    // Seleccionamos de 3 a 5 candidatos al azar
    const numCandidatos = Math.floor(Math.random() * 3) + 3;
    let resultados: CandidatoMock[] = [];
    let totalVotos = 0;

    for (let i = 0; i < numCandidatos; i++) {
      const votos = Math.floor(Math.random() * 5000000) + 100000;
      totalVotos += votos;
      resultados.push({
        nombre: candidatosNames[i],
        partido: partidos[i].nombre,
        votos: votos,
        porcentaje: 0,
        color: partidos[i].color
      });
    }

    // Calcular porcentajes y ordenar por cantidad de votos (de mayor a menor)
    resultados = resultados.map(r => ({
      ...r,
      porcentaje: Number(((r.votos / totalVotos) * 100).toFixed(1))
    })).sort((a, b) => b.votos - a.votos);

    return resultados;
  }
}
