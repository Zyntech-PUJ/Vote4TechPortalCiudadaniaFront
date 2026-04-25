import { Routes } from '@angular/router';

import { RegistroCivilPageComponent } from './pages/registro-civil-page/registro-civil-page.component';
import { RegistraduriaLandingComponent } from './components/registraduria-landing/registraduria-landing.component';
import { ElectoralPageComponent } from './pages/electoral-page/electoral-page.component';
import { LugarVotacionPageComponent } from './pages/lugar-votacion-page/lugar-votacion-page.component';
import { ConsultaJuradoPageComponent } from './pages/consulta-jurado-page/consulta-jurado-page.component';
import { ConsultaSancionPageComponent } from './pages/consulta-sancion-page/consulta-sancion-page.component';
import { ComprobanteInscripcionCitasPageComponent } from './pages/comprobante-inscripcion-citas-page/comprobante-inscripcion-citas-page.component';
import { CensoElectoralPageComponent } from './pages/censo-electoral-page/censo-electoral-page.component';
import { CapacitacionElectoralPageComponent } from './pages/capacitacion-electoral-page/capacitacion-electoral-page.component';
import { InscripcionCandidatosPageComponent } from './pages/inscripcion-candidatos-page/inscripcion-candidatos-page.component';
import { MecanismosParticipacionPageComponent } from './pages/mecanismos-participacion-page/mecanismos-participacion-page.component';
import { ComprobanteInscripcionPageComponent } from './pages/comprobante-inscripcion-page/comprobante-inscripcion-page.component';
import { ResultadosHistoricosPageComponent } from './pages/resultados-historicos-page/resultados-historicos-page.component';

export const routes: Routes = [
	{
		path: '',
		component: RegistraduriaLandingComponent
	},
	{
		path: 'registro-civil-e-identificacion',
		component: RegistroCivilPageComponent
	},
	{
		path: 'electoral',
		component: ElectoralPageComponent
	},
	{
		path: 'electoral/lugar-de-votacion',
		component: LugarVotacionPageComponent
	},
	{
		path: 'electoral/consulta-jurado-votacion',
		component: ConsultaJuradoPageComponent
	},
	{
		path: 'electoral/consulta-sancion',
		component: ConsultaSancionPageComponent
	},
	{
		path: 'electoral/certificado-votacion',
		component: ComprobanteInscripcionCitasPageComponent
	},
	{
		path: 'electoral/comprobante-inscripcion-citas',
		redirectTo: 'electoral/certificado-votacion',
		pathMatch: 'full'
	},
	{
		path: 'electoral/comprobante-inscripcion',
		component: ComprobanteInscripcionPageComponent
	},
	{
		path: 'electoral/censo-electoral',
		component: CensoElectoralPageComponent
	},
	{
		path: 'electoral/capacitacion-electoral',
		component: CapacitacionElectoralPageComponent
	},
	{
		path: 'electoral/inscripcion-candidatos',
		component: InscripcionCandidatosPageComponent
	},
	{
		path: 'electoral/mecanismos-participacion',
		component: MecanismosParticipacionPageComponent
	},
	{
		path: 'electoral/resultados-historicos',
		component: ResultadosHistoricosPageComponent
	}
];
