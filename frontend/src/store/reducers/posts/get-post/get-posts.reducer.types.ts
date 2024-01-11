import { Post } from '../../../../features/shared/types/posts';

enum GetPostTypes {
	getPost = 'GET_POSTS',
	loading = 'LOADING',
}

interface GetPostLoadingPayload {
	type: GetPostTypes.loading;
}

interface GetPostPayload {
	type: GetPostTypes.getPost;
	posts: Post[];
}

export const GET_POST_TYPES = {
	GET_POSTS: 'GET_POSTS' as GetPostTypes.getPost,
	LOADING: 'LOADING' as GetPostTypes.loading,
};

export type GetPostPayloadAction = GetPostLoadingPayload | GetPostPayload;
