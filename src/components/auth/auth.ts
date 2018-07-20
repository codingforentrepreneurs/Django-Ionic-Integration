import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from 'ionic-angular'
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
      public loadingCtrl: LoadingController) {
    console.log('Hello AuthComponent Component');
    this.userFormGroup = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]

    })
    this.loadingBar = loadingCtrl.create({content: "Please wait..."})
  }

  handleSubmit(event) {
      event.preventDefault()
      this.loadingBar.present()
      console.log(this.userFormGroup.value) // to the http server
      setTimeout(()=>{
          this.loadingBar.dismiss()
          this.userFormGroup.reset()
      }, 2000)
  
  }


}
