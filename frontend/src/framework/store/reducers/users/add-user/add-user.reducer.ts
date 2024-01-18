import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersSliceState } from '../../../slices/users-slice';
import { AddUserPayload } from './add-user.reducer.types';
import { cleanIsNewUsers } from '../../../../utils/cleanIsNewUsers';

export const AddUserReducer = (state: Draft<UsersSliceState>, action: PayloadAction<AddUserPayload>) => {
	const userToUpdateStore = {
		...action.payload.user,
		isNew: true,
	};

	return {
		...state,
		unfollowers: cleanIsNewUsers(state.unfollowers).concat(userToUpdateStore),
	};
};
