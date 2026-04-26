import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ConsultaLugarVotacionResult {
  found: boolean;
  puesto?: string;
  direccion?: string;
  municipio?: string;
  mesa?: string;
}

interface ResponseEleccionDTO {
  idEleccion: number;
  nombre: string;
  estado: string;
}

@Injectable({ providedIn: 'root' })
export class LugarVotacionService {
  private readonly http = inject(HttpClient);

  getElecciones(): Observable<string[]> {
    return this.http.get<ResponseEleccionDTO[]>('/api/eleccion/elecciones').pipe(
      map(elecciones => elecciones.map(e => e.nombre)),
      catchError(() =>
        of(['Lugar de votacion actual', 'Elecciones Congreso 2026', 'Elecciones Presidenciales 2026'])
      )
    );
  }

  consultar(cedula: string, eleccion: string): Observable<ConsultaLugarVotacionResult> {
    return of({ found: false });
  }
}
