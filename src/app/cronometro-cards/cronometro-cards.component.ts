import { Component } from '@angular/core';
import { FormCardComponent } from '../form-card/form-card.component';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  selector: 'app-cronometro-cards',
  standalone: true,
  imports: [FormCardComponent, CardListComponent],
  templateUrl: './cronometro-cards.component.html',
  styleUrl: './cronometro-cards.component.scss'
})
export class CronometroCardsComponent {

}
