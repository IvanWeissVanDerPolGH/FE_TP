import { RegistroPersonaService } from 'src/app/services/registroDePersonas/service-registro-de-personas.service';
// registro-de-personas/registro-de-personas.component.ts
import { Component, OnInit } from '@angular/core';
import { RegistroPersona_interface } from './registro-de-personas.interface';



@Component({
  selector: 'app-registro-de-personas',
  templateUrl: './registro-de-personas.component.html',
  styleUrls: ['./registro-de-personas.component.css']
})
export class RegistroDePersonasComponent implements OnInit {
  nombreFilter: string = ''; // Declare the nombreFilter property
  apellidoFilter = '';
  filtroTipo = 'todos'; // Valor predeterminado para mostrar todos

  newPersona: RegistroPersona_interface = {
    idPersona: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    cedula: '',
    flag_es_doctor: false
  };
  filteredPersonas: RegistroPersona_interface[] = [];
  listaDePersonas: RegistroPersona_interface[] = [];
  isEditing: boolean[] = []; // Array to track editing state for each persona

  constructor(private personaService: RegistroPersonaService) {}

  ngOnInit(): void {
    this.loadPersonas();
  }

  applyFilters(): void {
    // Aplicar filtros en base a nombre, apellido y tipo
    this.filteredPersonas = this.listaDePersonas.filter((persona) => {
      const nombreMatches = persona.nombre.toLowerCase().includes(this.nombreFilter.toLowerCase());
      const apellidoMatches = persona.apellido.toLowerCase().includes(this.apellidoFilter.toLowerCase());

      if (this.filtroTipo === 'pacientes') {
        return !persona.flag_es_doctor && nombreMatches && apellidoMatches;
      } else if (this.filtroTipo === 'doctores') {
        return persona.flag_es_doctor && nombreMatches && apellidoMatches;
      } else {
        return nombreMatches && apellidoMatches;
      }
    });
  }


  loadPersonas(): void {
    this.personaService.getPersonas_sample().subscribe((personas) => {
      this.listaDePersonas = personas;
      this.isEditing = new Array(personas.length).fill(false);
    });
    this.applyFilters();
  }

  addPersona(): void {
    this.personaService.addPersona(this.newPersona).subscribe(() => {
      this.loadPersonas(); // Reload personas after adding
      this.newPersona = {
        idPersona: 0,
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        cedula: '',
        flag_es_doctor: false
      };
    });
  }

  editPersona(index: number): void {
    this.isEditing[index] = true;
  }

  updatePersona(persona: RegistroPersona_interface, index: number): void {
    this.personaService.updatePersona(persona).subscribe(() => {
      this.isEditing[index] = false;
      this.loadPersonas(); // Reload personas after updating
    });
  }

  deletePersona(idPersona: number): void {
    this.personaService.deletePersona(idPersona).subscribe(() => {
      this.loadPersonas(); // Reload personas after deleting
    });
  }
}
