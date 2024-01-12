import { PostInfra } from '../infra/post.infra';
import { DbPost } from '../infra/post.infra.models';
import { GetPostsByUserPorts } from '../usecases/get-posts-by-user/get-posts-by-user.ports';

export class GetPostsByUserHttpAdapter implements GetPostsByUserPorts {
	constructor(private readonly httpClient: PostInfra) {}

	private mapDbPostToUsecase({ updated_at, userId, post, id, owner }: DbPost): GetPostsByUserPorts.PostResponse {
		return {
			id,
			updatedAt: updated_at,
			userId: userId,
			post,
			owner,
		};
	}

	async getPostsByUser({ userId }: GetPostsByUserPorts.GetPostsByUserInput): Promise<GetPostsByUserPorts.GetPostsByUserOutput> {
		const dbResponse = await this.httpClient.getPostsByUser({ userId });

		return {
			posts: dbResponse.posts.map((post) => this.mapDbPostToUsecase(post)),
			postsCount: dbResponse.postsCount,
		};
	}
}
