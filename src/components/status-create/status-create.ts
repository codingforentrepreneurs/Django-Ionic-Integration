import { Component, EventEmitter, Output } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController, NavController} from 'ionic-angular'
import { BackendApiProvider } from '../../providers/backend-api/backend-api';



@Component({
  selector: 'status-create',
  templateUrl: 'status-create.html'
})
export class StatusCreateComponent {
    private statusCreateFormGroup: FormGroup;
    @Output() statusDidCreate = new EventEmitter<any>()
    loadingBar: any;
    myImage: any

  constructor(private formBuilder: FormBuilder, 
      public loadingCtrl: LoadingController,
      public navCtrl: NavController,
      private backend: BackendApiProvider,

      ) {
    console.log('Hello AuthComponent Component');
    this.statusCreateFormGroup = this.formBuilder.group({
        content: ['', Validators.required],
        image: ['', Validators.required]
    })
    this.createLoadingBar()
  }
  createLoadingBar(){
    this.loadingBar = this.loadingCtrl.create({content: "Please wait..."})
  }

  handleImageInputChange(files:FileList){
    let imageItem = files.item(0)
    if (imageItem){
      this.myImage=imageItem
      console.log(this.myImage)
    }
  }

  handleSubmit(event) {
      event.preventDefault()
      // this.loadingBar.present()
      const endpoint = '/api/status/'
      const newData = this.statusCreateFormGroup.value
      this.statusDidCreate.emit(newData)
      this.backend.post(endpoint, newData, true).subscribe(data=>{
          console.log("success", data)
          //this.loadingBar.dismiss()
          // this.createLoadingBar()
          this.statusCreateFormGroup.reset()
      }, error=>{
          console.log("error", error)
          //this.loadingBar.dismiss()
          // this.createLoadingBar()
          alert(error['error']['detail'])
      })
     
  
  }

}
