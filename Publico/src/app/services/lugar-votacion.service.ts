import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ConsultaLugarVotacionResult {
  found: boolean;
  puesto?: string;
  direccion?: string;
  municipio?: string;
  mesa?: string;
}

@Injectable({ providedIn: 'root' })
export class LugarVotacionService {
  private readonly endpoint = '/api/electoral/lugar-votacion';

  constructor(private readonly http: HttpClient) {}

  /**
   * Consulta el lugar de votación de un ciudadano.
   * Cuando se integre con el backend real, reemplazar el cuerpo
   * por una llamada HttpClient: this.http.get<...>(`/api/lugar-votacion?cedula=...`)
   */
  consultar(cedula: string): Observable<ConsultaLugarVotacionResult> {
    if (!cedula.trim()) {
      return of({ found: false });
    }
    return this.http.get<ConsultaLugarVotacionResult>(this.endpoint, {
      params: { cedula }
    }).pipe(
      catchError(() => of({ found: false }))
    );
  }
}
