import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  bienvenida = 'Bienvenido. Que desea realizar?';

  cardList: any[] = [
    {
      icon: 'fal fa-tags',
      title: 'Categoria de Consultas',
      description: 'Se puede agregar, modificar o eliminar la categoria de las consultas.',
      routelink: 'consultas',
    },
    {
      icon: 'fal fa-file',
      title: 'Registro De Personas',
      description: 'Accede al registro de personas donde se puede crear un nuevo persona o modificar uno ya existente, Tambien se le asigna si es doctor o paciente.',
      routelink: 'registroDePersonas',
    },
    {
      icon: 'fal fa-pen-nib',
      title: 'Reserva de Turnos',
      description: 'Accede a la reserva de turnos para agregar o modificar un turno, tambien se puede quitar un reporte en excel o pdf.',
      routelink: 'reserva-de-turnos',
    }
    // Agrega más objetos de carta según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
