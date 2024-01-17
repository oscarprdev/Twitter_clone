import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { UpdateUserLoggedPayload } from './update-user-logged.types';

export const updateUserLoggedReducer = (state: Draft<UsersSliceState>, action: PayloadAction<UpdateUserLoggedPayload>) => {
	return {
		...state,
		userLogged: action.payload.user,
	};
};
