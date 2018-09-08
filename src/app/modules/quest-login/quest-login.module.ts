import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestLoginMainComponent } from './components/quest-login-main/quest-login-main.component';
import { MaterialModule } from '../material/material.module';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [QuestLoginMainComponent, SignupComponent],
  exports: [QuestLoginMainComponent],
  entryComponents: [SignupComponent]
})
export class QuestLoginModule { }
