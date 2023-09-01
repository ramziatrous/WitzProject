import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WitzService {

  constructor(private http : HttpClient) { }
  url = 'http://backend.atrous.de:3000/jokes/';
  create(witz: any){
    return this.http.post( this.url +'create' , witz);
  }
  update(id: any,rating: any){
    return this.http.put( this.url + 'update/'+ id , rating);
  }
  getRandom(){
    return this.http.get( this.url + 'random');
  }
  getall(){
    return this.http.get( this.url + 'getall');
  }
  getById( id: any ){
    return this.http.get( this.url + 'getbyid/' + id );
  }
  updatewitz(id: any,newtxt: any){
    return this.http.put( this.url + 'updatetext/'+ id , newtxt);
}
  delete( id: any ){
    return this.http.delete( this.url + 'delete/' + id );
}
}
