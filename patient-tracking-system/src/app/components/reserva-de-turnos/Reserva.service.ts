import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReservaDeTurno_interface } from 'src/app/components/reserva-de-turnos/reserva-de-turnos.interface';
import { data_DatosDeReservas } from 'src/assets/data/reserva/data_reserva';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  reservas: any[] = data_DatosDeReservas; // Initialize with example data

  constructor() {}


  // Get a list of reservations based on filters
  getReservas(filtros: any): Observable<any[]> {
    // Simulate filtering based on filters if needed
    let filteredReservas = [...this.reservas];

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
        reserva.fecha >= new Date(filtros.fechaDesde)
      );
    }
    if (filtros.fechaHasta) {
      filteredReservas = filteredReservas.filter((reserva) =>
        reserva.fecha <= new Date(filtros.fechaHasta)
      );
    }

    // Format the 'fecha' property using Angular's formatDate
    const formattedReservas = filteredReservas.map((reserva) => {
      return {
        ...reserva,
        fecha: formatDate(reserva.fecha, 'dd/MM/yyyy', 'en-US'), // Format the 'fecha' property
      };
    });

    return of(formattedReservas);
  }

  // Add a new reservation
  addReserva(reserva: any): Observable<any> {
    // Generate a unique ID for the new reservation
    const newId = this.generateNewId();


    // Assign the new ID to the reservation
    reserva.id = newId;
    console.log(reserva)
    console.log(this.reservas)
    // Push the new reservation to the array
    this.reservas.push(reserva);

    return of(this.reservas);
  }

  // Update an existing reservation
  updateReserva(reserva: any): Observable<any> {
    const index = this.reservas.findIndex((r) => r.id === reserva.id);

    if (index !== -1) {
      // Update the reservation in the array
      this.reservas[index] = reserva;
    }

    return of(this.reservas);
  }

  // Cancel a reservation by its ID
  cancelReserva(idReserva: number): Observable<any> {
    const index = this.reservas.findIndex((r) => r.id === idReserva);

    if (index !== -1) {
      // Remove the reservation from the array
      this.reservas.splice(index, 1);
    }

    return of(this.reservas);
  }

  // Generate a unique ID for a new reservation (you may need to implement this logic)
  private generateNewId(): number {
    // Find the maximum ID in the current data
    const maxId = Math.max(...data_DatosDeReservas.map((p) => p.id), 0);

    // Generate a new ID by incrementing the maximum ID
    return maxId + 1;
  }
}
