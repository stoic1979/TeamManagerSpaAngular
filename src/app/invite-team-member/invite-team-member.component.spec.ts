import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTeamMemberComponent } from './invite-team-member.component';

describe('InviteTeamMemberComponent', () => {
  let component: InviteTeamMemberComponent;
  let fixture: ComponentFixture<InviteTeamMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteTeamMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
