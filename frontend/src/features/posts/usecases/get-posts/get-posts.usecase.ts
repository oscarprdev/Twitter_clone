import { GetPostsPorts } from './get-posts.ports';
import { GetPostsUsecaseOutput } from './get-posts.types';

export interface GetPostsUsecase {
	getPosts(): Promise<GetPostsUsecaseOutput>;
}

export class DefaultGetPostsUsecase implements GetPostsUsecase {
	constructor(private readonly ports: GetPostsPorts) {}

	async getPosts(): Promise<GetPostsUsecaseOutput> {
		try {
			const { posts } = await this.ports.getPosts();

			return {
				posts,
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
