import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController, NavController} from 'ionic-angular'
import { Storage } from '@ionic/storage';
import { HomePage } from '../../pages/home/home'

import { BackendApiProvider } from '../../providers/backend-api/backend-api';


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
      private storage: Storage,
      private backend: BackendApiProvider,

      ) {
    console.log('Hello AuthComponent Component');
    this.userFormGroup = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]

    })
    this.createLoadingBar()
  }
  createLoadingBar(){
    this.loadingBar = this.loadingCtrl.create({content: "Please wait..."})
  }
  handleSubmit(event) {
      event.preventDefault()
      this.loadingBar.present()
      // console.log(this.userFormGroup.value) // to the http server
      this.backend.login(this.userFormGroup.value).subscribe(data=>{
          console.log("success", data)
          this.loadingBar.dismiss()
          this.userFormGroup.reset()
          this.storage.set("authToken", data['token'])
          this.storage.set("user", data['user'])
          this.storage.set('expires', data['user'])
          this.navCtrl.setRoot(HomePage)
      }, error=>{
          console.log("error", error)
          this.loadingBar.dismiss()
          this.createLoadingBar()
          alert(error['error']['detail'])
      })
      

      // setTimeout(()=>{
      //     this.loadingBar.dismiss()
      //     this.userFormGroup.reset()
      //     this.storage.set("authToken", "whatever")
      //     this.navCtrl.setRoot(HomePage)
      // }, 2000)
  
  }


}
