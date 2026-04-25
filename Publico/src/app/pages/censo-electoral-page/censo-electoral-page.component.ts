import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CensoBanner, CensoElectoralService } from '../../services/censo-electoral.service';

@Component({
  selector: 'app-censo-electoral-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './censo-electoral-page.component.html',
  styleUrl: './censo-electoral-page.component.css'
})
export class CensoElectoralPageComponent {
  private readonly censoSvc = inject(CensoElectoralService);
  protected readonly banners: CensoBanner[] = this.censoSvc.getBanners();
}
