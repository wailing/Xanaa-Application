import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { LoginEmailPage } from '../login-email/login-email';
import { SignUpPage } from '../sign-up/sign-up';
import { TermsOfServicePage } from '../../terms-of-service/terms-of-service';
import { AuthProvider } from '../../../providers/auth';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../../home/home';

@Component({
  templateUrl: 'home.html',
  selector: 'auth-home',
})

export class AuthPage {
  error: any;

  constructor(
    private navCtrl: NavController,
    private auth: AuthProvider,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false,'menu'); //Desactivation du slidemenu lors de l'authentification
  }
  ngOnInit() {

  }

  openSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }

  openLoginPage() {
    this.navCtrl.push(LoginEmailPage);
  }

  openTermsOfService() {
    this.navCtrl.push(TermsOfServicePage);
  }

  loginUserWithFacebook() {
    this.auth.loginWithFacebook().subscribe(loginData => {
      this.navCtrl.setRoot(HomePage);
    }, err => {
      this.error = err;
    });
  }
}
