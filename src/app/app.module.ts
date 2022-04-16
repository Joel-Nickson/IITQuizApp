import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from
  '@angular/common/http';
import { FITB1Component } from './fitb1/fitb1.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { Fitb2Component } from './fitb2/fitb2.component';
import { MaqComponent } from './maq/maq.component';
import { McqComponent } from './mcq/mcq.component';
import { MtfComponent } from './mtf/mtf.component';
import { FormsModule } from '@angular/forms';
import { ShufflePipe } from './shuffle.pipe';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseUIModule } from 'firebaseui-angular';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    QuestionListComponent,
    FITB1Component,
    Fitb2Component,
    MaqComponent,
    McqComponent,
    MtfComponent,
    ShufflePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(AuthService.firebaseUiAuthConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
