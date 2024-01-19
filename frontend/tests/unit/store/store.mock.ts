import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PostSliceState } from '../../../src/framework/store/slices/posts-slice';
import { getUserLoggedReducer } from '../../../src/framework/store/reducers/users/get-user-logged/get-user-logged.reducer';
import { updateUnfollowersReducer } from '../../../src/framework/store/reducers/users/update-unfollowers/update-unfollowers.reducer';
import { addFollowersReducer } from '../../../src/framework/store/reducers/users/add-follow/add-follow.reducer';
import { UsersSliceState } from '../../../src/framework/store/slices/users-slice';
import { userLoggedTestResponse } from '../../shared/responses/users.response';
import { getPostsReducer } from '../../../src/framework/store/reducers/posts/get-post/get-posts.reducer';
import { addPostReducer } from '../../../src/framework/store/reducers/posts/add-post/add-post.reducer';
import { removeFollowersReducer } from '../../../src/framework/store/reducers/users/remove-follow/remove-follow.reducer';
import { getProfilePostsReducer } from '../../../src/framework/store/reducers/posts/get-profile-posts/get-profile-posts.reducer';
import { updateUserLoggedReducer } from '../../../src/framework/store/reducers/users/udpate-user-logged/update-user-logged.reducer';
import { AddUserReducer } from '../../../src/framework/store/reducers/users/add-user/add-user.reducer';
import { showErrorReducer } from '../../../src/framework/store/reducers/errors/show-error.reducer';
import { removeErrorReducer } from '../../../src/framework/store/reducers/errors/remove-error.reducer';
import { ErrorSliceState } from '../../../src/framework/store/slices/error-slice';

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
