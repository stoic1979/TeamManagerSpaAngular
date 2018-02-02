import { TestBed, inject } from '@angular/core/testing';

import { InviteTmMemberService } from './invite-tm-member.service';

describe('InviteTmMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InviteTmMemberService]
    });
  });

  it('should be created', inject([InviteTmMemberService], (service: InviteTmMemberService) => {
    expect(service).toBeTruthy();
  }));
});
