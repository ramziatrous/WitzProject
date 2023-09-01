import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient ,private router:Router) { }
userData:any;
  private url = 'http://backend.atrous.de:3000/users/';


  register(user:any){
    return this.http.post(this.url + 'register', user);
  }

  login(user:any){
    return this.http.post(this.url + 'login', user);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    window.location.reload();

  }

  isLoggedIn(){

    let token = localStorage.getItem('token');

    if(token){
      return true;
    }else{
      return false;
    }

  }

  isAdmin(){
    if(this.isLoggedIn()){
        this.userData =this.getDataFromToken();
       if(this.userData.isAdmin ==true){
           return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
  }

  getDataFromToken(){

    let token = localStorage.getItem('token');

    if(token){
      let cryptedData = token.split('.')[1];
      let decryptedData = window.atob(cryptedData);
      let objectData = JSON.parse( decryptedData );
      return objectData



    }
  }
}
