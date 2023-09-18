import { Component, OnInit } from '@angular/core';
import { FichaClinicaService } from './ficha-clinica.service';
import { FichaClinica } from './ficha-clinica.interface';
import { FichaClinicaFiltro } from './ficha-clinica-filtro.interface';
import { Categoria } from '../consulta/consulta.interface';
import { ReservaDeTurno } from '../reserva-de-turnos/reserva-de-turnos.interface';
import { ReservaService } from '../reserva-de-turnos/Reserva.service';
import { ConsultaService } from '../consulta/consulta.service';
import { RegistroPersona_interface as Persona } from '../registro-de-personas/registro-de-personas.interface';
import { RegistroPersonaService } from '../registro-de-personas/registro-de-personas.service';


@Component({
  selector: 'app-ficha-clinica',
  templateUrl: './ficha-clinica.component.html',
  styleUrls: ['./ficha-clinica.component.css']
})
export class FichaClinicaComponent implements OnInit {
  fichasClinicasFiltradas: FichaClinica[] = [];
  fechaFiltroReserva: Date = new Date(0);
  reservasDeTurno: ReservaDeTurno[] = [];
  categorias: Categoria[] = [];
  personas: Persona[] = [];
  filtros: FichaClinicaFiltro = {
    doctor: '',
    paciente: '',
    fechaDesde: '',
    fechaHasta: '',
    categoria: 0,
  };
  personaVacia: Persona = {
    idPersona: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    cedula: '',
    flag_es_doctor: false,
    isEditing: false
  };
  nuevaFichaClinica: FichaClinica = {
    id: 0,
    paciente: this.personaVacia,
    doctor: this.personaVacia,
    motivoConsulta: '',
    diagnostico: '',
    fecha: new Date(0),
    reserva: {
      id: 0,
      doctor: this.personaVacia,
      paciente: this.personaVacia,
      fecha: new Date(0),
      hora: '',
      categoria: { isEditing: false, id: 0, descripcion: '' },
    },
    categoria: { isEditing: false, id: 0, descripcion: '' },
  };

  constructor(
    private fichaClinicaService: FichaClinicaService,
    private categoriaService: ConsultaService,
    private reservaService: ReservaService,
    private personaService: RegistroPersonaService) {}

  ngOnInit(): void {
    this.initFichas();
    this.initReservas();
    this.loadCategorias();
    this.loadPersonas();
  }

  // Carga las reservas del día actual
  initFichas(): void {
    this.filtros.fechaDesde = this.fichaClinicaService.formattedDate(new Date());
    this.filtros.fechaHasta = this.fichaClinicaService.formattedDate(new Date());
    
    // Llama al servicio para cargar las reservas con los filtros
    this.applyFilters();
  }

  initReservas(): void {
    this.loadReservas();
  }

  applyFilters(): void {
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
    this.reservaService.getAllReservas().subscribe((reservas) => {
      // Aquí puedes acceder a la lista de categorias
      this.reservasDeTurno = reservas;
    });
  }

  loadPersonas(): void {
    this.personaService.getPersonas().subscribe((persona) => {
      this.personas = persona
    })
  }

  agregarFichaClinicaConReserva(): void {
    let fichaClinica: FichaClinica = {
      id: 0,
      paciente: this.nuevaFichaClinica.reserva.paciente,
      doctor: this.nuevaFichaClinica.reserva.doctor,
      motivoConsulta: this.nuevaFichaClinica.motivoConsulta,
      diagnostico: this.nuevaFichaClinica.diagnostico,
      fecha: this.nuevaFichaClinica.reserva.fecha,
      reserva: this.nuevaFichaClinica.reserva,
      categoria: this.nuevaFichaClinica.categoria
    };

    this.fichaClinicaService.addFichaClinica(fichaClinica).subscribe(() => {
      // Reload the reservations with filters applied
      this.applyFilters();
    });

    fichaClinica = this.nuevaFichaClinica;
  }

  agregarFichaClinica(): void {
    let fichaClinica: FichaClinica = {
      id: 0,
      paciente: this.nuevaFichaClinica.paciente,
      doctor: this.nuevaFichaClinica.doctor,
      motivoConsulta: this.nuevaFichaClinica.motivoConsulta,
      diagnostico: this.nuevaFichaClinica.diagnostico,
      fecha: new Date(this.nuevaFichaClinica.fecha + 'T00:00:00'),
      reserva: this.nuevaFichaClinica.reserva,
      categoria: this.nuevaFichaClinica.categoria
    };
  
    this.fichaClinicaService.addFichaClinica(fichaClinica).subscribe(() => {
      // Reload the reservations with filters applied
      this.applyFilters();
    });

    fichaClinica = this.nuevaFichaClinica;
  }
}
