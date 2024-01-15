import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { AddfollowersPayload } from './add-follow.types';

export const addFollowersReducer = (state: Draft<UsersSliceState>, action: PayloadAction<AddfollowersPayload>) => {
	return {
		...state,
		unfollowers: state.unfollowers.filter((unfollower) => unfollower.id !== action.payload.follower.id),
		followers: state.followers.concat(action.payload.follower),
	};
};