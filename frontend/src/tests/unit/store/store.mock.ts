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
import { getProfilePostsReducer } from '../../../framework/store/reducers/posts/get-profile-posts/get-profile-posts.reducer';
import { updateUserLoggedReducer } from '../../../framework/store/reducers/users/udpate-user-logged/update-user-logged.reducer';
import { AddUserReducer } from '../../../framework/store/reducers/users/add-user/add-user.reducer';
import { showErrorReducer } from '../../../framework/store/reducers/errors/show-error.reducer';
import { removeErrorReducer } from '../../../framework/store/reducers/errors/remove-error.reducer';
import { ErrorSliceState } from '../../../framework/store/slices/error-slice';

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
		updateUserLogged: updateUserLoggedReducer,
		updateUnfollowers: updateUnfollowersReducer,
		addFollow: addFollowersReducer,
		removeFollow: removeFollowersReducer,
		addUser: AddUserReducer,
	},
});

export const testPostsInitialState: PostSliceState = {
	posts: [],
	profilePosts: [],
};

export const MockPostSlice = createSlice({
	name: 'posts',
	initialState: testPostsInitialState,
	reducers: {
		getPosts: getPostsReducer,
		addPost: addPostReducer,
		getProfilePosts: getProfilePostsReducer,
	},
});

const testErrorInitialState: ErrorSliceState = {
	errorMessage: null,
};

export const MockErrorsSlice = createSlice({
	name: 'errors',
	initialState: testErrorInitialState,
	reducers: {
		showError: showErrorReducer,
		removeError: removeErrorReducer,
	},
});

export const mockStore = configureStore({
	reducer: {
		posts: MockPostSlice.reducer,
		users: MockUsersSlice.reducer,
		errors: MockErrorsSlice.reducer,
	},
});
