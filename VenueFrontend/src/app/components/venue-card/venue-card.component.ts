import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Venue } from '../../models/venues';
import { VenueService } from '../../services/venue.service';

@Component({
  selector: 'app-venue-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './venue-card.component.html',
  styleUrls: ['./venue-card.component.css']
})
export class VenueCardComponent  {
  @Input() venue!: Venue;

  showEvents: boolean = false;

  toggleEvents() {
    this.showEvents = !this.showEvents;
  }
}
