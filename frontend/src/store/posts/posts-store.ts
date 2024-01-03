import { configureStore } from '@reduxjs/toolkit';
import { PostSlice } from './slices/posts-slice';

export const postsStore = configureStore({
	reducer: {
		posts: PostSlice.reducer,
	},
});
