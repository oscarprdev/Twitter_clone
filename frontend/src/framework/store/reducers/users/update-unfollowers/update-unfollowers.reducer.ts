import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { UpdateUnfollowersPayload } from './update-unfollowers.types';

export const updateUnfollowersReducer = (state: Draft<UsersSliceState>, action: PayloadAction<UpdateUnfollowersPayload>) => {
	return {
		...state,
		unfollowers: action.payload.unfollowers,
	};
};
