import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController, NavController} from 'ionic-angular'
import { Storage } from '@ionic/storage';
import { HomePage } from '../../pages/home/home'
/**
 * Generated class for the AuthComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auth',
  templateUrl: 'auth.html'
})
export class AuthComponent {
    private userFormGroup: FormGroup;
    loadingBar: any;

  constructor(private formBuilder: FormBuilder, 
      public loadingCtrl: LoadingController,
      public navCtrl: NavController,
      private storage: Storage) {
    console.log('Hello AuthComponent Component');
    this.userFormGroup = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]

    })
    this.loadingBar = this.loadingCtrl.create({content: "Please wait..."})
  }

  handleSubmit(event) {
      event.preventDefault()
      this.loadingBar.present()
      console.log(this.userFormGroup.value) // to the http server
      setTimeout(()=>{
          this.loadingBar.dismiss()
          this.userFormGroup.reset()
          this.storage.set("authToken", "whatever")
          this.navCtrl.setRoot(HomePage)
      }, 2000)
  
  }


}
