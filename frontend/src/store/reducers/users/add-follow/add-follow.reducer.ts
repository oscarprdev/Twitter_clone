import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { ADD_FOLLOWERS_TYPES, AddfollowersPayload } from './add-follow.types';

export const addFollowersReducer = (state: Draft<UsersSliceState>, action: PayloadAction<AddfollowersPayload>) => {
	switch (action.payload.type) {
		case ADD_FOLLOWERS_TYPES.ADD_FOLLOWERS:
			return {
				userLogged: state.userLogged,
				unfollowers: state.unfollowers.filter((unfollower) => unfollower.id !== action.payload.follower.id),
			};
		default:
			return state;
	}
};
