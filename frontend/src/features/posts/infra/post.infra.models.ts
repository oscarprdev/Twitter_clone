import { DbUser } from '../../shared/types/user';

export interface AddPostPayload {
	userId: string;
	post: string;
}

export interface AddPostResponse {
	post: DbPost;
}

export interface GetPostsInput {
	limit: number;
	offset: number;
}

export interface GetPostsResponse {
	posts: DbPost[];
	postsCount: number;
}

export interface DbPost {
	id: string;
	created_at: string;
	updated_at: string;
	userId: string;
	post: string;
	owner: PostOwner;
}

export interface GetUserPayload {
	userId: string;
}

export interface GetUserResponse {
	user: DbUser;
}

export interface PostOwner {
	name: string;
	surname: string;
	username: string;
	profileImgUrl: string;
	email: string;
}
