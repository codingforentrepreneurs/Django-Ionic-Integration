import { HttpClient, HttpHeaders, HtttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// observables - async

const ROOT_ENDPOINT = 'http://127.0.0.1:8000'
@Injectable()
export class BackendApiProvider {
    myToken: string;
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello BackendApiProvider Provider');
    this.storage.get('authToken').then((val)=>{
        this.myToken = val
    })
  }

  getHttpOptions(includeAuth:boolean=true){
      let myDefaultHeaders = {
          'Content-Type': 'application/json'
      }
      if (this.myToken && includeAuth){
          myDefaultHeaders['Authorization'] = `JWT ${this.myToken}`
      }
      const httpOptions = {
          headers: new HttpHeaders(myDefaultHeaders)
      }

      return httpOptions
  }

  login(userData:{}){
      return this.post("/api/auth/", userData, false)
  }

  get(path, includeAuth:boolean=false){
      const endpoint = `${ROOT_ENDPOINT}${path}`
      const options = this.getHttpOptions(includeAuth)
      return this.http.get(endpoint, options)
  }

  postWithImage(path, data:{}, imageFile?:File){
     const endpoint = `${ROOT_ENDPOINT}${path}`
     const options = {
         'reportProgress': true,
         'headers': new HttpHeaders({'Authorization': `JWT ${this.myToken}`})
     }
     const myFormData = new FormData()
     if (data){
       for (var key in data){
         myFormData.append(key, data[key])
       }
     }
     if (imageFile){
       myFormData.append('image', imageFile, imageFile.name)
     }
     const req = new HtttpRequest("post", endpoint, myFormData, options)
     return this.http.request(req)
  }


  post(path, data:{}, includeAuth:boolean=true){
      const endpoint = `${ROOT_ENDPOINT}${path}`
      const options = this.getHttpOptions(includeAuth)
      return this.http.post(endpoint, data, options)
  }

   put(path, data:{}, includeAuth:boolean=true){
        const endpoint = `${ROOT_ENDPOINT}${path}`
      const options = this.getHttpOptions(includeAuth)
      return this.http.put(endpoint, data, options)
  }
  
}
