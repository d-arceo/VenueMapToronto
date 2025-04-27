import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Venue } from '../../models/venues';
import { VenueService } from '../../services/venue.service';

@Component({
  selector: 'app-venue-card',
  imports: [CommonModule],
  templateUrl: './venue-card.component.html',
  styleUrl: './venue-card.component.css'
})
export class VenueCardComponent implements OnInit {
  events: Venue[] = [];

  constructor(private venueService: VenueService) {}

  ngOnInit(): void {
    this.venueService.getVenues().subscribe((venues) => {
      this.events = venues;
    });
  }
}
