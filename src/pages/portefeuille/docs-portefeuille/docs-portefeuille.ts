import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {App} from "ionic-angular";
import { LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth';
import { AuthPage } from '../../auth/home/home';
import {Platform} from 'ionic-angular';
import {Camera, CameraOptions } from 'ionic-native';
import { AlertController } from 'ionic-angular';

import { AppModule } from '../../../app/app.module';
@Component({
  templateUrl: 'docs-portefeuille.html',
  selector: 'docs-portefeuille',
  providers: [Camera]
  })



export class DocsPortefeuille {
public base64Image: string;
nameInput: 'lolo';
myUser: any;
captureDataUrl: string;
imageURL

  constructor(protected app: App, private navCtrl: NavController, private auth: AuthProvider, private loadingCtrl: LoadingController, public platform : Platform, public camera: Camera, private alertCtrl: AlertController) {
  }
   /// Déconnexion
  logout() {
    let loading = this.loadingCtrl.create({
      content: 'Patientez...'
    });
    loading.present();
    loading.dismiss();
    this.auth.logout();
    this.navCtrl.setRoot(AuthPage);
  }

  // Date

  public event = {
    month: '2017-07-08',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
}


// PDF
pdfSrc: string = '/pdf-test.pdf';
page: number = 1;

// Site Web externe

// PRENDRE PHOTO
takePhoto(){
  Camera.getPicture().then((imageData) => {
     this.imageURL = imageData
  }, (err) => {
     console.log(err);
  });
}





capture() {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
    };

    Camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = imageData;
      console.log("iciiiiii");
    }, (err) => {
      // Handle error
    });
  }

  upload() {
      let storageRef = firebase.storage().ref();
      // Create a timestamp as filename
      const filename = Math.floor(Date.now() / 1000);
      console.log("iciiiii2i");

      // Create a reference to 'images/todays-date.jpg'
      const imageRef = storageRef.child('images/${filename}.jpg');
      console.log("iciiiiii3");

      imageRef.putString(this.imageURL, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
       // Do something here when the data is succesfully uploaded!
       console.log("iciiiiii4");

       this.showSuccesfulUploadAlert();

      });

    }

  showSuccesfulUploadAlert() {
  let alert = this.alertCtrl.create({
    title: 'Uploaded!',
    subTitle: 'Picture is uploaded to Firebase',
    buttons: ['OK']
  });
  alert.present();

  // clear the previous photo data in the variable
  this.imageURL = "";
  }


}
