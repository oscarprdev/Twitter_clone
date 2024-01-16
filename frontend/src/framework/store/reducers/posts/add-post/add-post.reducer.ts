import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { PostSliceState } from '../../../slices/posts-slice';
import { AddPostPayload } from './add-post.reducer.types';

export const addPostReducer = (state: Draft<PostSliceState>, action: PayloadAction<AddPostPayload>) => {
	return {
		...state,
		posts: [action.payload.post, ...state.posts],
	};
};
