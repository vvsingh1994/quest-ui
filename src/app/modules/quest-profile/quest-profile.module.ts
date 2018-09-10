import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePostsComponent } from './components/profile-posts/profile-posts.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileListViewComponent } from './components/profile-list-view/profile-list-view.component';
import { ProfileGridViewComponent } from './components/profile-grid-view/profile-grid-view.component';
import { MaterialModule } from '../material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  declarations: [ProfilePostsComponent, ProfileCardComponent, ProfileListViewComponent, ProfileGridViewComponent],
  exports: [ProfilePostsComponent]
})
export class QuestProfileModule { }
