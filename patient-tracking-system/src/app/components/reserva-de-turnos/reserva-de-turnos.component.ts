import { Component, OnInit } from '@angular/core';
import { ReservaService, ReservaDeTurnoFormateada } from './Reserva.service';
import { ReservaDeTurno } from './reserva-de-turnos.interface';
import { ReservaDeTurnoFiltro } from './reserva-de-turnos-filtro.interface';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-reserva-de-turnos',
  templateUrl: './reserva-de-turnos.component.html',
  styleUrls: ['./reserva-de-turnos.component.css']
})
export class ReservaDeTurnosComponent implements OnInit {
  reservas: ReservaDeTurnoFormateada[] = []; // Arreglo para almacenar las reservas
  filtros: ReservaDeTurnoFiltro = {
    doctor: '',
    paciente: '',
    fechaDesde: '',
    fechaHasta: ''
  };
  nuevaReserva: ReservaDeTurnoFormateada = {
    id: 0,
    doctor: '',
    paciente: '',
    fecha: this.reservaService.formattedDate(new Date(0)),
    hora: ''
  };
  isEditing: boolean[] = []; // Array to track if each reservation is in editing mode

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.initReservas(); // Carga las reservas del día actual por defecto
  }

  // Carga las reservas del día actual
  initReservas(): void {
    this.filtros.fechaDesde = this.reservaService.formattedDate(new Date());
    this.filtros.fechaHasta = this.reservaService.formattedDate(new Date());
    // Llama al servicio para cargar las reservas con los filtros
    this.reservaService.getReservas(this.filtros).subscribe((reservas) => {
      this.reservas = reservas;

    });
  }

  // Aplicar filtros y cargar las reservas
  applyFilters(): void {
    // Llama al servicio para cargar las reservas con los filtros
    this.reservaService.getReservas(this.filtros).subscribe((reservas) => {
      this.reservas = reservas;
      // Reset nuevaReserva object
      this.nuevaReserva = {
        id: 0,
        doctor: '',
        paciente: '',
        fecha: this.reservaService.formattedDate(new Date(0)),
        hora: ''
      };
    });
  }
  
  // Add a new reservation
  addReserva(reserva: ReservaDeTurnoFormateada): Observable<any> {
    // Generate a unique ID for the new reservation
    reserva.id = this.reservaService.generateNewId();

    console.log(reserva)
    console.log(this.reservas)
    // Push the new reservation to the array
    this.reservas.push(reserva);

    return of(this.reservas);
  }

  // Reservar un turno
  reservarTurno(): void {
    // Check if the required fields are not empty
    if (this.nuevaReserva.doctor && this.nuevaReserva.paciente && this.nuevaReserva.fecha && this.nuevaReserva.hora) {
      // Call the service to add the new reservation
      this.addReserva(this.nuevaReserva).subscribe(() => {
        // Reset the form fields after successful reservation
        // puede que no sea necesario
        this.nuevaReserva = {
          id:0,
          doctor: '',
          paciente: '',
          fecha: this.reservaService.formattedDate(new Date(0)),
          hora: ''
        };
        // Reload the reservations with filters applied
        this.applyFilters();

      });
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
