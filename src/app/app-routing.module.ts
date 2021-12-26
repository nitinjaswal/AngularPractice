import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivatorGuard } from './_guards/event-route-activator.guard';
import { CreateEventDeActivatorGuard } from './_guards/create-event-de-activator.guard';
import { EventslistresolverService } from './_resolvers/events-list-resolver.service';

const routes: Routes = [
  //Here we are defining routes to match the URL
  //if url is /events then call EventsListComponent
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [CreateEventDeActivatorGuard] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventslistresolverService } },
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivatorGuard]
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./_modules/user/user.module').then(m=>m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
