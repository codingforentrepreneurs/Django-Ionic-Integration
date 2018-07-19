import { Component, Input } from '@angular/core';

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
  @Input() myObject: any;
  // text: string;

  constructor() {
    console.log('Hello StatusDetailComponent Component');
    // this.text = 'Status Detail Item';
  }

}
