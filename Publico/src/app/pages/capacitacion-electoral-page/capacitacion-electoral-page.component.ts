import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CapacitacionElectoralService, CapacitacionItem } from '../../services/capacitacion-electoral.service';

@Component({
  selector: 'app-capacitacion-electoral-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './capacitacion-electoral-page.component.html',
  styleUrl: './capacitacion-electoral-page.component.css'
})
export class CapacitacionElectoralPageComponent {
  private readonly capSvc = inject(CapacitacionElectoralService);
  protected readonly items: CapacitacionItem[] = this.capSvc.getItems();
}
