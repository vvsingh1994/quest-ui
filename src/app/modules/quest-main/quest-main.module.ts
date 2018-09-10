import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestToolbarModule } from '../quest-toolbar/quest-toolbar.module';
import { QuestFeedModule } from '../quest-feed/quest-feed.module';
import { QuestMainComponent } from './quest-main.component';
import { QuestProfileModule } from '../quest-profile/quest-profile.module';
@NgModule({
  imports: [
    CommonModule,
    QuestToolbarModule,
    QuestFeedModule,
    QuestProfileModule
  ],
  declarations: [QuestMainComponent],
  exports: [QuestMainComponent]
})
export class QuestMainModule { }
