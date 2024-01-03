import { DefaultPostInfra } from '../infra/post.infra';
import { AddPostPort } from '../usecases/add-post/add-post.port';

export class AddPostHttpAdapter implements AddPostPort {
	constructor(private readonly httpClient: DefaultPostInfra) {}

	async addPost({ post, userId }: AddPostPort.AddPostInput): Promise<AddPostPort.AddPostOutput> {
		const response = await this.httpClient.addPost({ post, userId });

		return {
			updatedAt: response.post.updated_at,
			userId: response.post.userId,
			post: response.post.post,
		};
	}

	async getUser({ userId }: AddPostPort.GetUserInput): Promise<AddPostPort.GetUserOutput> {
		const { user } = await this.httpClient.getUser({ userId });

		return {
			updatedAt: user.updatedAt,
			username: user.username,
			name: user.name,
			surname: user.surname,
			profileImgUrl: user.profileImgUrl,
			email: user.email,
		};
	}
}
