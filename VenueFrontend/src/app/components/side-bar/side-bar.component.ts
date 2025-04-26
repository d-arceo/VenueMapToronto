import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueCardComponent } from '../venue-card/venue-card.component';
@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, VenueCardComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
}
