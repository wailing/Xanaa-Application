import { Component, ViewChild} from '@angular/core';
import { Platform, Nav, LoadingController } from 'ionic-angular';
import { StatusBar, Splashscreen  } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/home/home';

import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';
import { ProfilPage } from '../pages/profil/profil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  isAppInitialized: boolean = false;
  user: any;
  rootPage: any = AuthPage;

  constructor(
    private platform: Platform,
    protected data: DataProvider,
    protected auth: AuthProvider,
    private loadingCtrl: LoadingController ,
    ) {
    this.user = {
      image: ''
    };
    platform.ready().then(() => {
  // Okay, so the platform is ready and our plugins are available.
  // Here you can do any higher level native things you might need.
  StatusBar.styleDefault();
  Splashscreen.hide();
});
  }

  go_to_home(Page){
  this.nav.setRoot(HomePage);
}

go_to_profil(){
  this.nav.push(ProfilPage);
}

go_to_logout(){
let loading = this.loadingCtrl.create({
  content: 'Patientez...'
});
loading.present();
loading.dismiss();
this.auth.logout();
this.nav.setRoot(AuthPage);
}


  ngOnInit() {
    this.platform.ready().then(() => {
      this.auth.getUserData().subscribe(data => {
        if (!this.isAppInitialized) {
          this.nav.setRoot(HomePage);
          this.isAppInitialized = true;
        }
        this.user = data;
        this.data.list('pets').subscribe(data => {
          console.log(data);
        });
      }, err => {
        this.nav.setRoot(AuthPage);
      });
      StatusBar.styleDefault();
    });
  }
}
