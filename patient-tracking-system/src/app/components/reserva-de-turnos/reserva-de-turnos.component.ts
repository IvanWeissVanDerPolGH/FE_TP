import { Component, OnInit } from '@angular/core';
import { ReservaService, ReservaDeTurnoFormateada } from './Reserva.service';
import { ReservaDeTurno } from './reserva-de-turnos.interface';
import { ReservaDeTurnoFiltro } from './reserva-de-turnos-filtro.interface'

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
  nuevaReserva: ReservaDeTurno = {
    id: 0,
    doctor: '',
    paciente: '',
    fecha: new Date(0),
    hora: '',
    isEditable: false

  };
  isEditing: boolean[] = []; // Array to track if each reservation is in editing mode

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.cargarReservas(); // Carga las reservas del día actual por defecto
  }

  formattedDate() {
    //asigna la fecha actual en el calendario como default
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
    let yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }
  
  // Carga las reservas del día actual
  cargarReservas(): void {
    this.filtros.fechaDesde = this.formattedDate();
    this.filtros.fechaHasta = this.formattedDate();
    // Llama al servicio para cargar las reservas con los filtros
    this.reservaService.getReservas(this.filtros).subscribe((reservas) => {
      this.reservas = reservas;
      // Initialize isEditing array with false for each reservation
      this.isEditing = new Array(reservas.length).fill(false);
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
        fecha: new Date(0),
        hora: '',
        isEditable: false
      };
    });
  }

  // Reservar un turno
  reservarTurno(): void {
    // Check if the required fields are not empty
    if (this.nuevaReserva.doctor && this.nuevaReserva.paciente && this.nuevaReserva.fecha && this.nuevaReserva.hora) {
      // Call the service to add the new reservation
      this.reservaService.addReserva(this.nuevaReserva).subscribe(() => {
        // Reset the form fields after successful reservation
        this.nuevaReserva = {
          id:0,
          doctor: '',
          paciente: '',
          fecha: new Date(0),
          hora: '',
          isEditable: false
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

  // Habilitar la edición de una reserva
  editReserva(index: number): void {
    this.isEditing[index] = true;
  }

  // Actualizar una reserva
  updateReserva(reserva: any, index: number): void {
    // Llama al servicio para actualizar la reserva
    this.reservaService.updateReserva(reserva).subscribe(() => {
      // Deshabilita la edición de la reserva
      this.isEditing[index] = false;
    });
  }
}
