import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreatesessionComponent,
  SessionListComponent,
  EventService,
  AuthService,
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './_modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error/404.component';
import { EventslistresolverService } from './_resolvers/events-list-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';
import { DurationPipe } from './_pipe/duration.pipe';
import { JQ_TOKEN } from './_services/jQuery.service';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './_directives/modal-trigger.directive';

let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreatesessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    AuthService,
    { provide: JQ_TOKEN, useValue: jQuery }
  ],

  bootstrap: [EventsAppComponent],
})
export class AppModule {}
