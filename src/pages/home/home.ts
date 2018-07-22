import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newStatusItem: any
  constructor(public navCtrl: NavController, private storage: Storage) {
      storage.get('authToken').then((val) => {
        console.log('Your auth token value is', val);
        if (!val) {
          navCtrl.setRoot(LoginPage)
        }
      });

  }
  handleStatusDidCreate(newItem){
    this.newStatusItem = newItem
  }

}
