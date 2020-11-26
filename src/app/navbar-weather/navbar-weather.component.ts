import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {City, WeatherResponse, WeatherService} from '../weather.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-navbar-weather',
  templateUrl: './navbar-weather.component.html',
  styleUrls: ['./navbar-weather.component.css'],
})

export class NavbarWeatherComponent implements OnInit {
  cities: City[];
  active: City;
  responseWeather: WeatherResponse;
  constructor(private weatherService:WeatherService, private http: HttpClient) {
   }

  @Output() select = new EventEmitter<WeatherResponse>();
  
  ngOnInit(): void {
    this.cities=this.weatherService.getCities();
    this.getWeather(this.cities[0]);
  }  
  
  getWeather(city:City): void{
    this.active = city;
    this.weatherService.getWeatherById(city.woeid).subscribe((response: WeatherResponse) => {
      this.responseWeather = response;
      console.log(response);
      this.select.emit(response);
    });
  }
}
