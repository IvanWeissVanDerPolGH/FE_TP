import { Component, OnInit } from '@angular/core';
import { FichaClinicaFiltro } from './ficha-clinica-filtro.interface';
import { data_DatosDeReservas } from 'src/assets/data/reserva/data_reserva';
import { ReservaDeTurno } from '../reserva-de-turnos/reserva-de-turnos.interface';
import { FichaClinicaService } from './ficha-clinica.service';
import { Categoria } from '../consulta/consulta.interface';

@Component({
    selector: 'app-ficha-clinica',
    templateUrl: './ficha-clinica.component.html',
    styleUrls: ['./ficha-clinica.component.css']
  })
export class FichaClinicaComponent implements OnInit {
    categorias: Categoria[] = [];
    filtros:  FichaClinicaFiltro = {
        doctor: '',
        paciente: '',
        fechaDesde: '',
        fechaHasta: '',
        categoria: 0
    }

    constructor(
        private fichaClinicaSercive: FichaClinicaService
    ) {}

    ngOnInit(): void {
        this.loadCategorias();
        this.applyFilters();
    }

    // Aplicar filtros y cargar las fichas
    applyFilters(): void {
        // Llama al servicio para cargar las reservas con los filtros
        this.fichaClinicaSercive.getfichas(this.filtros).subscribe((reservasFormateadas) => {
        this.reservasFormateadas = reservasFormateadas;
      
      });
    }

    loadCategorias(): void {
        this.consultaService.getCategorias().subscribe((categorias) => {
          // Aquí puedes acceder a la lista de categorias
          this.categorias = categorias;
        });
      }
}