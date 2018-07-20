import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    console.log('Hello AuthComponent Component');
    this.userFormGroup = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]

    })
  }

  handleSubmit(event) {
      event.preventDefault()
      console.log(this.userFormGroup.value) // to the http server
      setTimeout(()=>{
          this.userFormGroup.reset()
      }, 2000)
  
  }


}
