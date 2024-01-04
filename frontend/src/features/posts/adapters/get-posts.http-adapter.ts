import { PostInfra } from '../infra/post.infra';
import { DbPost } from '../infra/post.infra.models';
import { GetPostsPorts } from '../usecases/get-posts/get-posts.ports';

export class GetPostsHttpAdapter implements GetPostsPorts {
	constructor(private readonly httpClient: PostInfra) {}

	private mapDbPostToUsecase({ updated_at, userId, post, id }: DbPost): GetPostsPorts.PostResponse {
		return {
			id,
			updatedAt: updated_at,
			userId: userId,
			post,
		};
	}

	async getPosts(): Promise<GetPostsPorts.GetPostsOutput> {
		const dbResponse = await this.httpClient.getPosts();

		return {
			posts: dbResponse.posts.map((post) => this.mapDbPostToUsecase(post)),
		};
	}

	async getUser({ userId }: GetPostsPorts.GetUserInput): Promise<GetPostsPorts.GetUserOutput> {
		const { user } = await this.httpClient.getUser({ userId });

		return {
			id: user.id,
			updatedAt: user.updatedAt,
			username: user.username,
			name: user.name,
			surname: user.surname,
			profileImgUrl: user.profileImgUrl,
			email: user.email,
		};
	}
}
