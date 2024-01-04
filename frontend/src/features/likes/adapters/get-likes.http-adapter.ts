import { GetLikesInfra } from '../infra/get-likes.infra';
import { GetLikesPorts } from '../usecases/get-likes.ports';

export class GetLikesHttpAdapter implements GetLikesPorts {
	constructor(private readonly httpClient: GetLikesInfra) {}

	async getLikes({ postId }: GetLikesPorts.GetLikesInput): Promise<GetLikesPorts.GetLikesOutput> {
		const response = await this.httpClient.getLikes({ postId });

		return {
			userId: response.userId,
			postId: response.postId,
			post: response.post,
			numLikes: response.numLikes,
		};
	}
}
