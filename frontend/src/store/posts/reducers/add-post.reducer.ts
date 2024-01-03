import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../../types/posts';
import { PostSliceState } from '../slices/posts-slice';

export const addPostReducer = (state: Draft<PostSliceState>, action: PayloadAction<Post>) => {
	return {
		...state,
		posts: [action.payload, ...state.posts],
	};
};
