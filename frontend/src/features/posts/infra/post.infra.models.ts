export interface AddPostPayload {
	userId: string;
	post: string;
	image: string;
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

export interface GetPostsByUserInput {
	userId: string;
}

export interface GetPostsByUserResponse {
	posts: DbPost[];
	postsCount: number;
}

export interface DbPost {
	id: string;
	created_at: string;
	updated_at: string;
	userId: string;
	post: string;
	image: string;
	owner: PostOwner;
}

export interface PostOwner {
	id: string;
	name: string;
	surname: string;
	username: string;
	profileImgUrl: string;
	email: string;
}
