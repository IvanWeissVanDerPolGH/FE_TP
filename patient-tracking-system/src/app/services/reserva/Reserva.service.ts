import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUrl = 'tu_api_de_reservas'; // Reemplaza con la URL de tu API de reservas

  constructor(private http: HttpClient) {}

  // Obtener reservas con filtros
  getReservas(filtros: any): Observable<any[]> {
    // Construye los parámetros de la consulta
    let params = new HttpParams();
    if (filtros.doctor) {
      params = params.set('doctor', filtros.doctor);
    }
    if (filtros.paciente) {
      params = params.set('paciente', filtros.paciente);
    }
    if (filtros.fechaDesde) {
      params = params.set('fechaDesde', filtros.fechaDesde);
    }
    if (filtros.fechaHasta) {
      params = params.set('fechaHasta', filtros.fechaHasta);
    }

    // Realiza la solicitud GET con los parámetros
    return this.http.get<any[]>(`${this.baseUrl}/reservas`, { params });
  }

  // Crear una nueva reserva
  crearReserva(reserva: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/reservas`, reserva);
  }

  // Cancelar una reserva por su ID
  cancelarReserva(idReserva: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/reservas/${idReserva}`);
  }
}
