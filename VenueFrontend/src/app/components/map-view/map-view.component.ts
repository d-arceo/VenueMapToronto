import { Component, AfterViewInit } from '@angular/core';
import { environment } from '../../../enviroments/enviroments';
import { Venue } from '../../models/venues';
import { VenueService } from '../../services/venue.service';
import * as mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
@Component({
  selector: 'app-map-view',
  imports: [],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {

  map!: mapboxgl.Map;

  ngAfterViewInit(): void {

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/kevinch65/cma1sg24e00b701s54z9b8jl3',
      center: [-79.3832, 43.6532], 
      zoom: 12,
      accessToken: environment.mapboxToken
    });
  }
}
