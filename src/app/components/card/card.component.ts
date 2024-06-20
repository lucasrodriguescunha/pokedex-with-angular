import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PokeAPIService } from '../../services/poke-api.service';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  name: string = 'Charmander';
  attributes: string[] = ['Fire', 'Rock'];

  constructor(private service: PokeAPIService) {}

  ngOnInit(): void {
    this.service.getPokemon('charizard').subscribe({
      next: (res) => {
        console.log(res);
        console.log(res.id);
        console.log(res.name);
        console.log(res.sprites.front_default);
      },
      error: (err) => console.log(err),
    });
  }
}
