import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venue-card',
  imports: [CommonModule],
  templateUrl: './venue-card.component.html',
  styleUrl: './venue-card.component.css'
})
export class VenueCardComponent {
  events = [
    {
      name: 'Insert Show 1',
      imageUrl: 'https://placekitten.com/400/200',
      closeTime: '9:00PM',
      venue: 'Hardluck Bar',
      distance: 2.3
    },
    {
      name: 'Insert Show 2',
      imageUrl: 'https://placekitten.com/401/200',
      closeTime: '11:00PM',
      venue: 'Monarch Tavern',
      distance: 4.5
    }
  ];
}
