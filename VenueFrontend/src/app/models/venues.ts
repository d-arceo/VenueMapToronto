export interface Event {
    E_id: number;
    name: string;
    genre: string;
    lineUp: string[];
    Date: string;
    Description: string;
    Eimage:string
  }
  
  export interface Venue {
    V_id: number;
    venue: string;
    imageUrl: string;
    address: string;
    distance: number;
    events: Event[];
  }