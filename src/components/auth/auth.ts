import { Component } from '@angular/core';

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

  user = {}

  constructor() {
    console.log('Hello AuthComponent Component');
    this.user = {
        username: "",
        password: ""
    }
  }

  handleLoginClick(event) {
      event.preventDefault()
      console.log(this.user)
  }


}
