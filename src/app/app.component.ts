import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RegistroCitaComponent } from "./components/registro-cita/registro-cita.component";
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RegistroCitaComponent, ConsultaClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fronted';

  showCarousel: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Cambia según la ruta en la que el carrusel deba mostrarse
      this.showCarousel = this.router.url === 'inicio' || this.router.url === '/';
    });
  }
}
