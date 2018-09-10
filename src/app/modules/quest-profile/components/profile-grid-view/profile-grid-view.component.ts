import { Component, OnInit } from '@angular/core';

const FETCH_LIMIT = 9;
@Component({
  selector: 'app-profile-grid-view',
  templateUrl: './profile-grid-view.component.html',
  styleUrls: ['./profile-grid-view.component.scss']
})
export class ProfileGridViewComponent implements OnInit {

  images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20 ,21, 22, 23, 24, 25, 26, 27];
  loadedImages: any = [];
  numberOfloadedItems: number;
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < FETCH_LIMIT; i++) {
      this.loadedImages.push(this.images[i]);
    }
    this.numberOfloadedItems = FETCH_LIMIT;
  }

  onScroll() {
    console.log('scrolled');
    for (let i = this.numberOfloadedItems;
      i < this.images.length && i < this.numberOfloadedItems + FETCH_LIMIT;
      i++) {
      this.loadedImages.push(this.images[i]);
    }
    this.numberOfloadedItems += FETCH_LIMIT;
  }
}
