import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/components/consulta/consulta.service';
import { Consulta } from './consulta.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})


export class ConsultaComponent implements OnInit{
  newConsulta: Consulta = { idCategoria: -1, descripcion: '' ,isEditing: false}; // Initialize a new consultation
  listaDeConsultas: Consulta[] = [];

  constructor(private ConsultaService: ConsultaService) {}

  ngOnInit(): void {
    this.loadConsultas();
    this.sortConsultasById()
  }


  // Sort the listaDeConsultas array by idCategoria
  sortConsultasById(): void {
    this.listaDeConsultas.sort((a, b) => a.idCategoria - b.idCategoria);
  }
  // Read operation: Load the list of consultations
  loadConsultas(): void {
    this.ConsultaService.getConsultas_sample().subscribe((consultas) => {
      this.listaDeConsultas = consultas;
      this.sortConsultasById();
    });
  }

  // Create operation: Add a new consultation
  addConsulta(): void {
    this.ConsultaService.addConsulta(this.newConsulta).subscribe((updatedConsultas) => {
      // Optionally, you can handle the response here and update the list
      this.listaDeConsultas = updatedConsultas;
      this.newConsulta = { idCategoria: -1, descripcion: '' ,isEditing: false}; // Clear the form
      this.sortConsultasById();
    });
  }

  // Edit operation: Enable editing for a consultation
  editConsulta(consulta: Consulta): void {
    consulta.isEditing = true;
    this.sortConsultasById();
  }

  // Update operation: Apply changes to a consultation
  updateConsulta(consulta: Consulta, index: number): void {
    // Send the updated consultation to the service for processing
    this.ConsultaService.updateConsulta(consulta).subscribe(() => {
      // Optionally, you can handle the response here and update the list
      this.listaDeConsultas[index].isEditing = false; // Disable editing mode
      this.sortConsultasById();
    });
  }

  // Delete operation: Remove a consultation by idCategoria
  deleteConsulta(idCategoria: number): Observable<Consulta[]> {
    // Find the index of the consultation with the matching idCategoria
    const index = this.listaDeConsultas.findIndex(consulta => consulta.idCategoria === idCategoria);

    if (index !== -1) {
      // If the consultation is found, remove it from the array
      this.listaDeConsultas.splice(index, 1);
    }

    // Return the updated list of consultations as an observable
    return new Observable<Consulta[]>(observer => {
      observer.next(this.listaDeConsultas);
      observer.complete();
    });
  }
}
