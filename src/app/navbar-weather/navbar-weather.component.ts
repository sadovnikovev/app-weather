import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {City, WeatherService} from '../weather.service';
import {HttpClient} from '@angular/common/http';


export interface WeatherResponse {
  consolidated_weather: ConsolidatedWeather[];
  latt_long: string;
  location_type: string;
  parent: any;
  sources: any[];
  sun_rise: string;
  sun_set: string;
  time: Date;
  timezone: string;
  timezone_name: string;
  title: string;
  woeid: number;
}
export interface ConsolidatedWeather {
  id: number;
  applicable_date: Date;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_speed: number;
  wind_direction: number;
  wind_direction_compass: string;
  max_temp: string;
  min_temp: string;
  the_temp: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

@Component({
  selector: 'app-navbar-weather',
  templateUrl: './navbar-weather.component.html',
  styleUrls: ['./navbar-weather.component.css'],
  providers: [WeatherService]
})

export class NavbarWeatherComponent implements OnInit {
  cities: City[];
  active: City;
  responseWeather: WeatherResponse;
  constructor(private weatherService:WeatherService, private http: HttpClient) {
   }

  @Output() select = new EventEmitter<WeatherResponse>();
  
  getWeather(city:City): void{
    this.active = city;
    
    this.http.get(`api/location/${city.woeid}/`)
    .subscribe((response: WeatherResponse) => {
      this.responseWeather = response;
      this.select.emit(response);
    });
  }

  ngOnInit(): void {
    this.cities=this.weatherService.getCities();
    this.getWeather(this.cities[0]);
  }
}
