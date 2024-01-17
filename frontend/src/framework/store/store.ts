import { configureStore } from '@reduxjs/toolkit';
import { PostSlice } from './slices/posts-slice';
import { UsersSlice } from './slices/users-slice';
import { ErrorsSlice } from './slices/error-slice';

export const store = configureStore({
	reducer: {
		posts: PostSlice.reducer,
		users: UsersSlice.reducer,
		errors: ErrorsSlice.reducer,
	},
});
