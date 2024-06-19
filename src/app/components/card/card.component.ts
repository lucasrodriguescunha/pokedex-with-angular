import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  name: string = 'Charmander';
  attributes: string[] = ['Fire', 'Rock'];
}
