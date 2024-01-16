import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../features/shared/domain/types/user';
import { getUserLoggedReducer } from '../reducers/users/get-user-logged/get-user-logged.reducer';
import { updateUnfollowersReducer } from '../reducers/users/update-unfollowers/update-unfollowers.reducer';
import { addFollowersReducer } from '../reducers/users/add-follow/add-follow.reducer';
import { removeFollowersReducer } from '../reducers/users/remove-follow/remove-follow.reducer';
import { updateUserLoggedReducer } from '../reducers/users/udpate-user-logged/update-user-logged.reducer';
import { AddUserReducer } from '../reducers/users/add-user/add-user.reducer';

export interface UsersSliceState {
	userLogged: User;
	unfollowers: User[];
	followers: User[];
}

const initialState: UsersSliceState = {
	userLogged: {
		id: '',
		createdAt: '',
		updatedAt: '',
		name: '',
		surname: '',
		username: '',
		email: '',
		profileImgUrl: '',
		profileBgImgUrl: '',
	},
	unfollowers: [],
	followers: [],
};

export const UsersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUserLogged: getUserLoggedReducer,
		updateUserLogged: updateUserLoggedReducer,
		updateUnfollowers: updateUnfollowersReducer,
		addFollow: addFollowersReducer,
		removeFollow: removeFollowersReducer,
		addUser: AddUserReducer,
	},
});

export const { getUserLogged, updateUserLogged, updateUnfollowers, addFollow, removeFollow, addUser } = UsersSlice.actions;

export default UsersSlice.reducer;
