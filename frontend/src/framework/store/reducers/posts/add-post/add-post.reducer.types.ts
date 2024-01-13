import { Post } from '../../../../../features/shared/types/posts';

enum AddPostTypes {
	addPost = 'ADD_POST',
	loading = 'LOADING',
}

interface AddPostLoadingPayload {
	type: AddPostTypes.loading;
}

interface AddPostPayload {
	type: AddPostTypes.addPost;
	post: Post;
}

export const ADD_POST_TYPES = {
	ADD_POST: 'ADD_POST' as AddPostTypes.addPost,
	LOADING: 'LOADING' as AddPostTypes.loading,
};

export type AddPostPayloadAction = AddPostLoadingPayload | AddPostPayload;
