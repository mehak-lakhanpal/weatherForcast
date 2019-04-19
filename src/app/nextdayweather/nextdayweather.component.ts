import { Component, OnInit,Input } from '@angular/core';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-nextdayweather',
  templateUrl: './nextdayweather.component.html',
  styleUrls: ['./nextdayweather.component.css']
})
export class NextdayweatherComponent implements OnInit {
  @Input('forecast') forecast:any;
  @Input('day') day:any;
  constructor() { 
  }

  ngOnInit() {
  }

}
