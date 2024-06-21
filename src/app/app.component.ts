import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, CardComponent],

  template: ` <h1 style="text-align: center; margin: 20px;">Pokédex</h1>
    <card></card>
    <router-outlet />`,

  styleUrl: './app.component.scss',
})
export class AppComponent {}
