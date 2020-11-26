import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from '../navbar-weather/navbar-weather.component';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor() { }
  response: WeatherResponse;
  visible: boolean = false;

  set(response: WeatherResponse){
    this.response = response;
    this.visible = true;
  }
}
