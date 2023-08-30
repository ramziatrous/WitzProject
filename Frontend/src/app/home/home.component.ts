import { Component, OnInit } from '@angular/core';
import { WitzService } from 'src/app/Services/witz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  witz: any;
  witztxt: any;
  value:any;
  nr:any;
  avg: any;
  newrating={
    "rating":''
            };


  constructor(private _witz: WitzService) { }

  ngOnInit(): void {


    this._witz.getRandom().subscribe({
      next: (res) => {
        this.witz = res;
        this.witztxt = this.witz.jokeText;
        this.avg=parseInt(this.witz.rating)/parseInt(this.witz.count);
        this.value = this.avg;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

    ok(){
      if(this.value!=this.avg){
      this.nr = parseInt(this.value)+parseInt(this.witz.rating);
      this.newrating.rating=this.nr;
    this._witz.update( this.witz._id ,this.newrating ).subscribe({
      next: (res) => {


      },
      error: (err) => {
        console.log(err);

      }
    });}


      this._witz.getRandom().subscribe({
        next: (res) => {
          this.witz = res;
          this.witztxt = this.witz.jokeText;
          this.avg=parseInt(this.witz.rating)/parseInt(this.witz.count);
          this.value = this.avg;


        },
        error: (err) => {
          console.log(err);
        }

      });




    }


}
