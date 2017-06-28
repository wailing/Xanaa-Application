import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth';
import { DataProvider } from '../../providers/data';
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularFire2';

import * as pdfmake from 'pdfmake/build/pdfmake';

@Component({
  selector: 'page-docs',
  templateUrl: 'docs.html'
})
export class DocsPage {
  public rootPage: any = HomePage;
  nameInput: 'lolo';
  myUser: any;

  constructor(public navCtrl: NavController, private auth: AuthProvider, public dp: DataProvider, private alertCtrl: AlertController) {
    this.myUser = this.auth.user;
    console.log(this.myUser);
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
      pdfmake.createPdf(dd).getBlob(buffer => {
  this.file.resolveDirectoryUrl(this.file.externalRootDirectory)
   .then(dirEntry => {
      this.file.getFile(dirEntry, 'test1.pdf', { create: true })
        .then(fileEntry => {
          fileEntry.createWriter(writer => {
            writer.onwrite = () => {
              this.fileOpener.open(fileEntry.toURL(), 'application/pdf')
                .then(res => { })
                .catch(err => {
                  const alert = this.alertCtrl.create({ message:
err.message, buttons: ['Ok'] });
                  alert.present();
                });
            }
            writer.write(buffer);
          })
        })
        .catch(err => {
          const alert = this.alertCtrl.create({ message: err, buttons: ['Ok'] });
          alert.present();
        });
    })
    .catch(err => {
      const alert = this.alertCtrl.create({ message: err, buttons: ['Ok']
});
      alert.present();
    });
});
    }
}
