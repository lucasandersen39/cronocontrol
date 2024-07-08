import { Component } from '@angular/core';
import { Card } from '../models/Card';
import { RelojCronometroComponent } from '../reloj-cronometro/reloj-cronometro.component';
import { RealTimeFormatPipe } from '../../pipes/real-time-format.pipe';
import { CurrentCardService } from '../services/current-card.service';
import { RelojService } from '../services/reloj.service';
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

  constructor(private currentCardService: CurrentCardService, private relojService: RelojService, private cardDataService: CardDataService) { }

  ngOnInit() {
    this.currentCardService.cardSelected.subscribe(card => {
      this.card = card;
    });
    this.relojService.detenido.subscribe(segundos_acumulados => {
      if (this.card) {
        this.card.minutos = segundos_acumulados;
        this.card.estado = 'Pendiente';
        this.cardDataService.updateCard(this.card).subscribe(
          card => {
            this.card = card;
            this.currentCardService.desactiveCard();
          }
        );
      }
    });
    this.relojService.iniciado.subscribe(() => {
      if (this.card) {
        this.card.estado = 'En curso';
      }
    });
  }

  ngOnDestroy() {
    console.log("Destruido")
    // this.currentCardService.cardSelected.unsubscribe();
  }
}
