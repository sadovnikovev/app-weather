import { Injectable} from '@angular/core';

export interface City {
  title: string;
  woeid: number;
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
      
    getCities(): City[]{
          
        return this.cities;
    }
  constructor() { }
}
