import { Component } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';
import { CurrentCardComponent } from '../current-card/current-card.component';

@Component({
  selector: 'app-cronometro-control',
  standalone: true,
  imports: [CardListComponent, CurrentCardComponent],
  templateUrl: './cronometro-control.component.html',
  styleUrl: './cronometro-control.component.scss'
})
export class CronometroControlComponent {
  constructor() { }
}
