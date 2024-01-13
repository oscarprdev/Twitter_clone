import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { RemoveFollowerPayload } from './remove-follow.types';

export const removeFollowersReducer = (state: Draft<UsersSliceState>, action: PayloadAction<RemoveFollowerPayload>) => {
	return {
		...state,
		followers: state.followers.filter((follower) => follower.id !== action.payload.follower.id),
		unfollowers: state.unfollowers.concat(action.payload.follower),
	};
};
