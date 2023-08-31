import { Component,OnInit} from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email:'',
    password: '',
  }
  tocken:any;
constructor( private auth : AuthService , private router:Router) { }
ngOnInit(): void{
  }
token :any;
  login() {
    this.auth.login(this.user)
    .subscribe(
      res=>{
        this.token = res;
        localStorage.setItem( 'token', this.token.mytoken );

        this.router.navigate(['/home']);

      },
      err=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Email or password invalid',
          showConfirmButton: false,
          timer: 1500
        })
      }

    );
  }
}
