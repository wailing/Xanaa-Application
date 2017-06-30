import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {App} from "ionic-angular";
import { DocsPortefeuille } from '../docs-portefeuille/docs-portefeuille';
import { LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth';
import { AuthPage } from '../../auth/home/home';
import { AlertController } from 'ionic-angular';


@Component({
  templateUrl: 'menu.html',
  selector: 'page-menu',
})
export class MenuPortefeuille {
constructor(protected app: App, private navCtrl: NavController, private auth: AuthProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
}

logout() {
  let loading = this.loadingCtrl.create({
    content: 'Patientez...'
  });
  loading.present();
  loading.dismiss();
  this.auth.logout();
  this.navCtrl.setRoot(AuthPage);
}

openPortefeuillePage(): void {
  this.presentAlert();
  this.navCtrl.push(DocsPortefeuille);
}

openCAFPage(): void {
  this.navCtrl.push(DocsPortefeuille);
}

openLogementPage(): void {
  this.navCtrl.push(DocsPortefeuille);
}

presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Fin de la garantie TV',
    subTitle: '<p>La garantie de 2 ans couvrant les dommages de la TV SONY HDJ87 arrive bientôt à échance. <p>Pensez à la renouveller si necessaire ',
    buttons: ['OK']
  });
  alert.present();
}
}
