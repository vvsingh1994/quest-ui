import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  QuestLoginModule,
  MaterialModule,
  QuestMainModule
} from './modules';
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QuestLoginModule,
    MaterialModule,
    QuestMainModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
