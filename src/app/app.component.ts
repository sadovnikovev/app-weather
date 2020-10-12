import { Component } from '@angular/core';
import { WeatherResponse } from './navbar-weather/navbar-weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-application';
  response: WeatherResponse;
  visible: boolean = false;

  set(response: WeatherResponse){
    this.response = response;
    this.visible = true;
  }
}
