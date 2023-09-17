import { Injectable } from '@angular/core';
import { data_DatosDeReservas } from 'src/assets/data/reserva/data_reserva';
import { ReservaDeTurno } from '../reserva-de-turnos/reserva-de-turnos.interface';
import { FichaClinicaFiltro } from './ficha-clinica-filtro.interface';
import { Observable, of } from 'rxjs';
import { FichaClinica } from './ficha-clinica.interface';
import { ReservaDeTurnoFiltro } from '../reserva-de-turnos/reserva-de-turnos-filtro.interface';
import { ReservaDeTurnoFormateada, ReservaService } from '../reserva-de-turnos/Reserva.service';

@Injectable({
    providedIn: 'root'
  })
  export class FichaClinicaService {
    constructor(
      private reservasService: ReservaService
    ) {}

    formattedDate(date: Date){
      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0
      let yyyy = date.getFullYear();
      return yyyy + '/' + mm + '/' + dd;
    }

  
  }