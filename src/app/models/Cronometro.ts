import { Proyecto } from "../models/Proyecto";

export interface Cronometro {
    id_registro: number | null,
    inicio: Date,
    fin: Date | null,
    proyecto: Proyecto
}