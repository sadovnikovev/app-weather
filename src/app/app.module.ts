import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarWeatherComponent } from './navbar-weather/navbar-weather.component';
import { WeatherWindowComponent } from './weather-window/weather-window.component';
import { CityComponent } from './city/city.component';
import { SecondComponent } from './second/second.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstComponent } from './first/first.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarWeatherComponent,
    WeatherWindowComponent,
    CityComponent,
    SecondComponent,
    FirstComponent,
    NavigationComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
