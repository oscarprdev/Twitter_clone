import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { UPDATE_UNFOLLOWERS_TYPES, UpdateUnfollowersPayload } from './update-unfollowers.types';

export const updateUnfollowersReducer = (state: Draft<UsersSliceState>, action: PayloadAction<UpdateUnfollowersPayload>) => {
	switch (action.payload.type) {
		case UPDATE_UNFOLLOWERS_TYPES.UPDATE_UNFOLLOWERS:
			return {
				userLogged: state.userLogged,
				unfollowers: action.payload.unfollowers,
			};
		default:
			return state;
	}
};
