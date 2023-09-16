import { RegistroPersona_interface as Persona } from 'src/app/components/registro-de-personas/registro-de-personas.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data_RegistroDePersonas } from '../../../assets/data/RegistroDePersonas/RegistroDePersonas';

@Injectable({
  providedIn: 'root'
})
export class RegistroPersonaService {
  private listaPersonas: Persona[]


  constructor() {
    this.listaPersonas = Data_RegistroDePersonas
  }

  // Read operation: Get the list of personas
  getPersonas_sample(): Observable<Persona[]> {
    // You can return the list of personas directly or fetch from an API if needed
    return new Observable<Persona[]>((observer) => {
      observer.next(this.listaPersonas);
      observer.complete();
    });
  }

  // Create operation: Add a new persona
  addPersona(persona: Persona): Observable<void> {

    // Genera un ID nuevo y lo asigna a la persona
    persona.idPersona = this.generateNewId();

    // Push the new persona to the data source
    this.listaPersonas.push(persona);

    // You can save the updated data source to a file or an API if needed

    return new Observable<void>((observer) => {
      observer.next();
      observer.complete();
    });
  }

  // Update operation: Update an existing persona
  updatePersona(persona: Persona): Observable<void> {
    const index = this.listaPersonas.findIndex((p) => p.idPersona === persona.idPersona);

    if (index !== -1) {
      // Replace the existing persona with the updated one
      this.listaPersonas[index] = persona;

      // You can save the updated data source to a file or an API if needed
    }

    return new Observable<void>((observer) => {
      observer.next();
      observer.complete();
    });
  }

  // Delete operation: Remove a persona by ID
  deletePersona(idPersona: number): Observable<void> {
    const index = this.listaPersonas.findIndex((p) => p.idPersona === idPersona);

    if (index !== -1) {
      // If the persona is found, remove it from the array
      this.listaPersonas.splice(index, 1);

      // You can save the updated data source to a file or an API if needed
    }

    return new Observable<void>((observer) => {
      observer.next();
      observer.complete();
    });
  }

  // Generate a new unique ID (You may implement your own logic)
  private generateNewId(): number {
    // Find the maximum ID in the current data
    const maxId = Math.max(...this.listaPersonas.map((p) => p.idPersona), 0);

    // Generate a new ID by incrementing the maximum ID
    return maxId + 1;
  }
}
