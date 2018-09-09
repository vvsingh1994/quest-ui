import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  fileStore: File;
  constructor(private httpClient: HttpClient) { }

  uploadFile(fileToUpload: File): Observable<boolean> {
    console.log('upload service called');
    const endpoint = 'E:/temp';
    this.fileStore = fileToUpload;
    return new Observable((subscriber: Subscriber<boolean>) => subscriber.next(true));
    // const formData: FormData = new FormData();
    // formData.append('file', fileToUpload, fileToUpload.name);
    // return this.httpClient
    //   .post(endpoint, formData, {}).pipe(
    //     map(() => true)
    //   );
  }
}

