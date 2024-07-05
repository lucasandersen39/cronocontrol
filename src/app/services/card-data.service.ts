import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/Card';

const URL = 'https://cronocontrol.000webhostapp.com/api/cards';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor(private http: HttpClient) { }

  public getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(URL);
  }
}
