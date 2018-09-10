import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileDetailComponent],
  exports: [ProfileDetailComponent]
})
export class QuestProfileModule { }
