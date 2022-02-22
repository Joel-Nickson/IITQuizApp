import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from
  '@angular/common/http';
import { FITB1Component } from './fitb1/fitb1.component';

@NgModule({
  declarations: [
    AppComponent,
    // FileUploadComponent,
    FITB1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
