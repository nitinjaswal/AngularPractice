import { Component, Input, OnInit } from '@angular/core';
import { ISession } from '..';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy)
      this.sortBy === 'name' ? this.visibleSessions.sort
        (sortByNameAsync) : this.visibleSessions.sort(sortByVotesDesc);
    }

  }
  filterSessions(filter) {
    if (filter === 'all') {
      //creating copy of  array using slice
      this.visibleSessions = this.sessions.slice(0);
    }
    else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }
}
function sortByNameAsync(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1:ISession,s2:ISession){
  return s2.voters.length -s1.voters.length;
}
