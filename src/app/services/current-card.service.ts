import { Injectable } from '@angular/core';
import { Card } from '../models/Card';
import { BehaviorSubject } from 'rxjs';
import { Reloj } from '../models/Reloj';
import { RelojService } from './reloj.service';
import { CardDataService } from './card-data.service';
import { RegistroDataService } from './registro-data.service';
import { Registro } from '../models/Registro';

@Injectable({
  providedIn: 'root'
})
export class CurrentCardService {

  private _cardSelected: Card | null = null;
  cardSelected: BehaviorSubject<Card | null> = new BehaviorSubject(this._cardSelected);

  private _reloj: Reloj | null = null;

  private registro: Registro | null = null;

  constructor(private relojService: RelojService, private cardDataService: CardDataService, private registroDataService: RegistroDataService) {

    this.relojService.iniciado.subscribe(reloj => {
      this._reloj = reloj;
      if (this._cardSelected) {
        this.registro = {
          id_registro: null,
          card: this._cardSelected,
          inicio: new Date(),
          fin: null,
          segundos: 0
        };
        this._cardSelected.estado = 'En curso';
        this.registroDataService.startRegistro(this.registro).subscribe(
          registro => {
            this.registro = registro;
          }
        );
      }

    });
    this.relojService.detenido.subscribe(reloj => {
      if (this._cardSelected) {
        this._cardSelected.minutos += reloj.segundos_acumulados;
        this._cardSelected.estado = 'En proceso';
        this.cardDataService.updateCard(this._cardSelected).subscribe(
          card => {
          }
        );
        if (this.registro) {
          this.registro.fin = new Date();
          this.registro.segundos = reloj.segundos_acumulados;
          this.registroDataService.stopRegistro(this.registro).subscribe(
            registro => {
              this.registro = null;
            }
          );
        }
      }
      this._reloj = reloj;
    });
  }


  activeCard(card: Card): void {
    if (!this._cardSelected || (this._cardSelected && this._cardSelected.estado != 'En curso')) {
      this._cardSelected = card;
      this.cardSelected.next(this._cardSelected);
    }
  }

  desactiveCard(): void {
    this._cardSelected = null;
  }
}
