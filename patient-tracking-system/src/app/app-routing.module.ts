import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroDePersonasComponent } from './components/registro-de-personas/registro-de-personas.component';
import { ReservaDeTurnosComponent } from './components/reserva-de-turnos/reserva-de-turnos.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Redirect to 'home' by default
  { path: 'consultas', component: ConsultaComponent }, // Replace 'ConsultaComponent' with your component
  { path: 'registroDePersonas', component: RegistroDePersonasComponent},
  { path: 'reserva-de-turnos', component: ReservaDeTurnosComponent}
  // Add more routes for other components/pages as needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
