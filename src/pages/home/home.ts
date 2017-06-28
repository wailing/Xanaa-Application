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
import {Camera} from 'ionic-native';
import {Page} from 'ionic-angular';

@Component({
  templateUrl: 'home.html',
  selector: 'home',
})

@Page({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
public base64Image: string;
public rootPage: any = HomePage;
nameInput: 'lolo';
myUser: any;
  constructor(public menuCtrl: MenuController, protected app: App, private navCtrl: NavController, private auth: AuthProvider, private loadingCtrl: LoadingController ) {
  this.myUser = this.auth.user;
  console.log(this.myUser);
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
  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
}

}
