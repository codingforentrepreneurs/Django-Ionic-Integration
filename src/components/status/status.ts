import { Component, Input, SimpleChanges} from '@angular/core';
import { NavController } from 'ionic-angular'

import { BackendApiProvider } from '../../providers/backend-api/backend-api';



import { DetailPage } from '../../pages/detail/detail'

@Component({
  selector: 'status',
  templateUrl: 'status.html'
})
export class StatusComponent {
  count: number = 0
  @Input() newObject: any;
  results: any[];

  constructor(public navCtrl: NavController,
    private backend: BackendApiProvider,
    ) {
    console.log('Hello StatusComponent Component');
    this.grabStatusItems()
  }

  ngOnChanges(changes:SimpleChanges){
    if (changes.newObject.currentValue){
        this.results.unshift(this.newObject) // .push()
        this.newObject = null
    }
  }

  grabStatusItems(){
    const path = '/api/status/?ordering=-timestamp'
    this.backend.get(path, true).subscribe(data=>{
      this.count = data['count'] as number // data.count
      this.results = data['results'] as any[]
    }, error=>{
      console.log(error)
    })
  }

  handleClick(event, statusItem){
      this.navCtrl.push(DetailPage, {statusItem: statusItem})
  }

}
