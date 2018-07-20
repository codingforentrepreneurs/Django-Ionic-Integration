import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // might chnage
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module'
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login'
import { LogoutPage } from '../pages/logout/logout'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackendApiProvider } from '../providers/backend-api/backend-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    ListPage,
    LoginPage,
    LogoutPage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    ListPage,
    LoginPage,
    LogoutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    BackendApiProvider
  ]
})
export class AppModule {}
