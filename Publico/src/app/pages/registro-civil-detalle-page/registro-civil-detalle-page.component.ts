import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RegistroCivilDetalle, RegistroCivilInformacionService } from '../../services/registro-civil-informacion.service';

@Component({
  selector: 'app-registro-civil-detalle-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registro-civil-detalle-page.component.html',
  styleUrl: './registro-civil-detalle-page.component.css'
})
export class RegistroCivilDetallePageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly infoSvc = inject(RegistroCivilInformacionService);

  readonly detalle: RegistroCivilDetalle = this.infoSvc.getDetallePorSlug(this.route.snapshot.paramMap.get('servicio') ?? 'registro-civil');
}
