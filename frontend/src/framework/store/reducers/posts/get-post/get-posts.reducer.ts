import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { PostSliceState } from '../../../slices/posts-slice';
import { GetPostPayload } from './get-posts.reducer.types';

export const getPostsReducer = (state: Draft<PostSliceState>, action: PayloadAction<GetPostPayload>) => {
	return {
		...state,
		posts: action.payload.posts,
	};
};
