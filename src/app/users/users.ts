export class Users {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
	projectName: string;
	projectSummery: string;

	constructor(user){
		this.id = user.id || '';
		this.name = user.name || '';
		this.email = user.email || '';
		this.phoneNumber = user.phoneNumber || '';
		this.projectName = user.projectName || '';
		this.projectSummery = this.projectSummery || '';
	}
}
