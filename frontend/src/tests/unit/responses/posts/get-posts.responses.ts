import { GetPostsResponse } from '../../../../features/posts/infra/post.infra.models';
import { postDbResponse } from '../posts.response';

export const SuccessfulGetPostsResponse: GetPostsResponse = {
	posts: [postDbResponse],
	postsCount: 1,
};

export const SuccessfulGetPostsEmptyResponse: GetPostsResponse = {
	posts: [],
	postsCount: 0,
};

export const SuccessfulGetMorePostsResponse: GetPostsResponse = {
	posts: [postDbResponse, postDbResponse],
	postsCount: 2,
};
