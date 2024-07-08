import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Card } from '../models/Card';

const URL = 'https://66895d0b0ea28ca88b87c0b2.mockapi.io/cards';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  private _cardAdd: Card | null = null;
  cardAdd: BehaviorSubject<Card | null> = new BehaviorSubject(this._cardAdd);

  constructor(private http: HttpClient) { }

  public getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(URL);
  }

  public saveCard(card: Card): Observable<Card> {

    return this.http.post<Card>(URL, card).pipe(
      tap(newCard => {
        this.cardAdd.next(newCard);
      })
    );
  }

  public updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(`${URL}/${card.id_card}`, card);
  }

}
