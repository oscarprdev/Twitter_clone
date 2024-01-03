import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { PostSliceState } from '../slices/posts-slice';
import { Post } from '../../../types/posts';

export const getPostsReducer = (state: Draft<PostSliceState>, action: PayloadAction<Post[]>) => {
	return {
		...state,
		posts: action.payload,
	};
};
