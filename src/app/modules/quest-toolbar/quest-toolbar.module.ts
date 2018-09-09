import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ToolbarComponent, ImageUploaderComponent],
  exports: [ToolbarComponent],
  entryComponents: [ImageUploaderComponent]
})
export class QuestToolbarModule { }
