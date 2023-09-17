import { Component, OnInit } from '@angular/core';
import { FichaClinicaService } from './ficha-clinica.service';
import { FichaClinica } from './ficha-clinica.interface';
import { FichaClinicaFiltro } from './ficha-clinica-filtro.interface';
import { Categoria } from '../consulta/consulta.interface';
import { ReservaDeTurno } from '../reserva-de-turnos/reserva-de-turnos.interface';
import { ReservaService } from '../reserva-de-turnos/Reserva.service';
import { ConsultaService } from '../consulta/consulta.service';

@Component({
  selector: 'app-ficha-clinica',
  templateUrl: './ficha-clinica.component.html',
  styleUrls: ['./ficha-clinica.component.css']
})
export class FichaClinicaComponent implements OnInit {
  fichasClinicasFiltradas: FichaClinica[] = [];
  reservasDeTurno: ReservaDeTurno[] = [];
  categorias: Categoria[] = [];
  filtros: FichaClinicaFiltro = {
    doctor: '',
    paciente: '',
    fechaDesde: '',
    fechaHasta: '',
    categoria: 0,
  };

  nuevaFichaClinica: FichaClinica = {
    id: 0,
    motivoConsulta: '',
    diagnostico: '',
    reserva: {
      id: 0,
      doctor: '',
      paciente: '',
      fecha: new Date(0),
      hora: '',
      categoria: { isEditing: false, id: 0, descripcion: '' },
    },
    categoria: { isEditing: false, id: 0, descripcion: '' },
  };

  constructor(
    private fichaClinicaService: FichaClinicaService,
    private categoriaService: ConsultaService,
    private reservas: ReservaService) {}

  ngOnInit(): void {
    this.initFichas();
    // this.loadFichasClinicas();
    this.loadCategorias();
  }

  // Carga las reservas del día actual
  initFichas(): void {
    this.filtros.fechaDesde = this.fichaClinicaService.formattedDate(new Date());
    this.filtros.fechaHasta = this.fichaClinicaService.formattedDate(new Date());
    
    // Llama al servicio para cargar las reservas con los filtros
    this.loadFichasClinicas();
  }

  loadFichasClinicas(): void {
    this.fichaClinicaService.getFichasClinicas(this.filtros).subscribe((fichasClinicas) => {
      this.fichasClinicasFiltradas = fichasClinicas;
    });
  }

  loadCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias) => {
      // Aquí puedes acceder a la lista de categorias
      this.categorias = categorias;
    });
  }

  //agarra todas las reservas del componente reserva de turno component
  loadReservas(): void {
    this.reservas.getAllReservas().subscribe((reservas) => {
      // Aquí puedes acceder a la lista de categorias
      this.reservasDeTurno = reservas;
    });
  }

  applyFilters(): void {
    this.loadFichasClinicas();
  }

  agregarFichaClinica(): void {
    const fichaClinica: FichaClinica = {
      id: 0,
      motivoConsulta: this.nuevaFichaClinica.motivoConsulta,
      diagnostico: this.nuevaFichaClinica.diagnostico,
      reserva: this.nuevaFichaClinica.reserva,
      categoria: this.nuevaFichaClinica.categoria
    };

    this.fichaClinicaService.addFichaClinica(fichaClinica).subscribe(() => {
      // Reload the reservations with filters applied
      this.applyFilters();
    });
  }
}
