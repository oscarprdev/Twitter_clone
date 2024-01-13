import { HttpInfra } from '../../shared/infra/http.infra';
import {
	GetLikesInfraInput,
	GetLikesInfraResponse,
	GetUsersLikesFromPostInput,
	GetUsersLikesFromPostResponse,
	ToggleLikeInfraInput,
	ToggleLikeInfraResponse,
} from './likes.models';

export interface LikesInfra {
	getLikes(input: GetLikesInfraInput): Promise<GetLikesInfraResponse>;
	getUsersLikesFromPost(input: GetUsersLikesFromPostInput): Promise<GetUsersLikesFromPostResponse>;
	toggleLike({ userId, postId }: ToggleLikeInfraInput): Promise<ToggleLikeInfraResponse>;
}

export class DefaultLikesInfra extends HttpInfra implements LikesInfra {
	constructor(private readonly API_URL: string) {
		super();
	}

	async getLikes({ postId }: GetLikesInfraInput): Promise<GetLikesInfraResponse> {
		const url = `${this.API_URL}/likes/post/${postId}`;

		return this.GET<GetLikesInfraResponse>(url);
	}

	async getUsersLikesFromPost({ postId }: GetUsersLikesFromPostInput): Promise<GetUsersLikesFromPostResponse> {
		const url = `${this.API_URL}/users/likes/${postId}`;

		return this.GET<GetUsersLikesFromPostResponse>(url);
	}

	async toggleLike(payload: ToggleLikeInfraInput): Promise<ToggleLikeInfraResponse> {
		const url = `${this.API_URL}/likes`;

		return this.POST<ToggleLikeInfraResponse, ToggleLikeInfraInput>(url, payload);
	}
}
