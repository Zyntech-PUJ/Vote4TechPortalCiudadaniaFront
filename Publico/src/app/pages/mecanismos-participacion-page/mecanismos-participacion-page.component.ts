import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  MecanismosParticipacionService,
  PublicacionMecanismo
} from '../../services/mecanismos-participacion.service';

@Component({
  selector: 'app-mecanismos-participacion-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mecanismos-participacion-page.component.html',
  styleUrl: './mecanismos-participacion-page.component.css'
})
export class MecanismosParticipacionPageComponent {
  private readonly svc = inject(MecanismosParticipacionService);

  protected readonly publicaciones: PublicacionMecanismo[] = this.svc.getPublicaciones();
  protected readonly normas: string[] = this.svc.getNormasRelacionadas();
}
