import { PostInfra } from '../infra/post.infra';
import { GetPostsPorts } from '../application/get-posts/get-posts.ports';
import { mapDbPostToUsecase } from '../../shared/mappers/map-db-post-to-app';

export class GetPostsHttpAdapter implements GetPostsPorts {
	constructor(private readonly httpClient: PostInfra) {}

	async getPosts({ limit, offset }: GetPostsPorts.GetPostsInput): Promise<GetPostsPorts.GetPostsOutput> {
		const dbResponse = await this.httpClient.getPosts({ limit, offset });

		return {
			posts: dbResponse.posts.map((post) => mapDbPostToUsecase(post)),
			postsCount: dbResponse.postsCount,
		};
	}
}
