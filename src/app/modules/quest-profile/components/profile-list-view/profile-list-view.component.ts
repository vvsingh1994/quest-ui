import { Component, OnInit } from '@angular/core';

const FETCH_LIMIT = 5;
@Component({
  selector: 'app-profile-list-view',
  templateUrl: './profile-list-view.component.html',
  styleUrls: ['./profile-list-view.component.scss']
})
export class ProfileListViewComponent implements OnInit {

  cards = ['Maah pic', 'Maah pic', 'Maah pic', 'Maah pic', 'Maah pic', 'Maah pic', 'Maah pic',
    'Maah pic', 'Maah pic', 'Maah pic', 'Maah pic', 'Maah pic', 'Maah pic'];

  loadedCards: any = [];
  numberOfloadedItems: number;
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < FETCH_LIMIT; i++) {
      this.loadedCards.push(this.cards[i]);
    }
    this.numberOfloadedItems = FETCH_LIMIT;
  }

  onScroll() {
    console.log('scrolled');
    for (let i = this.numberOfloadedItems;
      i < this.cards.length && i < this.numberOfloadedItems + FETCH_LIMIT;
      i++) {
      this.loadedCards.push(this.cards[i]);
    }
    this.numberOfloadedItems += FETCH_LIMIT;
  }

}
