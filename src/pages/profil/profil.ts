import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FormPage } from '../form/form';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  constructor(public navCtrl: NavController) {

  }

  openFormPage(): void {
    this.navCtrl.push(FormPage);
  }

}
