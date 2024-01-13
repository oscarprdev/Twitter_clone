import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { PostSliceState } from '../../../slices/posts-slice';
import { GET_POST_TYPES, GetPostPayloadAction } from './get-posts.reducer.types';

export const getPostsReducer = (state: Draft<PostSliceState>, action: PayloadAction<GetPostPayloadAction>) => {
	switch (action.payload.type) {
		case GET_POST_TYPES.GET_POSTS:
			return {
				isLoading: false,
				posts: action.payload.posts,
			};
		case GET_POST_TYPES.LOADING:
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
};
