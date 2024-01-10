import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { GET_USER_LOGGED_TYPES, GetUserLoggedPayload } from './get-user-logged.types';

export const getUserLoggedReducer = (state: Draft<UsersSliceState>, action: PayloadAction<GetUserLoggedPayload>) => {
	switch (action.payload.type) {
		case GET_USER_LOGGED_TYPES.GET_USER_LOGGED:
			return {
				userLogged: action.payload.user,
			};
		default:
			return state;
	}
};
