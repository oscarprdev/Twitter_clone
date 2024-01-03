import { Post } from '../../../../types/posts';
import { GetPostsPorts } from './get-posts.ports';
import { GetPostsUsecaseOutput } from './get-posts.types';

export interface GetPostsUsecase {
	getPosts(): Promise<GetPostsUsecaseOutput>;
}

export class DefaultGetPostsUsecase implements GetPostsUsecase {
	constructor(private readonly ports: GetPostsPorts) {}

	private async mapPostWithUser(post: GetPostsPorts.PostResponse): Promise<Post> {
		try {
			const user = await this.ports.getUser({ userId: post.userId });

			return {
				post: post.post,
				updatedAt: post.updatedAt,
				name: user.name,
				email: user.email,
				surname: user.surname,
				username: user.username,
				profileImgUrl: user.profileImgUrl,
			};
		} catch (error: unknown) {
			throw new Error(`Unable to retrieve user info with id: ${post.userId}`);
		}
	}

	async getPosts(): Promise<GetPostsUsecaseOutput> {
		try {
			const { posts } = await this.ports.getPosts();

			const postsWithUsers = await Promise.all(posts.map(async (post) => await this.mapPostWithUser(post)));

			return {
				posts: postsWithUsers,
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
