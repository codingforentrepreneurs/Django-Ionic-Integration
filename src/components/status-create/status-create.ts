import { Component, EventEmitter, Output } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {HttpEventType} from '@angular/common/http'

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
    progressValue = 0
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

  handleProgress(uploadEvent){
    
    if (uploadEvent.type === HttpEventType.UploadProgress){
      this.progressValue = (Math.round(100 * uploadEvent.loaded / uploadEvent.total))
    } 
    if (uploadEvent.type === HttpEventType.DownloadProgress){
      console.log(Math.round(100 * uploadEvent.loaded / uploadEvent.total))
    } 

    if (uploadEvent.type === HttpEventType.Response){
      const newData = uploadEvent.body
      this.progressValue = 0
      this.statusCreateFormGroup.reset() 
      this.statusDidCreate.emit(newData)
    }

   // 
  }

  handleSubmit(event) {
      event.preventDefault()
      // this.loadingBar.present()
      const endpoint = '/api/status/'
      const newData = this.statusCreateFormGroup.value
      // this.statusDidCreate.emit(newData)
      this.backend.postWithImage(endpoint, newData, this.myImage).subscribe(event=>{
          // console.log("success", event) // report progress

          this.handleProgress(event)
          //this.loadingBar.dismiss()
          // this.createLoadingBar()
          
      }, error=>{
          console.log("error", error)
          //this.loadingBar.dismiss()
          // this.createLoadingBar()
          alert(error['error']['detail'])
      })
     
  
  }

}
