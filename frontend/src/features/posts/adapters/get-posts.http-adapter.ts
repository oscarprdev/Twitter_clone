import { PostInfra } from '../infra/post.infra';
import { DbPost } from '../infra/post.infra.models';
import { GetPostsPorts } from '../application/get-posts/get-posts.ports';

export class GetPostsHttpAdapter implements GetPostsPorts {
	constructor(private readonly httpClient: PostInfra) {}

	private mapDbPostToUsecase({ updated_at, userId, post, id, owner }: DbPost): GetPostsPorts.PostResponse {
		return {
			id,
			updatedAt: updated_at,
			userId: userId,
			post,
			owner,
		};
	}

	async getPosts({ limit, offset }: GetPostsPorts.GetPostsInput): Promise<GetPostsPorts.GetPostsOutput> {
		const dbResponse = await this.httpClient.getPosts({ limit, offset });

		return {
			posts: dbResponse.posts.map((post) => this.mapDbPostToUsecase(post)),
			postsCount: dbResponse.postsCount,
		};
	}
}
