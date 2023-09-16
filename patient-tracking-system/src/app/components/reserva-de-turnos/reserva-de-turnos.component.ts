import { Component, OnInit } from '@angular/core';
import { ReservaService, ReservaDeTurnoFormateada } from './Reserva.service';
import { ReservaDeTurno } from './reserva-de-turnos.interface';
import { ReservaDeTurnoFiltro } from './reserva-de-turnos-filtro.interface';
import { Observable, of } from 'rxjs';
import { RegistroPersonaService } from '../registro-de-personas/registro-de-personas.service';//Marco

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

  // Reservar un turno
  reservarTurno(): void {
    // Check if the required fields are not empty
    if (this.nuevaReserva.doctor && this.nuevaReserva.paciente && this.nuevaReserva.fecha && this.nuevaReserva.hora) {
      // Call the service to add the new reservation
      this.reservaService.addReserva(this.nuevaReserva).subscribe(() => {

        
      });
      // Reload the reservations with filters applied
      this.applyFilters();
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
