import { Component, OnInit } from '@angular/core';
import { WitzService } from 'src/app/Services/witz.service';
interface Joke {
  jokeText: string;
  rating: number;
  idUser: string;
  createdAt: string;
  updatedAt: string;
}
@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {
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
         this.witz.sort((a:Joke, b:Joke) => b.rating - a.rating);
        console.log(this.witz);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
