import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss']
})
export class ProfilePostsComponent implements OnInit {
  gridFlag: Boolean;
  constructor() { }

  ngOnInit() {
    this.gridFlag = false;
  }

  makeFlagTrue() {
    this.gridFlag = true;
  }

  makeFlagFalse() {
    this.gridFlag = false;
  }

}
