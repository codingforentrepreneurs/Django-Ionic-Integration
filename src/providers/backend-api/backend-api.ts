import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// observables - async

const ROOT_ENDPOINT = 'http://127.0.0.1:8000/api/'
@Injectable()
export class BackendApiProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello BackendApiProvider Provider');
  }

  getHttpOptions(includeAuth:boolean=true){
      let myDefaultHeaders = {
          'Content-Type': 'application/json'
      }
      this.storage.get('authToken').then((val)=>{
          if (val && includeAuth){
              myDefaultHeaders['Authorization'] = `JWT ${val}`
          }
      })
      const httpOptions = {
          headers: new HttpHeaders(myDefaultHeaders)
      }

      return httpOptions
  }

  login(userData:{}){
      console.log("working...")
      const endpoint = `${ROOT_ENDPOINT}auth/`
      const options = this.getHttpOptions()
      return this.http.post(endpoint, userData, options)
  }
  
}
