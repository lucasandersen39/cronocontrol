import { Component, Input } from '@angular/core';
import { Card } from '../models/Card';
import { CardDataService } from '../services/card-data.service';
import { RealTimeFormatPipe } from '../../pipes/real-time-format.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CurrentCardService } from '../services/current-card.service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RealTimeFormatPipe],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})

export class CardListComponent {
  cards: Card[] = [];
  @Input()
  actionActive: boolean = true;
  constructor(private currentCardService: CurrentCardService, private cardDataService: CardDataService) { }

  ngOnInit() {
    this.cardDataService.getAllCards().subscribe(cards => {
      this.cards = cards;
    });
    this.cardDataService.cardAdd.subscribe(card => {
      if (card) {
        this.cards.push(card);
      }
    });
  }

  activeCard(card: Card): void {
    this.currentCardService.activeCard(card);
  }

}
