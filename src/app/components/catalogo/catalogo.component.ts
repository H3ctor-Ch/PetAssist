import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl:'./catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

}
