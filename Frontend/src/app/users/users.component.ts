import { Component,OnInit} from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {
  users: any;

  constructor(private _user: UserService) { }


    ngOnInit(): void {

      this._user.getall().subscribe({
        next: (res) => {
          this.users = res;


        },
        error: (err) => {
          console.log(err);
        }
      });
    }


}
