import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { PostSliceState } from '../../../slices/posts-slice';
import { ADD_POST_TYPES, AddPostPayloadAction } from './add-post.reducer.types';

export const addPostReducer = (state: Draft<PostSliceState>, action: PayloadAction<AddPostPayloadAction>) => {
	switch (action.payload.type) {
		case ADD_POST_TYPES.ADD_POST:
			return {
				isLoading: false,
				posts: [action.payload.post, ...state.posts],
			};
		case ADD_POST_TYPES.LOADING:
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
};
