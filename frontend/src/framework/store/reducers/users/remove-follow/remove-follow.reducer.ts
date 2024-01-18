import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { RemoveFollowerPayload } from './remove-follow.types';
import { cleanIsNewUsers } from '../../../../utils/cleanIsNewUsers';

export const removeFollowersReducer = (state: Draft<UsersSliceState>, action: PayloadAction<RemoveFollowerPayload>) => {
	const userToUpdateStore = {
		...action.payload.follower,
		isNew: true,
	};

	return {
		...state,
		followers: cleanIsNewUsers(state.followers).filter((follower) => follower.id !== userToUpdateStore.id),
		unfollowers: cleanIsNewUsers(state.unfollowers).concat(userToUpdateStore),
	};
};
