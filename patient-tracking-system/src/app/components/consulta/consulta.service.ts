import { Data_consulta } from '../../../assets/data/consulta/data_consulta';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Consulta } from 'src/app/components/consulta/consulta.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  // constructor(private http: HttpClient) {}
  constructor() {}

  getConsultas_sample(): Observable<Consulta[]> {
    // Return the data from the Data_consulta constant as an observable
    return new Observable<Consulta[]>(observer => {
      observer.next(Data_consulta);
      observer.complete();
    });
  }

    // Create operation: Add a new consultation
    addConsulta(consulta: Consulta): Observable<Consulta[]> {

      Data_consulta.push(consulta);
      // You can optionally return the added consultation
      return new Observable<Consulta[]>(observer => {
        observer.next(Data_consulta);
        observer.complete();
      });
    }


    // Update operation: Update a consultation by idCategoria
  updateConsulta(consultaToUpdate: Consulta): Observable<Consulta[]> {
    // Find the index of the consultation with the matching idCategoria
    const index = Data_consulta.findIndex(consulta => consulta.idCategoria === consultaToUpdate.idCategoria);

    if (index !== -1) {
      // If the consultation is found, update its properties
      Data_consulta[index].descripcion = consultaToUpdate.descripcion;
    }

    // Return the updated list of consultations as an observable
    return new Observable<Consulta[]>(observer => {
      observer.next(Data_consulta);
      observer.complete();
    });
  }
}
