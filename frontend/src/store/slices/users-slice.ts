import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { getUserLoggedReducer } from '../reducers/users/get-user-logged/get-user-logged.reducer';
import { updateUnfollowersReducer } from '../reducers/users/update-unfollowers/unfollowers.reducer';

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
	},
});

export const { getUserLogged, updateUnfollowers } = UsersSlice.actions;

export default UsersSlice.reducer;
