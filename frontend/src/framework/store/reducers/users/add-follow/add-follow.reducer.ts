import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { AddfollowersPayload } from './add-follow.types';
import { cleanIsNewUsers } from '../../../../utils/cleanIsNewUsers';

export const addFollowersReducer = (state: Draft<UsersSliceState>, action: PayloadAction<AddfollowersPayload>) => {
	const userToUpdateStore = {
		...action.payload.follower,
		isNew: true,
	};

	return {
		...state,
		unfollowers: cleanIsNewUsers(state.unfollowers).filter((unfollower) => unfollower.id !== userToUpdateStore.id),
		followers: cleanIsNewUsers(state.followers).concat(userToUpdateStore),
	};
};
