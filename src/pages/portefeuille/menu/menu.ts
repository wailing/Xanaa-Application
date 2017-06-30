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
    title: 'Impots sur le revenu 2017',
    subTitle: '<p>Vous n avez toujours pas déclaré vos revenus. <p>Pensez à le faire avant le 08 Juillet ',
    buttons: ['OK']
  });
  alert.present();
}
}
