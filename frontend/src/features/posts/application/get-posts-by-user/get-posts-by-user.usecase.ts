import { StateUsecase } from '../../../shared/application/redux.usecase';
import { GetPostsByUserPorts } from './get-posts-by-user.ports';
import { GetPostsByUserInput } from './get-posts-by-user.types';

export interface GetPostsByUserUsecase {
	getPostsByUser(input: GetPostsByUserInput): Promise<void>;
}

export class DefaultGetPostsByUserUsecase implements GetPostsByUserUsecase {
	constructor(private readonly ports: GetPostsByUserPorts, private readonly stateUsecase: StateUsecase) {}

	async getPostsByUser({ userId }: GetPostsByUserInput): Promise<void> {
		try {
			const { posts } = await this.ports.getPostsByUser({ userId });

			this.stateUsecase.getProfilePosts(posts);
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error listing all posts: ${err}`);
		}
	}
}
