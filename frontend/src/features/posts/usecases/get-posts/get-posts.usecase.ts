import { GetPostsPorts } from './get-posts.ports';
import { GetPostsInput, GetPostsUsecaseOutput } from './get-posts.types';

export interface GetPostsUsecase {
	getPosts(input: GetPostsInput): Promise<GetPostsUsecaseOutput>;
}

export class DefaultGetPostsUsecase implements GetPostsUsecase {
	constructor(private readonly ports: GetPostsPorts) {}

	async getPosts({ limit, offset }: GetPostsInput): Promise<GetPostsUsecaseOutput> {
		try {
			const { posts, postsCount } = await this.ports.getPosts({ limit, offset });

			console.log(postsCount);

			return {
				posts,
				postsCount,
				state: 'success',
			};
		} catch (err: unknown) {
			return {
				error: `Error listing all posts: ${err}`,
				state: 'error',
			};
		}
	}
}
