import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
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
  nameInput: 'lolo';
  myUser: any;

  constructor(public navCtrl: NavController, private auth: AuthProvider, public dp: DataProvider) {
    this.myUser = this.auth.user;
    console.log(this.myUser);
  }



  updateData(): void{
    var path: string = 'users/'+this.myUser.$key+'/name';
    this.dp.update(path,'chichi');//pour tester avec une valeur en dur
    console.log(path);

  }
}
