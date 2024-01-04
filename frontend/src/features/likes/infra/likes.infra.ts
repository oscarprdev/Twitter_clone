import {
	AddLikeInfraInput,
	AddLikeInfraResponse,
	GetLikesInfraInput,
	GetLikesInfraResponse,
	GetUsersLikesFromPostInput,
	GetUsersLikesFromPostResponse,
} from './likes.models';

export interface LikesInfra {
	getLikes(input: GetLikesInfraInput): Promise<GetLikesInfraResponse>;
	getUsersLikesFromPost(input: GetUsersLikesFromPostInput): Promise<GetUsersLikesFromPostResponse>;
	addLike(input: AddLikeInfraInput): Promise<AddLikeInfraResponse>;
}

export class DefaultLikesInfra implements LikesInfra {
	constructor(private readonly API_URL: string) {}

	async getLikes({ postId }: GetLikesInfraInput): Promise<GetLikesInfraResponse> {
		try {
			const response = await fetch(`${this.API_URL}/likes/post/${postId}`);

			return await response.json();
		} catch (err) {
			throw new Error(`Error retrieving likes: ${err}`);
		}
	}

	async getUsersLikesFromPost({ postId }: GetUsersLikesFromPostInput): Promise<GetUsersLikesFromPostResponse> {
		try {
			const response = await fetch(`${this.API_URL}/users/likes/${postId}`);

			return await response.json();
		} catch (err) {
			throw new Error(`Error retrieving users likes from post: ${err}`);
		}
	}

	async addLike({ userId, postId }: AddLikeInfraInput): Promise<AddLikeInfraResponse> {
		try {
			const response = await fetch(`${this.API_URL}/likes`, {
				method: 'POST',
				body: JSON.stringify({
					userId,
					postId,
				}),
			});

			return await response.json();
		} catch (err) {
			throw new Error(`Error retrieving likes: ${err}`);
		}
	}
}
