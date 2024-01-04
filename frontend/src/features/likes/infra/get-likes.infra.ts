import { GetLikesInfraInput, GetLikesInfraResponse } from './get-likes.models';

export interface GetLikesInfra {
	getLikes(input: GetLikesInfraInput): Promise<GetLikesInfraResponse>;
}

export class DefaultGetLikesInfra implements GetLikesInfra {
	constructor(private readonly API_URL: string) {}

	async getLikes({ postId }: GetLikesInfraInput): Promise<GetLikesInfraResponse> {
		try {
			const response = await fetch(`${this.API_URL}/likes/${postId}`);

			return await response.json();
		} catch (err) {
			throw new Error(`Error retrieving likes: ${err}`);
		}
	}
}
