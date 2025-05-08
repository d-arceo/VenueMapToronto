import { Event } from "./events";
  
  export interface Venue {
    V_id: number;
    venue: string;
    imageUrl: string;
    address: string;
    distance: number;
    events: Event[];
  }