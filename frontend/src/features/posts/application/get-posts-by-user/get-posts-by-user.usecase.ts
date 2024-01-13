import { GetPostsByUserPorts } from './get-posts-by-user.ports';
import { GetPostsByUserInput, GetPostsByUserUsecaseOutput } from './get-posts-by-user.types';

export interface GetPostsByUserUsecase {
	getPostsByUser(input: GetPostsByUserInput): Promise<GetPostsByUserUsecaseOutput>;
}

export class DefaultGetPostsByUserUsecase implements GetPostsByUserUsecase {
	constructor(private readonly ports: GetPostsByUserPorts) {}

	async getPostsByUser({ userId }: GetPostsByUserInput): Promise<GetPostsByUserUsecaseOutput> {
		try {
			const { posts, postsCount } = await this.ports.getPostsByUser({ userId });

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
