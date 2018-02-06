import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';

import { Member } from './member';
import { User } from '../auth/user';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

	allUsers: any;
  user: any;

  displayedColumns = ['position', 'name', 'email', 'teamName'];
  dataSource = new MatTableDataSource<Element>();

  constructor(private userService: UsersService,
              private teamService: TeamService) { }

  ngOnInit() {

    this.teamService.getAllTeamMembers().subscribe((res)=> {
      console.log('[TeamMebers] All TeamMambers ::'    + JSON.stringify(res));
    });
  }

}
