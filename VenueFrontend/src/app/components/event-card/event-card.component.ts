import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../models/events';
@Component({
  selector: 'app-event-card',
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  
  @Input() event!: Event;
  @Input() fallbackImageUrl: string = '';
  @Input() close: () => void = () => {};
}