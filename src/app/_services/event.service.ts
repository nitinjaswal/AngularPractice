import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IEvent, ISession } from './index';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

  getEvents(): Observable<IEvent[]> {
    return this.httpClient
      .get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.httpClient
      .get<IEvent>('/api/events/' + id)
      .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  saveEvent(event) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.httpClient
      .post('/api/events', event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  searchSessions(searchTerm: string) {
    return this.httpClient
      .get<ISession[]>('/api/sessions/search?search=' + searchTerm)
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }
  
}
