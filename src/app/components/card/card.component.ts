import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PokeAPIService } from '../../services/poke-api.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  pokemon: PokemonData;

  constructor(private service: PokeAPIService) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: '',
      },
      types: [],
    };
  }

  ngOnInit(): void {
    this.searchPokemon('pikachu');
  }

  searchPokemon(searchName: string) {
    // Convertendo a entrada para minúsculas antes de fazer a busca
    const lowerCaseName = searchName.toLowerCase();

    this.service.getPokemon(lowerCaseName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name.toUpperCase(),
          sprites: res.sprites,
          types: res.types,
        };

        console.log(res);
        console.log(this.pokemon);
      },
      error: (err) => console.log(err),
    });
  }
}
