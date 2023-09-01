import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  url = 'http://backend.atrous.de:3000/users/';

  getall(){
    return this.http.get( this.url + 'getall');
  }
}
