import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ConsultaLugarVotacionResult {
  found: boolean;
  puesto?: string;
  direccion?: string;
  municipio?: string;
  mesa?: string;
}

@Injectable({ providedIn: 'root' })
export class LugarVotacionService {
  getElecciones(): string[] {
    return [
      'Lugar de votación actual',
      'Elecciones Congreso 2026',
      'Elecciones Presidenciales 2026',
      'Consulta Popular 2025',
    ];
  }

  /**
   * Consulta el lugar de votación de un ciudadano.
   * Cuando se integre con el backend real, reemplazar el cuerpo
   * por una llamada HttpClient: this.http.get<...>(`/api/lugar-votacion?cedula=...`)
   */
  consultar(cedula: string, eleccion: string): Observable<ConsultaLugarVotacionResult> {
    // Reemplazar con llamada HTTP real cuando el backend esté disponible:
    // return this.http.get<ConsultaLugarVotacionResult>(
    //   `/api/electoral/lugar-votacion?cedula=${cedula}&eleccion=${encodeURIComponent(eleccion)}`
    // );
    return of({ found: false });
  }
}
