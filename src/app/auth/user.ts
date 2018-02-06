export class User {
  email:     string;
  password:  string;
  role:      string;
  first_name: string;
  last_name:  string;
  team_name:  string;

  constructor(user) {
  	this.email = user.email || '';
  	this.password = user.password || '';
  	this.role = user.role || '';
  	this.first_name = user.first_name || '';
  	this.last_name = user.lastName || '' ;
  	this.team_name = user.team_name || '';
  }
}