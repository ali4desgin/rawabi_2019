import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = "http://178.128.149.244/rawabi/api/";
// let apiUrl = "http://192.168.1.210/data/rawabi/rawabi-laravel/api/";

/* 
  Generated class for the` AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthServiceProvider {
  public data: any;

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      
      this.http.post(apiUrl+type, credentials, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }

  getData( type){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      
      this.http.get(apiUrl+type).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }
}
