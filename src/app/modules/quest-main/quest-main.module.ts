import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestToolbarModule } from '../quest-toolbar/quest-toolbar.module';
import { QuestFeedModule } from '../quest-feed/quest-feed.module';
import { QuestMainComponent } from './quest-main.component';
@NgModule({
  imports: [
    CommonModule,
    QuestToolbarModule,
    QuestFeedModule
  ],
  declarations: [QuestMainComponent],
  exports: [QuestMainComponent]
})
export class QuestMainModule { }
