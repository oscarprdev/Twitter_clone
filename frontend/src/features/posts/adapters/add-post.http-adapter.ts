import { PostInfra } from '../infra/post.infra';
import { AddPostPorts } from '../application/add-post/add-post.ports';
import { UploadImageUsecase } from '../../image/application/upload-image/upload-image.usecase';

export class AddPostHttpAdapter implements AddPostPorts {
	constructor(private readonly httpClient: PostInfra, private readonly uploadImageUsecase: UploadImageUsecase) {}

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
		const uploadImageResponse = await this.uploadImageUsecase.uploadImage({ userId, file });

		if (uploadImageResponse.state === 'success') {
			return {
				url: uploadImageResponse.url,
			};
		} else {
			throw new Error(uploadImageResponse.error);
		}
	}
}
