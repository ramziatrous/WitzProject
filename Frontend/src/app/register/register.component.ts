import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user={
    username:'',
    email:'',
    password:''
  }
  image: any;
  select(e:any){
    this.image = e.target.files[0];
  }
  constructor(private auth : AuthService,private router:Router ) { }
  ngOnInit(): void{
    }
    register(){
      let fd = new FormData()
      fd.append('username', this.user.username);
      fd.append('email', this.user.email);
      fd.append('password', this.user.password);
      fd.append('image', this.image);

      this.auth.register(fd)
        .subscribe(
          res=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your account has been created',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/login']);
         },
         err=>{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Please try again',
            showConfirmButton: false,
            timer: 1500
          })
        }
        );
    }

}
