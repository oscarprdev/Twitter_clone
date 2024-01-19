import { GetPostsByUserResponse } from '../../../../src/features/posts/infra/post.infra.models';
import { postDbResponse } from '../posts.response';

export const SuccessfulGetPostsByUserResponse: GetPostsByUserResponse = {
	posts: [postDbResponse],
	postsCount: 1,
};
