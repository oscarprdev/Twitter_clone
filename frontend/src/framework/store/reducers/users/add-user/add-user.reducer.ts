import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { AddUserPayload } from './add-user.reducer.types';

export const AddUserReducer = (state: Draft<UsersSliceState>, action: PayloadAction<AddUserPayload>) => {
	return {
		...state,
		unfollowers: [...state.unfollowers, action.payload.user],
	};
};
