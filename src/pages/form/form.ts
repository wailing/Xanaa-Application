import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth';
import { DataProvider } from '../../providers/data';
import firebase from 'firebase';

import {AngularFire, FirebaseListObservable} from 'angularFire2';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  public rootPage: any = HomePage;
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




  updateData(): void{
    var path: string = 'users/'+this.auth.user.$key;
    this.dp.update(path, this.user);
    this.navCtrl.setRoot(HomePage);
  }
}
