import { Component, Input, EventEmitter, Output } from '@angular/core';

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
  @Output() statusDidChange = new EventEmitter<StatusModel>()
  // text: string;

  constructor() {
    console.log('Hello StatusDetailComponent Component');
    // this.text = 'Status Detail Item';
  }

  handleClick(event){
      // alert("Hello there")
      if (this.myObject){
          this.statusDidChange.emit(this.myObject)
      }
      
  }

}
