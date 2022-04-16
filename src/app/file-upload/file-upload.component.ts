import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  ngOnInit() { }
  @Input() requiredFileType = '';

  fileName = '';
  file: File | undefined;
  uploadProgress = 0;
  uploadSub = new Subscription;
  authService = new AuthService();

  constructor() { }

  onFileSelected(event: any) {
    this.file = event.target.files[0];

    if (this.file) {
      this.fileName = this.file.name;
      const formData = new FormData();
      formData.append("thumbnail", this.file);
    }
  }
  onFileUpload() {
    this.authService.downloadFile().then(data => {
      console.log(data)
    });
    if (this.file) {
    }
  }

  getFile() {

  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription;
  }

}
