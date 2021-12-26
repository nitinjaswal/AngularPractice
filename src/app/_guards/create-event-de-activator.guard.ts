import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEventComponent } from '../events/create-event/create-event.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEventDeActivatorGuard implements CanDeactivate<unknown> {
  canDeactivate(createEventComponent: CreateEventComponent): Observable<boolean>|boolean  {
   if(createEventComponent.isDirty){
     return window.confirm('You have not saved this event, do you really want to cancel?')
   }
   else{
     return true;
   }
  }
  
}
