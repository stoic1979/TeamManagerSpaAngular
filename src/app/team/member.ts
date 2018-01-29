export interface User {
	public first_name: String;
	public last_name: String;
	public email: String;
}

export interface Member {
	public _id: String;
	public user: User;
}
