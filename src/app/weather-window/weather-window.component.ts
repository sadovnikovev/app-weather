import { Component, OnInit, Input } from '@angular/core';
import { WeatherResponse } from '../navbar-weather/navbar-weather.component';

@Component({
  selector: 'app-weather-window',
  templateUrl: './weather-window.component.html',
  styleUrls: ['./weather-window.component.css']
})
export class WeatherWindowComponent implements OnInit {
  
  constructor() { }

  @Input() response: WeatherResponse;

  ngOnInit(): void {
  }

} 
