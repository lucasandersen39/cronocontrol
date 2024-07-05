import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProyectListComponent } from './proyect-list/proyect-list.component';
import { RelojCronometroComponent } from './reloj-cronometro/reloj-cronometro.component';
import { CronometroControlComponent } from './cronometro-control/cronometro-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CronometroControlComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cronocontrol';
}
