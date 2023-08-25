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

  constructor(private _witz: WitzService) { }

  ngOnInit(): void {

    this._witz.getRandom().subscribe({
      next: (res) => {
        this.witz = res;
        console.log(this.witz);
        this.witztxt = this.witz.jokeText;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

    ok(){
      this._witz.getRandom().subscribe({
        next: (res) => {
          this.witz = res;
          console.log(this.witz);
          this.witztxt = this.witz.jokeText;
        },
        error: (err) => {
          console.log(err);
        }
      });}
}
