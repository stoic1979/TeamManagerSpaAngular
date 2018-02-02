import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';

import { Member } from './member';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

	members: any;
	displayedColumns: String[];
	dataSource: MatTableDataSource<Member>;

  constructor(
  	private teamService: TeamService,
    private router: Router
  	) { }

  ngOnInit() {

  	// let that = this;

  	// console.log("[TeamComponent] :: getting all team members");
  	// this.teamService.getAllTeamMembers()
  	// 	.subscribe(response => {
   //    		console.log("[TeamComponent] ---->> resp: " +  JSON.stringify(response) );

   //    		that.members = response;

   //    		that.displayedColumns = ['_id', 'name', 'email'];
  	// 	   	that.dataSource = new MatTableDataSource<Member>(that.members);

   //    		return response;
   //  	});
  	//console.log("[TeamComponent] ::  m=" + JSON.stringify(m) );
  }

  onInvitation() {
   this.router.navigate(['/inviteTeamMember']);
  }

}
