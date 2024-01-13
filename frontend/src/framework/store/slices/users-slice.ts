import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../features/shared/types/user';
import { getUserLoggedReducer } from '../reducers/users/get-user-logged/get-user-logged.reducer';
import { updateUnfollowersReducer } from '../reducers/users/update-unfollowers/update-unfollowers.reducer';
import { addFollowersReducer } from '../reducers/users/add-follow/add-follow.reducer';

export interface UsersSliceState {
	userLogged: User;
	unfollowers: User[];
}

const initialState: UsersSliceState = {
	userLogged: {
		id: '10cf35c4-adab-4057-b41b-6f55d0d0af7d',
		createdAt: '2024-01-10T11:29:27.134295Z',
		updatedAt: '2024-01-10T11:29:27.134295Z',
		name: 'Oscar',
		surname: 'Perez',
		username: 'oscarpr',
		email: 'oscarperez@email.com',
		profileImgUrl: 'https://pub-43949222ba2448cbbff5d5c5019cd5e6.r2.dev/personal-image.jpeg',
		profileBgImgUrl: '',
	},
	unfollowers: [],
};

export const UsersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUserLogged: getUserLoggedReducer,
		updateUnfollowers: updateUnfollowersReducer,
		addFollow: addFollowersReducer,
	},
});

export const { getUserLogged, updateUnfollowers, addFollow } = UsersSlice.actions;

export default UsersSlice.reducer;
