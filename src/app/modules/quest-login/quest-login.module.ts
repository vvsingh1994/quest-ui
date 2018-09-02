import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestLoginMainComponent } from './components/quest-login-main/quest-login-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuestLoginMainComponent],
  exports: [QuestLoginMainComponent]
})
export class QuestLoginModule { }
