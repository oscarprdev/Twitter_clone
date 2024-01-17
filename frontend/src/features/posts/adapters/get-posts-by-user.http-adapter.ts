import { PostInfra } from '../infra/post.infra';
import { GetPostsByUserPorts } from '../application/get-posts-by-user/get-posts-by-user.ports';
import { mapDbPostToUsecase } from '../../shared/mappers/map-db-post-to-app';

export class GetPostsByUserHttpAdapter implements GetPostsByUserPorts {
	constructor(private readonly httpClient: PostInfra) {}

	async getPostsByUser({ userId }: GetPostsByUserPorts.GetPostsByUserInput): Promise<GetPostsByUserPorts.GetPostsByUserOutput> {
		const dbResponse = await this.httpClient.getPostsByUser({ userId });

		return {
			posts: dbResponse.posts.map((post) => mapDbPostToUsecase(post)),
			postsCount: dbResponse.postsCount,
		};
	}
}
