import { Categoria } from "../consulta/consulta.interface";
import { ReservaDeTurno } from "../reserva-de-turnos/reserva-de-turnos.interface";
import { RegistroPersona_interface as Persona } from "../registro-de-personas/registro-de-personas.interface";

export interface FichaClinica {
    id: number;
    paciente: Persona;
    doctor: Persona;
    motivoConsulta: string;
    diagnostico: string;
    reserva: ReservaDeTurno;
    categoria: Categoria;
}