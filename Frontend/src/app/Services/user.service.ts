import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  url = 'http://127.0.0.1:3000/users/';

  getall(){
    return this.http.get( this.url + 'getall');
  }
}
