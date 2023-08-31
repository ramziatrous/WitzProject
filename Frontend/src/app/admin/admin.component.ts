import { Component, OnInit } from '@angular/core';
import { WitzService } from 'src/app/Services/witz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

  export class AdminComponent implements OnInit {
    witz: any;
  avg: any;
    constructor(private _witz: WitzService) { }


    ngOnInit(): void {

      this._witz.getall().subscribe({
        next: (res) => {
          this.witz = res;
          for (let i = 0; i < this.witz.length; i++) {
            const joke = this.witz[i];
            const avg = joke.rating / joke.count;
            joke.rating = avg.toFixed(1); // Update the individual joke's rating
          }

        },
        error: (err) => {
          console.log(err);
        }
      });
    }
    delete(id: any){


      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          this._witz.delete(id).subscribe({
            next: (res)=>{

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

              this.ngOnInit();

            },
            error: (err)=>{
              console.log(err);
            }
          })

        }
      })


    }


  }
