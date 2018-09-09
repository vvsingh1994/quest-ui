import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedMainComponent } from './components/feed-main/feed-main.component';
import { MaterialModule } from '../material/material.module';
import { InfiniteScrollModule } from '../../../../node_modules/ngx-infinite-scroll';
import { FeedCardComponent } from './components/feed-card/feed-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  declarations: [FeedMainComponent, FeedCardComponent],
  exports: [FeedMainComponent]
})
export class QuestFeedModule { }
