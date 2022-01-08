import { Component, OnInit } from '@angular/core';
import { AuthService, EventService, IEvent, ISession } from 'src/app/_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];
  events: IEvent[];
  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }

  getAllEvents() {
    this.eventService.getEvents().subscribe((response) => {
      this.events = response;
    });
  }
}
