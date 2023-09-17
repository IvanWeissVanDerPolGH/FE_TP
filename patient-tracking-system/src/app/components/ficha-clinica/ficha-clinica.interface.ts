import { Categoria } from "../consulta/consulta.interface";
import { ReservaDeTurno } from "../reserva-de-turnos/reserva-de-turnos.interface";

export interface FichaClinica {
    id: number;
    motivoConsulta: string;
    diagnostico: string;
    reserva: ReservaDeTurno;
    categoria: Categoria;
}