import { Component, OnInit } from '@angular/core';
import { AuthService, EventService, ISession } from 'src/app/_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];
  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
