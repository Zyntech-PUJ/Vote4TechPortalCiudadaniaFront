import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  CitaRegistroCivilRequest,
  CitaRegistroCivilResult,
  RegistroCivilInformacionService
} from '../../services/registro-civil-informacion.service';

@Component({
  selector: 'app-registro-civil-citas-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './registro-civil-citas-page.component.html',
  styleUrl: './registro-civil-citas-page.component.css'
})
export class RegistroCivilCitasPageComponent {
  private readonly infoSvc = inject(RegistroCivilInformacionService);

  tramite = '';
  tipoDocumento = 'CC';
  numeroDocumento = '';
  nombres = '';
  correo = '';
  telefono = '';
  sede = '';
  fecha = '';
  hora = '';

  resultado: CitaRegistroCivilResult | null = null;

  readonly tramites = this.infoSvc.getTramitesParaCita();
  readonly sedes = this.infoSvc.getSedes();
  readonly horarios = this.infoSvc.getHorarios();

  agendar(): void {
    const payload: CitaRegistroCivilRequest = {
      tramite: this.tramite,
      tipoDocumento: this.tipoDocumento,
      numeroDocumento: this.numeroDocumento,
      nombres: this.nombres,
      correo: this.correo,
      telefono: this.telefono,
      sede: this.sede,
      fecha: this.fecha,
      hora: this.hora
    };

    if (
      !payload.tramite ||
      !payload.numeroDocumento ||
      !payload.nombres ||
      !payload.correo ||
      !payload.telefono ||
      !payload.sede ||
      !payload.fecha ||
      !payload.hora
    ) {
      return;
    }

    this.infoSvc.agendarCita(payload).subscribe((res) => {
      this.resultado = res;
    });
  }
}
