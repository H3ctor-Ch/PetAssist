import { Routes } from '@angular/router';
import { RegistroCitaComponent } from './components/registro-cita/registro-cita.component';
import { InicioClienteComponent } from './components/inicio-cliente/inicio-cliente.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component'; 
import { HistorialCitasComponent } from './components/historial-citas/historial-citas.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioClienteComponent 
  },
  {
    path: 'registro',
    component: RegistroCitaComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'historial',
    component: HistorialCitasComponent
  }
];