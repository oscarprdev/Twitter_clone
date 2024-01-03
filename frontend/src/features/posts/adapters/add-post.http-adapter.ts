import { DefaultPostInfra } from '../infra/post.infra';
import { AddPostPorts } from '../usecases/add-post/add-post.ports';

export class AddPostHttpAdapter implements AddPostPorts {
	constructor(private readonly httpClient: DefaultPostInfra) {}

	async addPost({ post, userId }: AddPostPorts.AddPostInput): Promise<AddPostPorts.AddPostOutput> {
		const response = await this.httpClient.addPost({ post, userId });

		return {
			updatedAt: response.post.updated_at,
			userId: response.post.userId,
			post: response.post.post,
		};
	}

	async getUser({ userId }: AddPostPorts.GetUserInput): Promise<AddPostPorts.GetUserOutput> {
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
