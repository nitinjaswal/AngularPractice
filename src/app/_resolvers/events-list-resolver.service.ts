import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs';
import { EventService } from '../_services/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventslistresolverService implements Resolve<any> {
  constructor(private eventService: EventService) { }
  resolve() {
    return this.eventService.getEvents().pipe(map(events => events))
  }

}
