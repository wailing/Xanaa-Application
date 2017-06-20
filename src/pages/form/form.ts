import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  public rootPage: any = HomePage;
  constructor(public navCtrl: NavController) {

  }

}
