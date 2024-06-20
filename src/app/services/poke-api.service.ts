import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  private baseURL: string = '';

  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string): Observable<PokemonData> {
    return this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`);
  }
}
