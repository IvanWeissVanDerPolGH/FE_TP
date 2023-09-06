import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva/Reserva.service';



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

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.cargarReservasDelDiaActual(); // Carga las reservas del día actual por defecto
  }

  // Carga las reservas del día actual
  cargarReservasDelDiaActual(): void {
    const fechaActual = new Date(); // Obtiene la fecha actual
    const fechaDesde = fechaActual.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    this.filtros.fechaDesde = fechaDesde;
    this.filtros.fechaHasta = fechaDesde;

    // Llama al servicio para cargar las reservas con los filtros
    this.reservaService.getReservas(this.filtros).subscribe((reservas) => {
      this.reservas = reservas;
    });
  }

  // Aplica los filtros y carga las reservas
  aplicarFiltros(): void {
    // Llama al servicio para cargar las reservas con los filtros
    this.reservaService.getReservas(this.filtros).subscribe((reservas) => {
      this.reservas = reservas;
    });
  }

  // Cancela una reserva
  cancelarReserva(idReserva: number): void {
    // Llama al servicio para cancelar la reserva por su ID
    this.reservaService.cancelarReserva(idReserva).subscribe(() => {
      // Actualiza la lista de reservas después de la cancelación
      this.aplicarFiltros();
    });
  }
}
