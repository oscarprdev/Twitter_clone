import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PostSlice } from '../../../store/slices/posts-slice';
import { getUserLoggedReducer } from '../../../store/reducers/users/get-user-logged/get-user-logged.reducer';
import { updateUnfollowersReducer } from '../../../store/reducers/users/update-unfollowers/update-unfollowers.reducer';
import { addFollowersReducer } from '../../../store/reducers/users/add-follow/add-follow.reducer';
import { userLoggedMocked, userMocked } from '../user.mock';
import { UsersSliceState } from '../../../store/slices/users-slice';

export const initialState: UsersSliceState = {
	userLogged: userLoggedMocked,
	unfollowers: [userMocked],
};

export const MockUsersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUserLogged: getUserLoggedReducer,
		updateUnfollowers: updateUnfollowersReducer,
		addFollow: addFollowersReducer,
	},
});

export const mockStore = configureStore({
	reducer: {
		posts: PostSlice.reducer,
		users: MockUsersSlice.reducer,
	},
});
