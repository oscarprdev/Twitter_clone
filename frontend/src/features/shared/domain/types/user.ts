export interface User {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	surname: string;
	username: string;
	email: string;
	profileImgUrl: string;
	profileBgImgUrl: string;
}

export interface DbUser {
	id: string;
	created_at: string;
	updated_at: string;
	name: string;
	surname: string;
	username: string;
	email: string;
	profileImgUrl: string;
	profileBgImgUrl: string;
}
