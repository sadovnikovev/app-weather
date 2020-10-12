import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarWeatherComponent } from './navbar-weather/navbar-weather.component';
import { WeatherWindowComponent } from './weather-window/weather-window.component';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarWeatherComponent,
    WeatherWindowComponent,
    CityComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
