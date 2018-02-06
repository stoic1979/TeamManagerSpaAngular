import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InviteTmMemberService } from '../invite-team-member/invite-tm-member.service';

@Component({
  selector: 'app-invite-team-member',
  templateUrl: './invite-team-member.component.html',
  styleUrls: ['./invite-team-member.component.scss']
})
export class InviteTeamMemberComponent implements OnInit {
  form: FormGroup;                

  constructor(
  	    private fb: FormBuilder, 
  	    private invitationService: InviteTmMemberService        
  	) { }

  ngOnInit() {
  	  this.form = this.fb.group({ 
           email:    ['', Validators.required]
    });
  }

  onSubmit() {
  	this.invitationService.inviteMember(this.form.value);
  }

}
