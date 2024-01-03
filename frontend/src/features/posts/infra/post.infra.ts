import { AddPostPayload, AddPostResponse, GetPostsResponse, GetUserPayload, GetUserResponse } from './post.infra.models';

export interface PostInfra {
	getPosts(): Promise<GetPostsResponse>;
	addPost(payload: AddPostPayload): Promise<AddPostResponse>;
	getUser(payload: GetUserPayload): Promise<GetUserResponse>;
}

export class DefaultPostInfra implements PostInfra {
	constructor(private readonly API_URL: string) {}

	async getPosts(): Promise<GetPostsResponse> {
		try {
			const response = await fetch(`${this.API_URL}/posts`);

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`Error retrieving all posts: ${error}`);
		}
	}

	async addPost(payload: AddPostPayload): Promise<AddPostResponse> {
		try {
			const response = await fetch(`${this.API_URL}/posts`, {
				method: 'POST',
				body: JSON.stringify(payload),
			});

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`Error creating a post: ${error}`);
		}
	}

	async getUser({ userId }: GetUserPayload): Promise<GetUserResponse> {
		try {
			const response = await fetch(`${this.API_URL}/users/${userId}`);

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`Error retrieving an user: ${error}`);
		}
	}
}
