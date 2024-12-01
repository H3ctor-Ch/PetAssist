import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './historial-citas.component.html',
  styleUrls: ['./historial-citas.component.css']
})
export class HistorialCitasComponent {
  citas = [
    {
      usuario: 'Juan Pérez',
      mascota: 'Luna',
      tipo: 'Perro',
      especialidad: 'Veterinaria General',
      fecha: '15/12/23',
    },
    {
      usuario: 'Ana Gómez',
      mascota: 'Michi',
      tipo: 'Gato',
      especialidad: 'Dermatología',
      fecha: '20/12/23',
    },
    {
      usuario: 'Carlos Ruiz',
      mascota: 'Firulais',
      tipo: 'Perro',
      especialidad: 'Ortopedia',
      fecha: '05/01/24',
    },
    {
      usuario: 'María López',
      mascota: 'Nemo',
      tipo: 'Pez',
      especialidad: 'Veterinaria General',
      fecha: '10/01/24',
    },
  ];
}
