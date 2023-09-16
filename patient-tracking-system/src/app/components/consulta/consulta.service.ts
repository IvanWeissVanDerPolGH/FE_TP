import { Data_consulta } from '../../../assets/data/consulta/data_consulta';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from 'src/app/components/consulta/consulta.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private listaDataConsulta: Consulta[]
  // constructor(private http: HttpClient) {}
  constructor() {
    this.listaDataConsulta = Data_consulta
  }

  getConsultas_sample(): Observable<Consulta[]> {
    // Return the data from the Data_consulta constant as an observable
    return new Observable<Consulta[]>(observer => {
      observer.next(this.listaDataConsulta);
      observer.complete();
    });
  }

    // Create operation: Add a new consultation
    addConsulta(consulta: Consulta): Observable<Consulta[]> {

      this.listaDataConsulta.push(consulta);
      // You can optionally return the added consultation
      return new Observable<Consulta[]>(observer => {
        observer.next(this.listaDataConsulta);
        observer.complete();
      });
    }


    // Update operation: Update a consultation by idCategoria
  updateConsulta(consultaToUpdate: Consulta): Observable<Consulta[]> {
    // Find the index of the consultation with the matching idCategoria
    const index = this.listaDataConsulta.findIndex(consulta => consulta.idCategoria === consultaToUpdate.idCategoria);

    if (index !== -1) {
      // If the consultation is found, update its properties
      this.listaDataConsulta[index].descripcion = consultaToUpdate.descripcion;
    }

    // Return the updated list of consultations as an observable
    return new Observable<Consulta[]>(observer => {
      observer.next(this.listaDataConsulta);
      observer.complete();
    });
  }
}
