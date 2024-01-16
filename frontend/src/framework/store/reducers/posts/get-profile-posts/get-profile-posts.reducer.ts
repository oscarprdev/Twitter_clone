import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { PostSliceState } from '../../../slices/posts-slice';
import { GetProfilePostsAction } from './get-profile-posts.types';

export const getProfilePostsReducer = (state: Draft<PostSliceState>, action: PayloadAction<GetProfilePostsAction>) => {
	return {
		...state,
		profilePosts: action.payload.posts,
	};
};
