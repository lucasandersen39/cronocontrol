import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reloj } from '../models/Reloj';

@Injectable({
  providedIn: 'root'
})
export class RelojService {

  private _reloj: Reloj = {
    segundos_acumulados: 0,
    reloj_iniciado: false,
    fecha_hoy: new Date(),
    startTime: null
  };

  detenido: BehaviorSubject<Reloj> = new BehaviorSubject(this._reloj);

  private _iniciado: boolean = false;
  iniciado: BehaviorSubject<Reloj> = new BehaviorSubject(this._reloj);

  constructor() { }

  stop(segundos_acumulados: number): void {
    this._reloj.segundos_acumulados = segundos_acumulados;
    this.detenido.next(this._reloj);
    this._reloj.reloj_iniciado = false;
    this._reloj.startTime = null;
  }

  start() {
    this._reloj.reloj_iniciado = true;
    this._reloj.startTime = Date.now();
    this.iniciado.next(this._reloj);
  }

}
