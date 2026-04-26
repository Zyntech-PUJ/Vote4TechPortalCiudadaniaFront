import { Injectable } from '@angular/core';

export interface RegistroCivilService {
  label: string;
  route?: string;
}

@Injectable({ providedIn: 'root' })
export class RegistroCivilServicesService {
  getServices(): RegistroCivilService[] {
    return [
      { label: 'Registro civil', route: '/registro-civil-e-identificacion/registro-civil' },
      { label: 'Tarjeta de identidad', route: '/registro-civil-e-identificacion/tarjeta-identidad' },
      { label: 'Cedula de ciudadania', route: '/registro-civil-e-identificacion/cedula-ciudadania' },
      { label: 'Certificados', route: '/registro-civil-e-identificacion/certificados' },
      { label: 'Colombianos en el exterior', route: '/registro-civil-e-identificacion/colombianos-exterior' },
      { label: 'Tarifas', route: '/registro-civil-e-identificacion/tarifas' },
      { label: 'Consulta registro civil', route: '/registro-civil-e-identificacion/consulta-registro-civil' },
      { label: 'Consulta estado de tu documento', route: '/registro-civil-e-identificacion/estado-documento' },
      { label: 'Citas', route: '/registro-civil-e-identificacion/citas-presenciales' },
    ];
  }
}
