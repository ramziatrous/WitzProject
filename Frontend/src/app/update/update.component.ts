import { Component,OnInit} from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { WitzService } from '../Services/witz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit  {
  id: any;

  witz:any;
  newtext={"jokeText":''}

  constructor(
    private _act: ActivatedRoute,
    private _witz: WitzService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this._act.snapshot.paramMap.get('id');

    this._witz.getById(this.id).subscribe({
      next: (res) => {
        this.witz = res;
console.log(this.witz.jokeText);
      },
      error: (err) => {

      }
    });
  }



  save(): void {

    this.newtext.jokeText=this.witz.jokeText;
    this._witz.updatewitz(this.id, this.newtext).subscribe(
       res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been Updated',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin']);
        console.log(this.newtext);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
