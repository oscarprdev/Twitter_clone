import { User } from '../../../../types/user';

enum UpdateUnfollowersTypes {
	updateUnfollowers = 'UPDATE_UNFOLLOWERS',
}

export interface UpdateUnfollowersPayload {
	type: UpdateUnfollowersTypes.updateUnfollowers;
	unfollowers: User[];
}

export const UPDATE_UNFOLLOWERS_TYPES = {
	UPDATE_UNFOLLOWERS: 'UPDATE_UNFOLLOWERS' as UpdateUnfollowersTypes.updateUnfollowers,
};
