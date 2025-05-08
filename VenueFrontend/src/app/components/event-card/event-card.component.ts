import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../models/venues';
import { ActivatedRoute } from '@angular/router';
import { VenueService } from '../../services/venue.service';
@Component({
  selector: 'app-event-card',
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent implements OnInit {
  
  @Input() event: Event | null = null;
  @Input() fallbackImageUrl: string = '';
  @Input() close?: () => void;

  eventTitleFromRoute: string = '';

  constructor(
    private route: ActivatedRoute,
    private VenueService: VenueService
  ) {}

  ngOnInit(): void {
    if (!this.event) {
      this.eventTitleFromRoute = this.route.snapshot.paramMap.get('title') || '';
      // 🔁 TODO: Use a service to fetch event by title here if needed
      console.log('Route param title:', this.eventTitleFromRoute);
    }
  }

  closeModal() {
    if (this.close) {
      this.close();
    }
  }
}