import { Component, OnInit } from '@angular/core';
import { ReservaService, ReservaDeTurnoFormateada } from './Reserva.service';
import { ReservaDeTurno } from './reserva-de-turnos.interface';
import { ReservaDeTurnoFiltro } from './reserva-de-turnos-filtro.interface';
import { Observable, of } from 'rxjs';
import { RegistroPersonaService } from '../registro-de-personas/registro-de-personas.service';//Marco
import { data_DatosDeReservas } from 'src/assets/data/reserva/data_reserva';

@Component({
  selector: 'app-reserva-de-turnos',
  templateUrl: './reserva-de-turnos.component.html',
  styleUrls: ['./reserva-de-turnos.component.css']
})
export class ReservaDeTurnosComponent implements OnInit {
  reservasFormateadas: ReservaDeTurnoFormateada[] = []; // Arreglo para almacenar las reservas
  personas: any[] = []; // Declaración de la propiedad personas//Marco
  filtros: ReservaDeTurnoFiltro = {
    doctor: '',
    paciente: '',
    fechaDesde: '',
    fechaHasta: ''
  };
  nuevaReserva: ReservaDeTurno = {
    id: 0,
    doctor: '',
    paciente: '',
    fecha: new Date(0),
    hora: ''
  };
  isEditing: boolean[] = []; // Array to track if each reservation is in editing mode

  constructor(private reservaService: ReservaService, private personaService: RegistroPersonaService) {}//Marco

  ngOnInit(): void {
    this.initReservas(); // Carga las reservas del día actual por defecto
    this.loadPersonas(); // Carga la lista de personas
  }

  //Marco
  loadPersonas(): void {
    this.personaService.getPersonas_sample().subscribe((personas) => {
      // Aquí puedes acceder a la lista de personas (doctores y pacientes)
      this.personas = personas;
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
      let doctorSeleccionado = this.personas.find(persona => persona.nombre + ' ' + persona.apellido === this.nuevaReserva.doctor);
      // Buscar el Paciente seleccionado en la lista de personas
      let pacienteSeleccionado = this.personas.find(persona => persona.nombre + ' ' + persona.apellido === this.nuevaReserva.paciente);

        // Verificar si se encontraron el Doctor y el Paciente
        if (doctorSeleccionado && pacienteSeleccionado) {
          // Crear una nueva instancia de ReservaDeTurno
          const nuevaReserva: ReservaDeTurno = {
            id: 0,
            doctor: doctorSeleccionado.nombre + ' ' + doctorSeleccionado.apellido,
            paciente: pacienteSeleccionado.nombre + ' ' + pacienteSeleccionado.apellido,
            fecha: new Date(this.nuevaReserva.fecha + 'T00:00:00'),
            hora: this.nuevaReserva.hora
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
