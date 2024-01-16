import { StateUsecase } from '../../../shared/application/redux.usecase';
import { GetPostsPorts } from './get-posts.ports';
import { GetPostsInput } from './get-posts.types';

export interface GetPostsUsecase {
	getPosts(input: GetPostsInput): Promise<void>;
}

export class DefaultGetPostsUsecase implements GetPostsUsecase {
	constructor(private readonly ports: GetPostsPorts, private readonly stateUsecase: StateUsecase) {}

	async getPosts({ limit, offset }: GetPostsInput): Promise<void> {
		try {
			const { posts } = await this.ports.getPosts({ limit, offset });

			this.stateUsecase.getPosts(posts);
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error listing all posts: ${err}`);
		}
	}
}
