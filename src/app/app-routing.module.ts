import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';


const routes: Routes = [
  //Here we are defining routes to match the URL
  //if url is /events then call EventsListComponent
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }//If path is empty redirect to /events url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
