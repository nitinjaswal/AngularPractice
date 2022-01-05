import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { map } from 'rxjs';
import { EventService } from '../_services/event.service';

@Injectable({
  providedIn: 'root',
})
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }
}
