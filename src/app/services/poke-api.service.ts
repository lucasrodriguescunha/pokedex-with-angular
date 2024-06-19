import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  private baseURL: string = '';

  constructor() {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string) {
    console.log(pokemonName);
    console.log(this.baseURL);
  }
}
