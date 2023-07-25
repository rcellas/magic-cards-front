import { Component } from '@angular/core';
import { Cards } from '../../model/Cards.model';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  cards: Cards[]=[]

  constructor(private cardsService:CardsService){}

  ngOnInit(){
    this.cardsService.getAll().subscribe(
      (response:any)=>this.cards = response.cards
    )
  }
}
