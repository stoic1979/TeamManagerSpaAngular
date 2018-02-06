import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { UsersComponent } from './users/users.component'
import { SalesComponent } from './sales/sales.component'
import { ProjectsComponent } from './projects/projects.component'
import { IssuesComponent } from './issues/issues.component'
import { TeamComponent } from './team/team.component'
import { InviteTeamMemberComponent } from './invite-team-member/invite-team-member.component'


import { AuthGuard } from './auth/auth.guard'


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'sales', component: SalesComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'issues', component: IssuesComponent, canActivate: [AuthGuard] },
  { path: 'team', component: TeamComponent, canActivate: [AuthGuard] },
  { path: 'inviteTeamMember', component: InviteTeamMemberComponent, canActivate: [AuthGuard] },
];

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'users', component: UsersComponent },
//   { path: 'sales', component: SalesComponent},
//   { path: 'projects', component: ProjectsComponent},
//   { path: 'issues', component: IssuesComponent },
//   { path: 'team', component: TeamComponent},
//   { path: 'inviteTeamMember', component: InviteTeamMemberComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
