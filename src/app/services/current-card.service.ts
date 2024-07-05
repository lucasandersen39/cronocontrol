import { Injectable } from '@angular/core';
import { Card } from '../models/Card';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentCardService {

  private _cardSelected: Card | null = null;
  cardSelected: BehaviorSubject<Card | null> = new BehaviorSubject(this._cardSelected);

  constructor() { }

  activeCard(card: Card): void {
    if (!this._cardSelected) {
      this._cardSelected = card;
      this.cardSelected.next(this._cardSelected);
    }

  }

  desactiveCard(): void {
    this._cardSelected = null;
  }
}
