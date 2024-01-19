import { AddPostResponse } from '../../../../src/features/posts/infra/post.infra.models';
import { postDbResponse } from '../posts.response';

export const SuccessfulAddPostResponse: AddPostResponse = {
	post: postDbResponse,
};
