import { StateUsecase } from '../../../shared/application/redux.usecase';
import { Post } from '../../../shared/domain/types/posts';
import { AddPostPorts } from './add-post.ports';
import { AddPostUsecaseInput } from './add-post.types';

export interface AddPostUsecase {
	addPost(input: AddPostUsecaseInput): Promise<void>;
}

export class DefaultAddPostUsecase implements AddPostUsecase {
	constructor(private readonly ports: AddPostPorts, private readonly stateUsecase: StateUsecase) {}

	private async addPostWithImage(userId: string, post: string, file: File) {
		const imageUploaded = await this.ports.uploadImage({ userId, file });

		return await this.ports.addPost({ post, userId, image: imageUploaded.url });
	}

	async addPost({ post, userId, file }: AddPostUsecaseInput): Promise<void> {
		try {
			let postCreated: Post;

			if (file) {
				postCreated = await this.addPostWithImage(userId, post, file);
			} else {
				postCreated = await this.ports.addPost({ post, userId, image: '' });
			}

			this.stateUsecase.addPost(postCreated);
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error creating a post: ${err}`);
		}
	}
}
