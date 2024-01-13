import { AddPostPorts } from './add-post.ports';
import { AddPostUsecaseInput, AddPostUsecaseResponse } from './add-post.types';

export interface AddPostUsecase {
	addPost(input: AddPostUsecaseInput): Promise<AddPostUsecaseResponse>;
}

export class DefaultAddPostUsecase implements AddPostUsecase {
	constructor(private readonly ports: AddPostPorts) {}

	async addPost({ post, userId }: AddPostUsecaseInput): Promise<AddPostUsecaseResponse> {
		try {
			const postCreated = await this.ports.addPost({ post, userId });

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
