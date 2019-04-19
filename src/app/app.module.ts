import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataService} from './data.service';
import {FormsModule} from '@angular/forms';
import { NextdayweatherComponent } from './nextdayweather/nextdayweather.component';
import { CurrentweatherComponent } from './currentweather/currentweather.component';
@NgModule({
  declarations: [
    AppComponent,
    NextdayweatherComponent,
    CurrentweatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
