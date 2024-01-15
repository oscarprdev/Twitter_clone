import { Post } from '../../../shared/domain/types/posts';
import { AddPostPorts } from './add-post.ports';
import { AddPostUsecaseInput, AddPostUsecaseResponse } from './add-post.types';

export interface AddPostUsecase {
	addPost(input: AddPostUsecaseInput): Promise<AddPostUsecaseResponse>;
}

export class DefaultAddPostUsecase implements AddPostUsecase {
	constructor(private readonly ports: AddPostPorts) {}

	private async addPostWithImage(userId: string, post: string, file: File) {
		const imageUploaded = await this.ports.uploadImage({ userId, file });

		return await this.ports.addPost({ post, userId, image: imageUploaded.url });
	}

	async addPost({ post, userId, file }: AddPostUsecaseInput): Promise<AddPostUsecaseResponse> {
		try {
			let postCreated: Post;

			if (file) {
				postCreated = await this.addPostWithImage(userId, post, file);
			} else {
				postCreated = await this.ports.addPost({ post, userId, image: '' });
			}

			return {
				post: postCreated,
				state: 'success',
			};
		} catch (err: unknown) {
			return {
				error: `Error creating a post: ${err}`,
				state: 'error',
			};
		}
	}
}
