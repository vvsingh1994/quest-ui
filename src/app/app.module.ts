import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestLoginModule } from './modules';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuestLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
