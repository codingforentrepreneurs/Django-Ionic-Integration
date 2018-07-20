import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// observables - async

const ROOT_ENDPOINT = 'http://127.0.0.1:8000/api/'
@Injectable()
export class BackendApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BackendApiProvider Provider');
  }

  login(userData:{}){
      console.log("working...")
      const endpoint = `${ROOT_ENDPOINT}auth/`
      return this.http.post(endpoint, userData, {})
  }
  
}
