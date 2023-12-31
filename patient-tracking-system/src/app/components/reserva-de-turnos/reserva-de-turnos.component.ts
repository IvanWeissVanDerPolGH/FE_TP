import { Component, OnInit } from '@angular/core';
import { ReservaService, ReservaDeTurnoFormateada } from './Reserva.service';
import { ReservaDeTurno } from './reserva-de-turnos.interface';
import { ReservaDeTurnoFiltro } from './reserva-de-turnos-filtro.interface';
import { RegistroPersonaService } from '../registro-de-personas/registro-de-personas.service';//para traer las personas desde registro-de-personas
import { ConsultaService } from '../consulta/consulta.service';// para traer las categorias desde el registro de consultas
import { Categoria } from '../consulta/consulta.interface';
import { RegistroPersona_interface as Persona } from '../registro-de-personas/registro-de-personas.interface';

@Component({
  selector: 'app-reserva-de-turnos',
  templateUrl: './reserva-de-turnos.component.html',
  styleUrls: ['./reserva-de-turnos.component.css']
})
export class ReservaDeTurnosComponent implements OnInit {
  reservasFormateadas: ReservaDeTurnoFormateada[] = []; // Arreglo para almacenar las reservas
  personas: Persona[] = [];                                 // Declaración de la propiedad personas
  categorias: Categoria[] = [];                        //Arreglo para almacenar las categorias
  filtros: ReservaDeTurnoFiltro = {
    doctor: '',
    paciente: '',
    fechaDesde: '',
    fechaHasta: ''
  };
  categoriaVacia: Categoria = {
    isEditing: false,
    id: 0,
    descripcion: '',
  }
  personaVacia: Persona = {
    idPersona: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    cedula: '',
    flag_es_doctor: false,
    isEditing: false
  }
  nuevaReserva: ReservaDeTurno = {
    id: 0,
    doctor: this.personaVacia,
    paciente: this.personaVacia,
    fecha: new Date(0),
    hora: '',
    categoria: this.categoriaVacia
  };
  isEditing: boolean[] = []; // Array to track if each reservation is in editing mode

  //para usar la lista de personas y categorias
  constructor(
    private reservaService: ReservaService,
    private personaService: RegistroPersonaService,
    private consultaService: ConsultaService
    ) {}

  ngOnInit(): void {
    this.initReservas(); // Carga las reservas del día actual por defecto
    this.loadPersonas(); // Carga la lista de personas
    this.loadCategorias();//Carga la lista de categorias
  }

  //Cargar las personas(Doctores y pacientes)
  loadPersonas(): void {
    this.personaService.getPersonas().subscribe((personas) => {
      // Aquí puedes acceder a la lista de personas (doctores y pacientes)
      this.personas = personas;
    });
  }

    //Cargar las categorias
  loadCategorias(): void {
    this.consultaService.getCategorias().subscribe((categorias) => {
      // Aquí puedes acceder a la lista de categorias
      this.categorias = categorias;
    });
  }
  

  // Carga las reservas del día actual
  initReservas(): void {
    this.filtros.fechaDesde = this.reservaService.formattedDate(new Date());
    this.filtros.fechaHasta = this.reservaService.formattedDate(new Date());
    
    // Llama al servicio para cargar las reservas con los filtros
    this.applyFilters();
  }

  // Aplicar filtros y cargar las reservas
  applyFilters(): void {
    // Llama al servicio para cargar las reservas con los filtros
    this.reservaService.getReservas(this.filtros).subscribe((reservasFormateadas) => {
      this.reservasFormateadas = reservasFormateadas;
    
    });
  }

  reservarTurno(): void {
    // Check if the required fields are not empty
    if (this.nuevaReserva.fecha && this.nuevaReserva.hora) {
      // Buscar el Doctor seleccionado en la lista de personas
      let doctorSeleccionado = this.personas.find(persona => persona === this.nuevaReserva.doctor);
      // Buscar el Paciente seleccionado en la lista de personas
      let pacienteSeleccionado = this.personas.find(persona => persona === this.nuevaReserva.paciente);

        // Verificar si se encontraron el Doctor y el Paciente
        if (doctorSeleccionado && pacienteSeleccionado) {
          // Crear una nueva instancia de ReservaDeTurno
          const nuevaReserva: ReservaDeTurno = {
            id: 0,
            doctor: doctorSeleccionado,
            paciente: pacienteSeleccionado,
            fecha: new Date(this.nuevaReserva.fecha + 'T00:00:00'),
            hora: this.nuevaReserva.hora,
            categoria: this.nuevaReserva.categoria
          };

          // Call the service to add the new reservation
      this.reservaService.addReserva(nuevaReserva).subscribe(() => {
        // Reload the reservations with filters applied
        this.applyFilters();
      });
     
      }
     
    }
  }
  

  // Cancela una reserva
  cancelReserva(idReserva: number): void {
    // Llama al servicio para cancelar la reserva por su ID
    this.reservaService.cancelReserva(idReserva).subscribe(() => {
      // Actualiza la lista de reservas después de la cancelación
      this.applyFilters();
    });
  }

}
