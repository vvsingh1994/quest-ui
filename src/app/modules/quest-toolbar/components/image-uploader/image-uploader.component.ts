import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UploaderService } from '../../../../services/uploader.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  fileToUpload: File = null;
  url: string;
  constructor(
    public dialogRef: MatDialogRef<ImageUploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private uploaderService: UploaderService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  handleFileInput(event: any) {
    console.log(event.target.files);
    this.fileToUpload = event.target.files.item(0);
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent) => {
        this.url = (<FileReader>e.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
    console.log(this.fileToUpload);
  }

  uploadSelectedFile() {
    console.log('uploading');
    this.uploaderService.uploadFile(this.fileToUpload).subscribe(data => {
      console.log('upload success', data);
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
