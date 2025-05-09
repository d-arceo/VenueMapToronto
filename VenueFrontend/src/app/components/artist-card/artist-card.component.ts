import { Component, Inject } from '@angular/core';
import { Artist } from '../../models/artists';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-card',
  imports: [CommonModule],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.css'
})
export class ArtistCardComponent {
  artist: Artist;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { artist: Artist }) {
    this.artist = data.artist;
  }
}
