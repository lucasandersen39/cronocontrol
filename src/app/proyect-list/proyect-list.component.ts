import { Component } from '@angular/core';
import { Proyecto } from './Proyecto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyect-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyect-list.component.html',
  styleUrl: './proyect-list.component.scss'
})
export class ProyectListComponent {
  proyectos: Proyecto[] = [
    {
      id_proyecto: 1,
      nombre: 'Proyecto 1',
      inicio: new Date('2024-01-05 08:00:00'),
      fin: null,
      empresa: 'Empresa 1',
      estado: 1
    },
    {
      id_proyecto: 2,
      nombre: 'Proyecto 2',
      inicio: new Date('2024-02-01 07:00:00'),
      fin: null,
      empresa: 'Empresa 2',
      estado: 1
    },
    {
      id_proyecto: 3,
      nombre: 'Proyecto 3',
      inicio: new Date('2023-03-15'),
      fin: new Date('2024-01-15'),
      empresa: 'Empresa 3',
      estado: 0
    }
  ];
}
