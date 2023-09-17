import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/components/consulta/consulta.service';
import { Categoria } from './consulta.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})


export class ConsultaComponent implements OnInit{
  newConsulta: Categoria = { id: -1, descripcion: '' ,isEditing: false}; // Initialize a new consultation
  listaDeConsultas: Categoria[] = [];

  constructor(private ConsultaService: ConsultaService) {}

  ngOnInit(): void {
    this.loadConsultas();
    this.sortConsultasById()
  }


  // Sort the listaDeConsultas array by id
  sortConsultasById(): void {
    this.listaDeConsultas.sort((a, b) => a.id - b.id);
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
      this.newConsulta = { id: -1, descripcion: '' ,isEditing: false}; // Clear the form
      this.sortConsultasById();
    });
  }

  // Edit operation: Enable editing for a consultation
  editConsulta(consulta: Categoria): void {
    consulta.isEditing = true;
    this.sortConsultasById();
  }

  // Update operation: Apply changes to a consultation
  updateConsulta(consulta: Categoria, index: number): void {
    // Send the updated consultation to the service for processing
    this.ConsultaService.updateConsulta(consulta).subscribe(() => {
      // Optionally, you can handle the response here and update the list
      this.listaDeConsultas[index].isEditing = false; // Disable editing mode
      this.sortConsultasById();
    });
  }

  // Delete operation: Remove a consultation by id
  deleteConsulta(id: number): Observable<Categoria[]> {
    // Find the index of the consultation with the matching id
    const index = this.listaDeConsultas.findIndex(consulta => consulta.id === id);

    if (index !== -1) {
      // If the consultation is found, remove it from the array
      this.listaDeConsultas.splice(index, 1);
    }

    // Return the updated list of consultations as an observable
    return new Observable<Categoria[]>(observer => {
      observer.next(this.listaDeConsultas);
      observer.complete();
    });
  }
}
