import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelojService {

  private _segundos_acumulados: number = 0;
  detenido: BehaviorSubject<number> = new BehaviorSubject(this._segundos_acumulados);

  private _iniciado: boolean = false;
  iniciado: BehaviorSubject<boolean> = new BehaviorSubject(this._iniciado);

  constructor() { }

  stop(segundos: number): void {
    this._segundos_acumulados = segundos;
    this.detenido.next(this._segundos_acumulados);
  }

  start() {
    this._iniciado = true;
    this.iniciado.next(this._iniciado);
  }
}
