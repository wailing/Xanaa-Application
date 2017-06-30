import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { FormPage } from '../form/form';
import { AuthProvider } from '../../providers/auth';
import { DataProvider } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {
  address: any;
  user: any;
  constructor(
    public navCtrl: NavController,
    private auth: AuthProvider,
    private dp: DataProvider
  ) {

    this.user = {
        name: this.auth.user.name,
        firstname: this.auth.user.firstname,
        profession: this.auth.user.profession,
        birthday: this.auth.user.birthday,
        email: this.auth.user.email,
        phone: this.auth.user.phone,
        genre: this.auth.user.genre,
        adress: this.auth.user.adress,
        postCode: this.auth.user.postCode,
        city: this.auth.user.city
    }
  }

  openFormPage(): void {
    this.navCtrl.push(FormPage);
  //  console.log(this.http.get("http://ip.jsontest.com/"));
  }
/*  showAddressModal () {
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;
    });
    modal.present();
  }*/
}
