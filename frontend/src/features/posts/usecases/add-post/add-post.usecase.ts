import { AddPostPorts } from './add-post.ports';
import { AddPostUsecaseInput, AddPostUsecaseResponse } from './add-post.types';

export interface AddPostUsecase {
	addPost(input: AddPostUsecaseInput): Promise<AddPostUsecaseResponse>;
}

export class DefaultAddPostUsecase implements AddPostUsecase {
	constructor(private readonly ports: AddPostPorts) {}

	async addPost({ post, userId }: AddPostUsecaseInput): Promise<AddPostUsecaseResponse> {
		try {
			const [postResponse, user] = await Promise.all([await this.ports.addPost({ post, userId }), await this.ports.getUser({ userId })]);

			return {
				post: {
					id: postResponse.id,
					userId: postResponse.userId,
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
