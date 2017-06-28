import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ThemeableBrowser } from 'ionic-native';
// Pages
import { ForgotPasswordPage } from '../pages/auth/forgot-password/forgot-password';
import { AuthPage } from '../pages/auth/home/home';
import { LoginEmailPage } from '../pages/auth/login-email/login-email';
import { SignUpPage } from '../pages/auth/sign-up/sign-up';
import { HomePage } from '../pages/home/home';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { FormPage } from '../pages/form/form';
import { DocsAdminPage } from '../pages/docs-admin/menu/menu';
import { ProfilPage } from '../pages/profil/profil';
import { DocumentsImpots } from '../pages/docs-admin/docs-impots/docs-impots';
import { DocsPage } from '../pages/docs/docs';

import { AngularFireModule } from 'angularfire2';

// Providers
import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDcA1dLsAM48clizb5NMGllHdcc-Zzbqw8',
  authDomain: 'xanatest-7734d.firebaseapp.com',
  databaseURL: 'https://xanatest-7734d.firebaseio.com/',
  storageBucket: 'gs://xanatest-7734d.appspot.com',
};

@NgModule({
  declarations: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,
    LoginEmailPage,
    SignUpPage,
    HomePage,
    FormPage,
    DocsAdminPage,
    ProfilPage,
    TermsOfServicePage,
    DocumentsImpots,
    DocsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,
    LoginEmailPage,
    SignUpPage,
    HomePage,
    FormPage,
    DocsAdminPage,
    ProfilPage,
    TermsOfServicePage,
    DocumentsImpots,
    DocsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataProvider, AuthProvider]
})
export class AppModule {
}
