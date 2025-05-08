import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventCardComponent } from './components/event-card/event-card.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'events/:title', component: EventCardComponent}
];
