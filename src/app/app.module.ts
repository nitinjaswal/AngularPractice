import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  AuthService
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './_modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error/404.component';
import { EventslistresolverService } from './_resolvers/events-list-resolver.service';
//import { AuthService } from './_services';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,

  ],
  providers: 
  [
    EventService,
    EventslistresolverService,
    AuthService
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
