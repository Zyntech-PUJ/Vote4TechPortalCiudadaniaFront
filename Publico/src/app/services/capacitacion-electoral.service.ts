import { Injectable } from '@angular/core';

export interface CapacitacionItem {
  badge: string;
  title: string;
}

@Injectable({ providedIn: 'root' })
export class CapacitacionElectoralService {
  getItems(): CapacitacionItem[] {
    return [
      { badge: 'Presidencia', title: 'Elecciones Presidente y Vicepresidente' },
      { badge: 'Atipicas', title: 'Elecciones Atipicas (Nuevas o complementarias)' },
      { badge: 'Congreso', title: 'Elecciones del Congreso de la Republica y Consulta' },
      { badge: 'Citrep', title: 'Elecciones Transitorias Especiales de Paz (CITREP)' },
      { badge: 'Consultas', title: 'Consulta Partidos' },
      { badge: 'Juventud', title: 'Elecciones Consejos Municipales y Locales de Juventud' },
      { badge: 'Participa', title: 'Mecanismos de Participacion Ciudadana' },
      { badge: 'Jueces', title: 'Elecciones jueces de paz y reconsideracion' },
      { badge: 'Territorial', title: 'Elecciones Territoriales 2023' }
    ];
  }
}
