export interface User {
	 first_name: String;
	 last_name: String;
	 email: String;
}

export interface Member {
	 _id: String;
	 user: User;
}
