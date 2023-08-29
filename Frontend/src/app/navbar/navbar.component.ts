import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  token:any;
  constructor( public _auth: AuthService , private router: Router) { }

  ngOnInit(): void {
  localStorage.setItem( 'token', this.token );
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

}
