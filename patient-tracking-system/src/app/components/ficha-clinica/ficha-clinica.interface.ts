import { Categoria } from "../consulta/consulta.interface";

export interface FichaClinica {
    id: number;
    motivo: string;
    diagnostico: string;
    categoria: number;
}