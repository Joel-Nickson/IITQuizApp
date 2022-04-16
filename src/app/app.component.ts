import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IITQuizApp';
  fileNotUploaded = true;
  constructor(public gAuth: AngularFireAuth) {
    gAuth.authState.subscribe(user => {
      if (user) {
        console.log(user);
      } else {
        console.log('not logged in');
      }
    });
  }
}

