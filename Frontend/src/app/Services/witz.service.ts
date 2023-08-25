import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WitzService {

  constructor(private http : HttpClient) { }
  url = 'http://127.0.0.1:3000/witz/';
  create(witz: any){
    return this.http.post( this.url + 'add' , witz);
  }
  getRandom(){
    return this.http.get( this.url + 'getRandom/');
  }
}
