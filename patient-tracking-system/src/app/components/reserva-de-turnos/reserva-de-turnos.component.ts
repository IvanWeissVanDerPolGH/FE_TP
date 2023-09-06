import { Component, OnInit } from '@angular/core';
import { ReservaService } from './Reserva.service';

@Component({
  selector: 'app-reserva-de-turnos',
  templateUrl: './reserva-de-turnos.component.html',
  styleUrls: ['./reserva-de-turnos.component.css']
})
export class ReservaDeTurnosComponent implements OnInit {
  reservas: any[] = []; // Arreglo para almacenar las reservas
  filtros: any = {
    doctor: '',
    paciente: '',
    fechaDesde: '',
    fechaHasta: ''
  };
  nuevaReserva: any = {
    doctor: '',
    paciente: '',
    fecha: '',
    hora: ''

  };
  isEditing: boolean[] = []; // Array to track if each reservation is in editing mode

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.cargarReservas(); // Carga las reservas del día actual por defecto
  }

  // Carga las reservas del día actual
  cargarReservas(): void {
    const fechaActual = new Date(); // Obtiene la fecha actual
    const fechaDesde = fechaActual.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    this.filtros.fechaDesde = fechaDesde;
    this.filtros.fechaHasta = fechaDesde;

    // Llama al servicio para cargar las reservas con los filtros
    this.reservaService.getReservas(this.filtros).subscribe((reservas) => {
      this.reservas = reservas;
      // Initialize isEditing array with false for each reservation
      this.isEditing = new Array(reservas.length).fill(false);
    });
  }

  // Aplicar filtros y cargar las reservas
  applyFilters(): void {
    this.cargarReservas()
    // Llama al servicio para cargar las reservas con los filtros
    this.reservaService.getReservas(this.filtros).subscribe((reservas) => {
      this.reservas = reservas;
      // Reset nuevaReserva object
      this.nuevaReserva = {
        doctor: '',
        fecha: '',
        hora: ''
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
          doctor: '',
          fecha: '',
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
