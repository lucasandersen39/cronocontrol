export interface Reloj {
    texto_pantalla: string,
    segundos_acumulados: number,
    reloj_iniciado: boolean,
    fecha_hoy: Date,
    startTime: number | null,
}