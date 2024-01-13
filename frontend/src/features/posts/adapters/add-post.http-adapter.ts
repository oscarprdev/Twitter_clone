import { PostInfra } from '../infra/post.infra';
import { AddPostPorts } from '../application/add-post/add-post.ports';

export class AddPostHttpAdapter implements AddPostPorts {
	constructor(private readonly httpClient: PostInfra) {}

	async addPost({ post, userId }: AddPostPorts.AddPostInput): Promise<AddPostPorts.AddPostOutput> {
		const response = await this.httpClient.addPost({ post, userId });

		return {
			id: response.post.id,
			updatedAt: response.post.updated_at,
			userId: response.post.userId,
			post: response.post.post,
			owner: response.post.owner,
		};
	}
}
