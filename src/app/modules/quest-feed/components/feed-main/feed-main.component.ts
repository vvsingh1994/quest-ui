import { Component, OnInit } from '@angular/core';

const FETCH_LIMIT = 5;
@Component({
  selector: 'app-feed-main',
  templateUrl: './feed-main.component.html',
  styleUrls: ['./feed-main.component.scss']
})
export class FeedMainComponent implements OnInit {
  cards = ['hello', 'ladies', 'and', 'gentleman', 'how', 'are', 'you', 'doing',
    'hello', 'ladies', 'and', 'gentleman', 'how', 'are', 'you', 'doing'];

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
