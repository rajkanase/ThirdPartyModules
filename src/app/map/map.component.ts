import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  title: string = 'Adding Google Map';
  lat: number = 18.4974251;
  lng: number = 73.8581096;
  lat1:19.1853805;
  lng2:74.0947152;

  ngOnInit() {
  }

}
