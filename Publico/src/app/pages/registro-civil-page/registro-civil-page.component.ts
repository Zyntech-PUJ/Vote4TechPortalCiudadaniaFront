import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegistroCivilServicesService, RegistroCivilService } from '../../services/registro-civil-services.service';

@Component({
  selector: 'app-registro-civil-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registro-civil-page.component.html',
  styleUrl: './registro-civil-page.component.css'
})
export class RegistroCivilPageComponent {
  private readonly registroCivilSvc = inject(RegistroCivilServicesService);
  protected readonly serviceGroups: RegistroCivilService[] = this.registroCivilSvc.getServices();
}