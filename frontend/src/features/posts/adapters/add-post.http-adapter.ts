import { PostInfra } from '../infra/post.infra';
import { AddPostPorts } from '../application/add-post/add-post.ports';
import { UploadImageUsecaseAdapter } from '../../shared/adapters/upload-image.usecase-adapter';

export class AddPostHttpAdapter implements AddPostPorts {
	constructor(private readonly httpClient: PostInfra, private readonly uploadImageUsecaseAdapter: UploadImageUsecaseAdapter) {}

	async addPost({ post, userId, image }: AddPostPorts.AddPostInput): Promise<AddPostPorts.AddPostOutput> {
		const response = await this.httpClient.addPost({ post, userId, image });

		return {
			id: response.post.id,
			updatedAt: response.post.updated_at,
			userId: response.post.userId,
			post: response.post.post,
			image: response.post.image,
			owner: response.post.owner,
		};
	}

	async uploadImage({ userId, file }: AddPostPorts.UploadImageInput): Promise<AddPostPorts.UploadImageOutput> {
		return await this.uploadImageUsecaseAdapter.uploadImage({ userId, file });
	}
}
