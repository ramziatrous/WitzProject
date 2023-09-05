import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  url = 'https://backends.atrous.de/users/';

  getall(){
    return this.http.get( this.url + 'getall');
  }
}
