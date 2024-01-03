export interface AddPostPayload {
	userId: string;
	post: string;
}

export interface AddPostResponse {
	post: DbPost;
}

export interface DbPost {
	id: string;
	created_at: string;
	updated_at: string;
	userId: string;
	post: string;
}

export interface GetUserPayload {
	userId: string;
}

export interface GetUserResponse {
	user: DbUser;
}

export interface DbUser {
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
