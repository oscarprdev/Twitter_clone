import { HttpInfra } from '../../shared/infra/http.infra';
import {
	AddPostPayload,
	AddPostResponse,
	GetPostsByUserInput,
	GetPostsByUserResponse,
	GetPostsInput,
	GetPostsResponse,
} from './post.infra.models';

export interface PostInfra {
	getPosts(input: GetPostsInput): Promise<GetPostsResponse>;
	getPostsByUser(input: GetPostsByUserInput): Promise<GetPostsByUserResponse>;
	addPost(payload: AddPostPayload): Promise<AddPostResponse>;
}

export class DefaultPostInfra extends HttpInfra implements PostInfra {
	constructor(private readonly API_URL: string) {
		super();
	}

	async getPosts({ limit, offset }: GetPostsInput): Promise<GetPostsResponse> {
		const url = `${this.API_URL}/posts?limit=${limit}&offset=${offset}`;

		return await this.GET<GetPostsResponse>(url);
	}

	async getPostsByUser({ userId }: GetPostsByUserInput): Promise<GetPostsByUserResponse> {
		const url = `${this.API_URL}/posts/user/${userId}`;

		return await this.GET<GetPostsByUserResponse>(url);
	}

	async addPost(payload: AddPostPayload): Promise<AddPostResponse> {
		const url = `${this.API_URL}/posts`;

		return await this.POST<AddPostResponse, AddPostPayload>(url, payload);
	}
}
