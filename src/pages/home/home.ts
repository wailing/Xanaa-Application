import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import {App} from "ionic-angular";
import { LoadingController } from 'ionic-angular';
import { AuthPage } from '../auth/home/home';
import { DocsAdminPage } from '../docs-admin/menu/menu';
import { ProfilPage } from '../profil/profil';


@Component({
  templateUrl: 'home.html',
  selector: 'home',
})
export class HomePage {

  constructor(protected app: App, private navCtrl: NavController, private auth: AuthProvider, private loadingCtrl: LoadingController ) {
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
}
