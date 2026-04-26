import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Servicio {
  titulo: string;
  descripcion: string;
  icono: string;
  ruta: string;
  categoria: string;
}

@Component({
  selector: 'app-servicios-ciudadania-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './servicios-ciudadania-page.component.html',
  styleUrl: './servicios-ciudadania-page.component.css'
})
export class ServiciosCiudadaniaPageComponent {
  servicios: Servicio[] = [
    // Servicios Registro Civil
    {
      titulo: 'Registro Civil e Identificación',
      descripcion: 'Consulta y tramites relacionados con cédula y documentos civiles',
      icono: 'id-card',
      ruta: '/registro-civil-e-identificacion',
      categoria: 'Registro Civil'
    },
    // Servicios Electorales
    {
      titulo: 'Lugar de Votación',
      descripcion: 'Consulta dónde votar en tu zona',
      icono: 'location-dot',
      ruta: '/electoral/lugar-de-votacion',
      categoria: 'Electoral'
    },
    {
      titulo: 'Consulta Jurado de Votación',
      descripcion: 'Información sobre tu jurado asignado',
      icono: 'users',
      ruta: '/electoral/consulta-jurado-votacion',
      categoria: 'Electoral'
    },
    {
      titulo: 'Consulta de Sanciones',
      descripcion: 'Verifica si tienes sanciones electorales pendientes',
      icono: 'exclamation-triangle',
      ruta: '/electoral/consulta-sancion',
      categoria: 'Electoral'
    },
    {
      titulo: 'Certificado de Votación',
      descripcion: 'Solicita tu certificado de votación',
      icono: 'certificate',
      ruta: '/electoral/certificado-votacion',
      categoria: 'Electoral'
    },
    {
      titulo: 'Comprobante de Inscripción (Formulario E4)',
      descripcion: 'Consulta comprobante de tu trámite de inscripción',
      icono: 'file-check',
      ruta: '/electoral/comprobante-inscripcion',
      categoria: 'Electoral'
    },
    {
      titulo: 'Censo Electoral',
      descripcion: 'Consulta información del censo electoral',
      icono: 'chart-bar',
      ruta: '/electoral/censo-electoral',
      categoria: 'Electoral'
    },
    {
      titulo: 'Capacitación Electoral',
      descripcion: 'Accede a recursos educativos electorales',
      icono: 'book',
      ruta: '/electoral/capacitacion-electoral',
      categoria: 'Electoral'
    },
    {
      titulo: 'Inscripción de Candidatos',
      descripcion: 'Proceso de inscripción para candidatos',
      icono: 'user-check',
      ruta: '/electoral/inscripcion-candidatos',
      categoria: 'Electoral'
    },
    {
      titulo: 'Mecanismos de Participación',
      descripcion: 'Conoce los diferentes mecanismos de participación ciudadana',
      icono: 'handshake',
      ruta: '/electoral/mecanismos-participacion',
      categoria: 'Electoral'
    },
    {
      titulo: 'Resultados Históricos',
      descripcion: 'Consulta resultados de elecciones anteriores',
      icono: 'chart-pie',
      ruta: '/electoral/resultados-historicos',
      categoria: 'Electoral'
    }
  ];

  categorias = ['Registro Civil', 'Electoral'];

  getServiciosPorCategoria(categoria: string): Servicio[] {
    return this.servicios.filter(s => s.categoria === categoria);
  }
}
