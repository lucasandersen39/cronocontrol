import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProyectListComponent } from './proyect-list/proyect-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProyectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cronocontrol';
}
