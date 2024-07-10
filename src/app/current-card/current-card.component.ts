import { Component } from '@angular/core';
import { Card } from '../models/Card';
import { RelojCronometroComponent } from '../reloj-cronometro/reloj-cronometro.component';
import { RealTimeFormatPipe } from '../../pipes/real-time-format.pipe';
import { CurrentCardService } from '../services/current-card.service';
import { CardDataService } from '../services/card-data.service';


@Component({
  selector: 'app-current-card',
  standalone: true,
  imports: [RelojCronometroComponent, RealTimeFormatPipe],
  templateUrl: './current-card.component.html',
  styleUrl: './current-card.component.scss'
})

export class CurrentCardComponent {
  card: Card | null = null;


  constructor(private currentCardService: CurrentCardService, private cardDataService: CardDataService) { }

  ngOnInit() {
    this.currentCardService.cardSelected.subscribe(card => {
      this.card = card;
    });
  }


}
