import { VoterService } from '../_services/voter.service';
import { ISession } from '../_services';
import { Observable, of } from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService, mockHttp;

  //This method will run before each test case , so that each test gets it own voterService instance
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters', () => {
      var session = { id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(3, <ISession>session, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with the right URL', () => {
      var session = { id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, <ISession>session, 'joe');

      expect(mockHttp.delete).toHaveBeenCalledWith(
        '/api/events/3/sessions/6/voters/joe'
      );
    });
  });

  describe('addVoter', () => {
    it('should call http.post with the right url', () => {
      const session = { id: 6, voters: ['john'] };
      mockHttp.post.and.returnValue(of(false));
      voterService.addVoter(3, <ISession>session, 'joe');

      expect(mockHttp.post).toHaveBeenCalledWith(
        '/api/events/3/sessions/6/voters/joe',
        {},
        jasmine.any(Object)
      );
    });
  });

  describe('userHasVoted', () => {

    it('Check if user has voted', () => {
      const session = { id: 6, voters: ['john'] };
      let result = voterService.userHasVoted(<ISession>session, 'john');
      expect(result).toBe(true);
    });

    it('Check if user has not voted', () => {
      const session = { id: 6, voters: ['john'] };
      let result = voterService.userHasVoted(<ISession>session, 'rock');
      expect(result).toBe(false);
    });
    
  });
});
