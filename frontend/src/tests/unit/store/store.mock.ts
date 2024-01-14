import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PostSliceState } from '../../../framework/store/slices/posts-slice';
import { getUserLoggedReducer } from '../../../framework/store/reducers/users/get-user-logged/get-user-logged.reducer';
import { updateUnfollowersReducer } from '../../../framework/store/reducers/users/update-unfollowers/update-unfollowers.reducer';
import { addFollowersReducer } from '../../../framework/store/reducers/users/add-follow/add-follow.reducer';
import { UsersSliceState } from '../../../framework/store/slices/users-slice';
import { userLoggedTestResponse } from '../responses/users.response';
import { getPostsReducer } from '../../../framework/store/reducers/posts/get-post/get-posts.reducer';
import { addPostReducer } from '../../../framework/store/reducers/posts/add-post/add-post.reducer';
import { removeFollowersReducer } from '../../../framework/store/reducers/users/remove-follow/remove-follow.reducer';

export const testUsersInitialState: UsersSliceState = {
	userLogged: userLoggedTestResponse,
	unfollowers: [],
	followers: [],
};

export const MockUsersSlice = createSlice({
	name: 'users',
	initialState: testUsersInitialState,
	reducers: {
		getUserLogged: getUserLoggedReducer,
		updateUnfollowers: updateUnfollowersReducer,
		addFollow: addFollowersReducer,
		removeFollow: removeFollowersReducer,
	},
});

export const testPostsInitialState: PostSliceState = {
	posts: [],
	isLoading: false,
};

export const MockPostSlice = createSlice({
	name: 'posts',
	initialState: testPostsInitialState,
	reducers: {
		getPosts: getPostsReducer,
		addPost: addPostReducer,
	},
});

export const mockStore = configureStore({
	reducer: {
		posts: MockPostSlice.reducer,
		users: MockUsersSlice.reducer,
	},
});
