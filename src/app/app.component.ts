import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],

  template: ` <h1>Pokédex</h1>
    <card></card>
    <router-outlet />`,

  styleUrl: './app.component.scss',
})
export class AppComponent {}
