import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../model/Cards.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Cards[]>{
    return this.http.get<Cards[]>(`${environment.API_URL}`)
  }
}
