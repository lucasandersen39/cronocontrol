import { Card } from "./Card";

export interface Registro {
    id_registro: number | null,
    inicio: Date,
    fin: Date | null,
    segundos: number,
    card: Card
}