import { Routes } from '@angular/router';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { RegistroCitaComponent } from './components/registro-cita/registro-cita.component';
import { InicioClienteComponent } from './components/inicio-cliente/inicio-cliente.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioClienteComponent // Aquí cargas el componente con el carrusel
  },
  {
    path: 'consulta',
    component: ConsultaClienteComponent
  },
  {
    path: 'registro',
    component: RegistroCitaComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];