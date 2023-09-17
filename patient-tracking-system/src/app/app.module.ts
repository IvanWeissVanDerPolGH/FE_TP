import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroDePersonasComponent } from './components/registro-de-personas/registro-de-personas.component';
import { ReservaDeTurnosComponent } from './components/reserva-de-turnos/reserva-de-turnos.component';
import { FichaClinicaComponent } from './components/ficha-clinica/ficha-clinica.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaComponent,
    RegistroDePersonasComponent,
    ReservaDeTurnosComponent,
    FichaClinicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
