import { Categoria } from "../consulta/consulta.interface";
import { RegistroPersona_interface as Persona } from "../registro-de-personas/registro-de-personas.interface";

export interface ReservaDeTurno {
  id: number; // ID único de la reserva
  doctor: Persona; // Nombre del doctor
  paciente: Persona; // Nombre del paciente
  fecha: Date; // Fecha de la reserva
  hora: string; // Horario de la reserva (por ejemplo, "09:00 - 10:00")
  categoria:Categoria;//Descripcion de la categoria
}
