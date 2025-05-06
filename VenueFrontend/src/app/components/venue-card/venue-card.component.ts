import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Venue } from '../../models/venues';
import { Event } from '../../models/venues';
import { EventCardComponent } from '../event-card/event-card.component';
import { VenueService } from '../../services/venue.service';

@Component({
  selector: 'app-venue-card',
  standalone: true,
  imports: [CommonModule, EventCardComponent],
  templateUrl: './venue-card.component.html',
  styleUrls: ['./venue-card.component.css']
})
export class VenueCardComponent  {
  @Input() venue!: Venue;

  showEvents: boolean = false;
  selectedEvent: Event | null = null;

  toggleEvents() {
    this.showEvents = !this.showEvents;
  }
  showEventDetails(event: Event) {
    this.selectedEvent = event;
  }

  closeEventDetails() {
    this.selectedEvent = null;
  }
}
