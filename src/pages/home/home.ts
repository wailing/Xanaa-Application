import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import {App} from "ionic-angular";
import { LoadingController } from 'ionic-angular';
import { AuthPage } from '../auth/home/home';
import { DocsAdminPage } from '../docs-admin/menu/menu';
import { ProfilPage } from '../profil/profil';
import { MenuController } from 'ionic-angular';
import * as pdfmake from 'pdfmake/build/pdfmake';
import { DocsPage } from '../docs/docs';
import {Camera, CameraOptions } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import { MenuPortefeuille } from '../portefeuille/menu/menu';

@Component({
  templateUrl: 'home.html',
  selector: 'home',
  providers: [Camera]
})


export class HomePage {
public base64Image: string;
public rootPage: any = HomePage;
nameInput: 'lolo';
myUser: any;
captureDataUrl: string;
imageURL

  constructor(public menuCtrl: MenuController, protected app: App, private navCtrl: NavController, private auth: AuthProvider, private loadingCtrl: LoadingController, public camera: Camera, private alertCtrl: AlertController ) {
  this.myUser = this.auth.user;
  console.log(this.myUser);
  this.alertCtrl = alertCtrl;
  }

// Deconnexion
  logout() {
    let loading = this.loadingCtrl.create({
      content: 'Patientez...'
    });
    loading.present();
    loading.dismiss();
    this.auth.logout();
    this.navCtrl.setRoot(AuthPage);
  }

// Bouttons pour les pages
  openAdminPage(): void {
    this.navCtrl.push(DocsAdminPage);
  }
  openSantePage(): void {
    this.navCtrl.push(DocsAdminPage);
  }
  openLogementPage(): void {
    this.navCtrl.push(DocsAdminPage);
  }
  openAutoPage(): void {
    this.navCtrl.push(DocsAdminPage);
  }

  openProfilPage(): void {
    this.navCtrl.push(ProfilPage);
  }

  openDocsPage(): void {
    this.navCtrl.push(DocsPage);
  }

  openPortefeuillePage(): void {
    this.navCtrl.push(MenuPortefeuille);
  }


  // PDF
  public testPdf() {
  var name = this.myUser.name;
  var dd = {
     content: [
        { text: ' ', style: 'droite', margin: [ 5, 2, 40, 20 ] },
        { text: ' ', style: 'droite', margin: [ 5, 2, 40, 20 ] },
       { text: 'Je soussigné, '+this.myUser.name+' , [profession], demeurant __________ [adresse], reconnaît avoir opté pour le système de la mensualisation pour le paiement de mon impôt sur le revenu.', style: 'gauche',  margin: [ 5, 60, 10, 20 ]  },
       { text:'Toutefois, je traverse actuellement des difficultés financières qui m’amènent à solliciter auprès de vos services un arrêt provisoire des prélèvements automatiques que vous effectuez. En effet, à la suite d’événements à l’origine des difficultés financières], mes ressources mensuelles ont fortement diminué. ' ,  margin: [ 5, 2, 10, 20 ]  },
       { text: 'C’est pourquoi je me permets de vous demander l’arrêt des prélèvements mensuels pendant une période de XX mois à l’issue de laquelle je m’engage à vous régler le solde des montants.', margin: [ 5, 2, 10, 20 ]  },
       { text: 'Dans l’attente de votre confirmation et vous remerciant de votre diligence, je vous prie d’agréer, Madame, Monsieur, ma considération distinguée,', style: 'gauche', margin: [ 5, 2, 10, 20 ] },
       { text: ' ', style: 'droite', margin: [ 5, 2, 40, 20 ] },
       { text: ' ', style: 'droite', margin: [ 5, 2, 40, 20 ] },
       { text: ' '+this.myUser.name+'', style: 'droite', margin: [ 5, 2, 40, 20 ] }
     ],

     styles: {
            droite: {
         alignment: 'right'
       },
  	 gauche: {
         alignment: 'left'
       }
     }
   };
        console.log(this.myUser.name);
        console.log(dd);
      pdfmake.createPdf(dd,name).download('Resiliation prelevement impot.pdf');
    }

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
