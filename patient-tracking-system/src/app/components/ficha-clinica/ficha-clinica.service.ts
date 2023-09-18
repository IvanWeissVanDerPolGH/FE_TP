import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FichaClinica } from './ficha-clinica.interface'; // Import the FichaClinica interface
import { FichaClinicaFiltro } from './ficha-clinica-filtro.interface';
import { Data_fichasClinicas } from 'src/assets/data/fichaClinica/data_fichaClinica';

@Injectable({
  providedIn: 'root'
})
export class FichaClinicaService {
  fichasClinicas: FichaClinica[]

  constructor() {
    this.fichasClinicas = Data_fichasClinicas;
  }

  formattedDate(date: Date){
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0
    let yyyy = date.getFullYear();
    return yyyy + '/' + mm + '/' + dd;
  }

  // Get a list of fichas clínicas based on filters
  getFichasClinicas(filtros: FichaClinicaFiltro): Observable<FichaClinica[]> {
    // Simulate filtering based on filters if needed
    let filteredFichasClinicas = this.fichasClinicas;

    if (filtros.doctor) {
      filteredFichasClinicas = filteredFichasClinicas.filter((ficha) =>
        ficha.doctor.nombre.toLowerCase().concat(' ',ficha.doctor.apellido.toLowerCase()).includes(filtros.doctor.toLowerCase())
      );
    }
    if (filtros.paciente) {
      filteredFichasClinicas = filteredFichasClinicas.filter((ficha) =>
      ficha.paciente.nombre.toLowerCase().concat(' ',ficha.paciente.apellido.toLowerCase()).includes(filtros.paciente.toLowerCase())
      );
    }
    if (filtros.fechaDesde) {
      filteredFichasClinicas = filteredFichasClinicas.filter((ficha) =>
        ficha.fecha >= new Date(filtros.fechaDesde.replace(/-/g, '/'))
      );
    }
    if (filtros.fechaHasta) {
      filteredFichasClinicas = filteredFichasClinicas.filter((ficha) =>
        ficha.fecha <= new Date(filtros.fechaHasta.replace(/-/g, '/'))
      );
    }
    if (filtros.categoria) {
      filteredFichasClinicas = filteredFichasClinicas.filter((ficha) =>
        ficha.categoria.id === +filtros.categoria
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
