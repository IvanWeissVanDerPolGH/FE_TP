import { RegistroPersona_interface } from 'src/app/components/registro-de-personas/registro-de-personas.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data_RegistroDePersonas } from './../../../assets/data/RegistroDePersonas/RegistroDePersonas';

@Injectable({
  providedIn: 'root'
})
export class RegistroPersonaService {


  constructor() {}
  // Read operation: Get the list of personas
  getPersonas_sample(): Observable<RegistroPersona_interface[]> {
    // You can return the list of personas directly or fetch from an API if needed
    return new Observable<RegistroPersona_interface[]>((observer) => {
      observer.next(Data_RegistroDePersonas);
      observer.complete();
    });
  }

  // Create operation: Add a new persona
  addPersona(persona: RegistroPersona_interface): Observable<void> {
    // Generate a new ID (You may implement your own ID generation logic)
    const newId = this.generateNewId();

    // Set the new ID for the persona
    persona.idPersona = newId;

    // Push the new persona to the data source
    Data_RegistroDePersonas.push(persona);

    // You can save the updated data source to a file or an API if needed

    return new Observable<void>((observer) => {
      observer.next();
      observer.complete();
    });
  }

  // Update operation: Update an existing persona
  updatePersona(persona: RegistroPersona_interface): Observable<void> {
    const index = Data_RegistroDePersonas.findIndex((p) => p.idPersona === persona.idPersona);

    if (index !== -1) {
      // Replace the existing persona with the updated one
      Data_RegistroDePersonas[index] = persona;

      // You can save the updated data source to a file or an API if needed
    }

    return new Observable<void>((observer) => {
      observer.next();
      observer.complete();
    });
  }

  // Delete operation: Remove a persona by ID
  deletePersona(idPersona: number): Observable<void> {
    const index = Data_RegistroDePersonas.findIndex((p) => p.idPersona === idPersona);

    if (index !== -1) {
      // If the persona is found, remove it from the array
      Data_RegistroDePersonas.splice(index, 1);

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
    const maxId = Math.max(...Data_RegistroDePersonas.map((p) => p.idPersona), 0);

    // Generate a new ID by incrementing the maximum ID
    return maxId + 1;
  }
}
