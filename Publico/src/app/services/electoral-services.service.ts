import { Injectable } from '@angular/core';

export type ServiceCategory = 'priority' | 'info' | 'inscription';

export interface ElectoralService {
  label: string;
  category: ServiceCategory;
  route?: string;
}

@Injectable({ providedIn: 'root' })
export class ElectoralServicesService {
  getServices(): ElectoralService[] {
    return [
      { label: 'Lugar de votación',                    category: 'priority',   route: '/electoral/lugar-de-votacion' },
      { label: 'Consulta jurado de votación',           category: 'priority',   route: '/electoral/consulta-jurado-votacion' },
      { label: 'Consulta sanción',                      category: 'priority',   route: '/electoral/consulta-sancion' },
      { label: 'Consulta comprobante de inscripción',   category: 'priority',   route: '/electoral/comprobante-inscripcion' },
      { label: 'Censo electoral',                       category: 'info',       route: '/electoral/censo-electoral' },
      { label: 'Capacitación electoral',                category: 'info',       route: '/electoral/capacitacion-electoral' },
      { label: 'Inscripción de candidatos',             category: 'inscription', route: '/electoral/inscripcion-candidatos' },
      { label: 'Mecanismos de participación ciudadana', category: 'info',       route: '/electoral/mecanismos-participacion' },
      { label: 'Certificado de votación',               category: 'inscription', route: '/electoral/certificado-votacion' },
      { label: 'Resultados históricos',                 category: 'priority',   route: '/electoral/resultados-historicos' },
    ];
  }
}
