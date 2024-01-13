import { GetLikesPorts } from './get-likes.ports';
import { GetLikesOutput, GetLikesPayload } from './get-likes.types';

export interface GetLikesUsecase {
	getLikes(input: GetLikesPayload): Promise<GetLikesOutput>;
}

export class DefaultGetLikesUsecase implements GetLikesUsecase {
	constructor(private readonly ports: GetLikesPorts) {}

	async getLikes({ postId }: GetLikesPayload): Promise<GetLikesOutput> {
		try {
			const response = await this.ports.getLikes({ postId });

			return {
				state: 'success',
				likeInfo: response,
			};
		} catch (err: unknown) {
			return {
				error: `Error retrieving likes: ${err}`,
				state: 'error',
			};
		}
	}
}
