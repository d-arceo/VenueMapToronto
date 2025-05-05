import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueCardComponent } from '../venue-card/venue-card.component';
import { VenueService } from '../../services/venue.service';
import { Venue } from '../../models/venues';
@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, VenueCardComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  venues: Venue[] = [];

  constructor(private venueService: VenueService) {}

  ngOnInit(): void {
    this.venueService.getVenues().subscribe((data) => {
      console.log('Fetched venues:', data);
      this.venues = data;
    });
}
}

