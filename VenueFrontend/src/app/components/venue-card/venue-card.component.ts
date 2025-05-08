import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Venue } from '../../models/venues';
import { Event } from '../../models/venues';
import { EventCardComponent } from '../event-card/event-card.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-venue-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './venue-card.component.html',
  styleUrls: ['./venue-card.component.css']
})
export class VenueCardComponent  {
  @Input() venue!: Venue;

  showEvents: boolean = false;
  selectedEvent: Event | null = null;
  constructor(private router: Router) { }

  toggleEvents() {
    this.showEvents = !this.showEvents;
    this.selectedEvent = null;
  }
  bookEvent(name: string): void {
    this.router.navigate(['/booking', name]);
  }
}
