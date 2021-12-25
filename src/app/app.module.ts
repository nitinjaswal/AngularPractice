import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventService } from './_services/event.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './_modules/shared/shared.module';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './error/404.component';

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
    Error404Component
  ],
  providers:[EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
