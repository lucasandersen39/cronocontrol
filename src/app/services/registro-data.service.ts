import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Registro } from '../models/Registro';

const URL = 'https://66895d0b0ea28ca88b87c0b2.mockapi.io/registros';

@Injectable({
  providedIn: 'root'
})
export class RegistroDataService {

  constructor(private http: HttpClient) { }

  public getAllRegistros(): Observable<Registro[]> {
    return this.http.get<Registro[]>(URL);
  }

  public startRegistro(registro: Registro): Observable<Registro> {
    return this.http.post<Registro>(URL, registro);
  }

  public stopRegistro(registro: Registro): Observable<Registro> {
    return this.http.put<Registro>(`${URL}/${registro.id_registro}`, registro);
  }
}
