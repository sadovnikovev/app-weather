import { Component, OnInit, Input } from '@angular/core';
import {City} from '../weather.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() city:City;

  constructor() { }

  ngOnInit(): void {
  }

}
