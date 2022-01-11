import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CollapsibleWellComponent } from '../collapsible-well/collapsible-well.component';
import { AuthService, SessionListComponent } from '../events';
import { UpvoteComponent } from '../upvote/upvote.component';
import { DurationPipe } from '../_pipe/duration.pipe';
import { VoterService } from '../_services/voter.service';



describe('SessionListComponent', () => {
  let mockAuthService,
    mockVoterService,
    fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(() => {
    (mockAuthService = {
      isAuthenticated: () => true,
      currentuser: { userName: 'Rock' }
    }),
      (mockVoterService = { userHasVoted: () => true }),
      TestBed.configureTestingModule({
        declarations: [SessionListComponent, DurationPipe],
        providers: [
          { provide: AuthService, useValue: mockAuthService },
          { provide: VoterService, useValue: mockVoterService },
        ],
        schemas:[
          NO_ERRORS_SCHEMA
        ]
      });
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('Initial display', () => {
    it('should have the correct name', () => {
      component.sessions = [
        {
          name: 'Session 1',
          id: 3,
          presenter: 'Rock',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['Brock', 'Kurt'],
        },
      ];

      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;
      component.ngOnChanges();

      fixture.detectChanges();

    // expect(element.querySelector('[well-title]').textContent).toContain("Session 1")
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
    });
  });
});
