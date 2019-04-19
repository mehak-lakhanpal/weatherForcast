import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
  url:string ;
  key:string='855e21343304453bafd41159191904';
  constructor(private http:HttpClient) { }

  getWeather(city:string){
    return this.http.get(`http://api.apixu.com/v1/forecast.json?key=${this.key}&q=${city}&days=7`)
  }
}
