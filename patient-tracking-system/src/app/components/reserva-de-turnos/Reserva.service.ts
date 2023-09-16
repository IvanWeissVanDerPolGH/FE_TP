import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReservaDeTurno } from 'src/app/components/reserva-de-turnos/reserva-de-turnos.interface';
import { ReservaDeTurnoFiltro } from './reserva-de-turnos-filtro.interface';
import { data_DatosDeReservas } from 'src/assets/data/reserva/data_reserva';

export type ReservaDeTurnoFormateada = {
  fecha: string;
  id: number;
  doctor: string;
  paciente: string;
  hora: string;
}



@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private reservas: ReservaDeTurno[]

  constructor() {
    this.reservas = data_DatosDeReservas;// Initialize with example data
  }

  formattedDate(date: Date){
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0
    let yyyy = date.getFullYear();
    return yyyy + '/' + mm + '/' + dd;
  }

  // Get a list of reservations based on filters
  getReservas(filtros: ReservaDeTurnoFiltro): Observable<ReservaDeTurnoFormateada[]> {
    // Simulate filtering based on filters if needed
    let filteredReservas = this.reservas;

    // parece que est mal la logica, no se esta pisando los valores de filtro.doctor cuando hace el filtro de filtro.fechaHasta?

    if (filtros.doctor) {
      filteredReservas = filteredReservas.filter((reserva) =>
        reserva.doctor.toLowerCase().includes(filtros.doctor.toLowerCase())
      );
    }
    if (filtros.paciente) {
      filteredReservas = filteredReservas.filter((reserva) =>
        reserva.paciente.toLowerCase().includes(filtros.paciente.toLowerCase())
      );
    }
    if (filtros.fechaDesde) {
      filteredReservas = filteredReservas.filter((reserva) =>
        reserva.fecha >= new Date(filtros.fechaDesde.replace(/-/g, '/'))
      );
    }
    if (filtros.fechaHasta) {
      filteredReservas = filteredReservas.filter((reserva) =>
        reserva.fecha <= new Date(filtros.fechaHasta.replace(/-/g, '/'))
        );
    }

    // Format the 'fecha' property using Angular's formatDate
    const formattedReservas = filteredReservas.map((reserva) => {
      return {
        ...reserva,
        fecha: this.formattedDate(reserva.fecha), // Format the 'fecha' property
      };
    });

    return of(formattedReservas);
  }

  // Add a new reservation
  addReserva(reserva: ReservaDeTurno): Observable<ReservaDeTurno[]> {
    // Generate a unique ID for the new reservation
    reserva.id = this.generateNewId();

    // Push the new reservation to the array
    this.reservas.push(reserva);

    return of(this.reservas);
  }

  // Cancel a reservation by its ID
  cancelReserva(idReserva: number): Observable<ReservaDeTurno[]> {
    const index = this.reservas.findIndex((r) => r.id === idReserva);

    if (index !== -1) {
      // Remove the reservation from the array
      this.reservas.splice(index, 1);
    }

    return of(this.reservas);
  }

  // Generate a unique ID for a new reservation (you may need to implement this logic)
  generateNewId(): number {
    // Find the maximum ID in the current data
    const maxId = Math.max(...this.reservas.map((p) => p.id));

    // Generate a new ID by incrementing the maximum ID
    return maxId + 1;
  }
}
