import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css']
})
export class CurrentweatherComponent implements OnInit {
  @Input('current') current:any;
  @Input('loc') loc:any;
  @Input('icon') icon;
  @Input('sunset') sunset;

  date=new Date();
  tdate=this.date.toString().slice(0,10);

  constructor() { }

  ngOnInit() {
  }

}
