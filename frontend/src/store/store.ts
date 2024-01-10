import { configureStore } from '@reduxjs/toolkit';
import { PostSlice } from './slices/posts-slice';
import { UsersSlice } from './slices/users-slice';

export const store = configureStore({
	reducer: {
		posts: PostSlice.reducer,
		users: UsersSlice.reducer,
	},
});
