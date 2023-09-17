import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FichaClinica } from './ficha-clinica.interface'; // Import the FichaClinica interface
import { FichaClinicaFiltro } from './ficha-clinica-filtro.interface';
import { Data_fichasClinicas } from 'src/assets/data/fichaClinica/data_fichaClinica';
import { ReservaService } from '../reserva-de-turnos/Reserva.service';
@Injectable({
  providedIn: 'root'
})
export class FichaClinicaService {
  fichasClinicas: FichaClinica[]

  constructor() {
    this.fichasClinicas = Data_fichasClinicas;
  }

  // Get a list of fichas clínicas based on filters
  getFichasClinicas(filtros: FichaClinicaFiltro): Observable<FichaClinica[]> {
    // Simulate filtering based on filters if needed
    let filteredFichasClinicas = this.fichasClinicas;

    if (filtros.doctor) {
      filteredFichasClinicas = filteredFichasClinicas.filter((ficha) =>
        ficha.reserva.doctor.toLowerCase().includes(filtros.doctor.toLowerCase())
      );
    }
    if (filtros.paciente) {
      filteredFichasClinicas = filteredFichasClinicas.filter((ficha) =>
        ficha.reserva.paciente.toLowerCase().includes(filtros.paciente.toLowerCase())
      );
    }
    if (filtros.fechaDesde) {
      filteredFichasClinicas = filteredFichasClinicas.filter((ficha) =>
        ficha.reserva.fecha >= new Date(filtros.fechaDesde)
      );
    }
    if (filtros.fechaHasta) {
      filteredFichasClinicas = filteredFichasClinicas.filter((ficha) =>
        ficha.reserva.fecha <= new Date(filtros.fechaHasta)
      );
    }
    if (filtros.categoria) {
      filteredFichasClinicas = filteredFichasClinicas.filter((ficha) =>
        ficha.reserva.categoria.id === filtros.categoria
      );
    }

    return of(filteredFichasClinicas);
  }

  // Add a new ficha clínica
  addFichaClinica(fichaClinica: FichaClinica): Observable<FichaClinica[]> {
    // Generate a unique ID for the new ficha clínica
    fichaClinica.id = this.generateNewId();

    // Push the new ficha clínica to the array
    this.fichasClinicas.push(fichaClinica);

    return of(this.fichasClinicas);
  }

  // Generate a unique ID for a new ficha clínica (you may need to implement this logic)
  generateNewId(): number {
    // Find the maximum ID in the current data
    const maxId = Math.max(...this.fichasClinicas.map((f) => f.id));

    // Generate a new ID by incrementing the maximum ID
    return maxId + 1;
  }
}
