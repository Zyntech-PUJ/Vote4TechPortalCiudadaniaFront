import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: Date;
  imagen?: string;
  categoria: string;
}

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Nueva plataforma de servicios electorales en línea',
      descripcion: 'La Registraduría Nacional lanza una nueva plataforma digital para facilitar el acceso a los servicios electorales. Ahora puede consultar información sobre su juzgado, lugar de votación y más desde su hogar.',
      fecha: new Date('2026-04-25'),
      categoria: 'Electoral',
      imagen: 'assets/noticia-1.jpg'
    },
    {
      id: 2,
      titulo: 'Capacitación electoral para monitores de mesa',
      descripcion: 'Se abren las inscripciones para la capacitación de monitores electorales. Los interesados pueden registrarse en el módulo de capacitación electoral dentro de nuestros servicios en línea.',
      fecha: new Date('2026-04-23'),
      categoria: 'Capacitación',
      imagen: 'assets/noticia-2.jpg'
    },
    {
      id: 3,
      titulo: 'Actualización del censo electoral 2026',
      descripcion: 'Se ha completado la actualización del censo electoral para el año 2026. Puede verificar su información en el módulo de consulta del censo electoral.',
      fecha: new Date('2026-04-20'),
      categoria: 'Censo',
      imagen: 'assets/noticia-3.jpg'
    },
    {
      id: 4,
      titulo: 'Nuevos documentos de identificación con tecnología mejorada',
      descripcion: 'Los nuevos documentos de identidad cuentan con características de seguridad avanzadas. Solicita tu actualización en los centros de atención autorizados.',
      fecha: new Date('2026-04-18'),
      categoria: 'Identificación',
      imagen: 'assets/noticia-4.jpg'
    },
    {
      id: 5,
      titulo: 'Jornada electoral confirmada para 2026',
      descripcion: 'El calendario electoral de 2026 ha sido publicado oficialmente. Marque en su calendario todas las fechas importantes de votación y eventos electorales.',
      fecha: new Date('2026-04-15'),
      categoria: 'Electoral',
      imagen: 'assets/noticia-5.jpg'
    }
  ];

  formatearFecha(fecha: Date): string {
    const opciones: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return fecha.toLocaleDateString('es-CO', opciones);
  }
}
