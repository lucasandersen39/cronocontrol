import { Proyecto } from './Proyecto';
export interface Card {
    id_card: number;
    nombre: string;
    minutos: number;
    descripcion: string;
    estado: string;
    proyecto: Proyecto;
}