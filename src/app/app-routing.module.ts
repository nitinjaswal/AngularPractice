import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventslistresolverService,
  CreateEventDeActivatorGuard,
  CreatesessionComponent,
  EventResolver
} from './events/index'

import { Error404Component } from './error/404.component';

const routes: Routes = [
  //Here we are defining routes to match the URL
  //if url is /events then call EventsListComponent
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [CreateEventDeActivatorGuard] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventslistresolverService } },
  { path: 'events/:id', component: EventDetailsComponent ,resolve:{event:EventResolver}},
  { path: 'events/session/new', component: CreatesessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./_modules/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
