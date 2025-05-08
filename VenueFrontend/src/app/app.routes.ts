import { Routes } from '@angular/router';
import { EventCardComponent } from './components/event-card/event-card.component';

export const routes: Routes = [
    {path: 'events/:title', component: EventCardComponent}
];
