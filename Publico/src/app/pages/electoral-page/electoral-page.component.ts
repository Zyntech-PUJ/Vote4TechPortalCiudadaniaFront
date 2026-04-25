import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ElectoralServicesService, ElectoralService } from '../../services/electoral-services.service';

export type { ServiceCategory } from '../../services/electoral-services.service';

@Component({
  selector: 'app-electoral-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './electoral-page.component.html',
  styleUrl: './electoral-page.component.css'
})
export class ElectoralPageComponent {
  private readonly electoralSvc = inject(ElectoralServicesService);
  protected readonly services: ElectoralService[] = this.electoralSvc.getServices();
}
