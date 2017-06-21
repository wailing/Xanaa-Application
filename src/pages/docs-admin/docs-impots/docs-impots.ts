import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {App} from "ionic-angular";
import { LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth';
import { AuthPage } from '../../auth/home/home';
@Component({
  templateUrl: 'docs-impots.html',
  selector: 'docs-impots',
})
export class DocumentsImpots {
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
}
