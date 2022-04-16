import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, listAll, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { environment } from 'src/environments/environment';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http!: HttpClient;

  // Create file metadata including the content type
  /** @type {any} */
  metadata = {
    contentType: 'application/json',
  };

  static firebaseConfig = environment.firebaseConfig
  static firebaseUiAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
      {
        scopes: [
          'https://www.googleapis.com/auth/contacts.readonly'
        ],
        customParameters: {
          'auth_type': 'reauthenticate'
        },
        provider: GoogleAuthProvider.PROVIDER_ID,
      },
      {
        requireDisplayName: false,
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
      },
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
  };
  static options: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
    reportProgress?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
    withCredentials?: boolean,
  }

  app = initializeApp(AuthService.firebaseConfig);
  // analytics = this.getAnalytics(this.app);
  storage = getStorage(this.app);
  storageRef = ref(this.storage, 'Json/IITQuizAppJson.json');


  uploadFile(file: File) {
    const uploadTask = uploadBytesResumable(this.storageRef, file, this.metadata);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            alert('Seems like you dont have access right now, Make sure you sign in with the same account you registered with');
            // User doesn't have permission to access the object
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }

  async downloadFile() {
    await getDownloadURL(this.storageRef)
      .then((url) => {
        // `url` is the download URL for 'Json/IITQuizApp.jpg'

        // This can be downloaded directly:
        // const xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = (event) => {
        //   const json = xhr.response;
        //   console.log(json);
        // };
        // xhr.open('GET', url);
        // xhr.send();
        console.log(url, this.http.get<any>('https://firebasestorage.googleapis.com/v0/b/iitquizappfilestorage.appspot.com/o/Json%2FIITQuizAppJson.json?alt=media&token=57634b83-4427-4a33-be60-55aba95e9342'))
        return this.http.get<any>(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }

  listAllFiles() {
    const listRef = ref(this.storage, 'Json/');

    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log(folderRef);

          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          console.log(itemRef);

          // All the items under listRef.
        });
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
  }

  firebaseApp(firebaseApp: any): void {
    throw new Error('Function not implemented.');
  }
  getAnalytics(app: FirebaseApp) {
    throw new Error('Function not implemented.');
  }

}


