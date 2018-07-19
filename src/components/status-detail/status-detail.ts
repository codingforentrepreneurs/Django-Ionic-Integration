import { Component, Input } from '@angular/core';

import { StatusModel } from '../status/status.model'
/**
 * Generated class for the StatusDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'status-detail',
  templateUrl: 'status-detail.html'
})
export class StatusDetailComponent {
  @Input() myObject: StatusModel;
  // text: string;

  constructor() {
    console.log('Hello StatusDetailComponent Component');
    // this.text = 'Status Detail Item';
  }

  handleClick(event){
      alert("Hello there")
  }

}
