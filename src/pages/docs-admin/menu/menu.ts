import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {App} from "ionic-angular";
import { DocumentsImpots } from '../docs-impots/docs-impots';
import { LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth';
import { AuthPage } from '../../auth/home/home';

@Component({
  templateUrl: 'menu.html',
  selector: 'page-menu',
})
export class DocsAdminPage {
constructor(protected app: App, private navCtrl: NavController, private auth: AuthProvider, private loadingCtrl: LoadingController) {
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

openImpotsPage(): void {
  this.navCtrl.push(DocumentsImpots);
}

openCAFPage(): void {
  this.navCtrl.push(DocumentsImpots);
}

openLogementPage(): void {
  this.navCtrl.push(DocumentsImpots);
}
}
