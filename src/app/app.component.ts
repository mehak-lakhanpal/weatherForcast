import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherforcast';
  city : string;
  result: any;
  forecastday:any;
  conditional:boolean=false ;
  
  constructor(private data : DataService ){
    this.conditional=false;
  }
  getData(){
    this.data.getWeather(this.city).subscribe((d)=>{
    this.result=d;
    this.forecastday=this.result.forecast.forecastday;
    this.conditional=true;
    }),
    (error)=>console.log(error);
  }
}
