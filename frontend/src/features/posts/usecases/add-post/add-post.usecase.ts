import { AddPostPorts } from './add-post.ports';
import { AddPostUsecaseInput, AddPostUsecaseResponse } from './add-post.types';

export interface AddPostUsecase {
	addPost(input: AddPostUsecaseInput): Promise<AddPostUsecaseResponse>;
}

export class DefaultAddPostUsecase implements AddPostUsecase {
	constructor(private readonly port: AddPostPorts) {}

	async addPost({ post, userId }: AddPostUsecaseInput): Promise<AddPostUsecaseResponse> {
		try {
			const [postResponse, user] = await Promise.all([await this.port.addPost({ post, userId }), await this.port.getUser({ userId })]);

			return {
				post: {
					post: postResponse.post,
					updatedAt: postResponse.updatedAt,
					name: user.name,
					surname: user.surname,
					username: user.username,
					email: user.email,
					profileImgUrl: user.profileImgUrl,
				},
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
