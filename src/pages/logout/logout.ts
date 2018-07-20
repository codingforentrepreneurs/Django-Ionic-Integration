import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home'
import { LoginPage } from '../login/login'




/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(private storage: Storage,
      public navCtrl: NavController, 
      public navParams: NavParams) {
  }

  handleLogout() {
    this.storage.get("authToken").then((val)=>{
        if (val){
            this.storage.remove("authToken")
        }
        this.navCtrl.setRoot(LoginPage)
    })

  }

}
