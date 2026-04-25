import { Injectable } from '@angular/core';

export interface RegistroCivilService {
  label: string;
  route?: string;
}

@Injectable({ providedIn: 'root' })
export class RegistroCivilServicesService {
  getServices(): RegistroCivilService[] {
    return [
      { label: 'Registro civil'                    },
      { label: 'Tarjeta de identidad'              },
      { label: 'Cedula de ciudadania'              },
      { label: 'Certificados'                      },
      { label: 'Colombianos en el exterior'        },
      { label: 'Tarifas'                           },
      { label: 'Consulta registro civil'           },
      { label: 'Consulta estado de tu documento'   },
      { label: 'Citas'                             },
    ];
  }
}
