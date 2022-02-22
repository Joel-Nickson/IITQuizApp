import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from
  '@angular/common/http';
import { FITB1Component } from './fitb1/fitb1.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { Fitb2Component } from './fitb2/fitb2.component';
import { MaqComponent } from './maq/maq.component';
import { McqComponent } from './mcq/mcq.component';
import { MtfComponent } from './mtf/mtf.component';

@NgModule({
  declarations: [
    AppComponent,
    // FileUploadComponent,
    FITB1Component,
    QuestionListComponent,
    Fitb2Component,
    MaqComponent,
    McqComponent,
    MtfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
