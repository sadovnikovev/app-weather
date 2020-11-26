import { Injectable, Component, OnInit, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface City {
  title: string;
  woeid: number;
}
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

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private cities: City[]=[ 
    {
      title: "Mosсow",
      woeid: 2122265,
    },
    {
      title: "St.Peterburg",
      woeid: 2123260,
    },
    {
      title: "Tokyo",
      woeid: 1118370,
    },
    {
      title: "San Francisco",
      woeid: 2487956,
    },   
  ];
  active: City;
  constructor(private http: HttpClient) { }
  @Output() select = new EventEmitter<WeatherResponse>();

  getCities(): City[]{
    return this.cities;
  }

  getWeatherById(id: number){
    return this.http.get(`api/location/${id}/`)  
  } 
}
