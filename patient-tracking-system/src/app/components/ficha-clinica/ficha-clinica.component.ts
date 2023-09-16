import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ficha-clinica',
    templateUrl: './ficha-clinica.component.html',
    styleUrls: ['./ficha-clinica.component.css']
  })
export class FichaClinicaComponent implements OnInit {

    ngOnInit(): void {
        this.init(); // Carga las reservas del día actual por defecto
    }

    init() {
        //hace el init
    }
}