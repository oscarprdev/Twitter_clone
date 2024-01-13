import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { GetUserLoggedPayload } from './get-user-logged.types';

export const getUserLoggedReducer = (state: Draft<UsersSliceState>, action: PayloadAction<GetUserLoggedPayload>) => {
	return {
		userLogged: action.payload.user,
		unfollowers: state.unfollowers,
	};
};
