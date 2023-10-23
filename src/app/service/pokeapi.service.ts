import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  req: any;
  pokemons = [];

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=15';

  constructor(private http: HttpClient) { }

  carregarPokemons(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


}
