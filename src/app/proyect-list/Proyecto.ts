export interface Proyecto {
    id_proyecto: number;
    nombre: string;
    inicio: Date;
    fin: Date | null;
    empresa: string;
    estado: number;
}