import { User } from '../../../../features/shared/types/user';

enum AddfollowersTypes {
	addfollowers = 'ADD_FOLLOWERS',
}

export interface AddfollowersPayload {
	type: AddfollowersTypes.addfollowers;
	follower: User;
}

export const ADD_FOLLOWERS_TYPES = {
	ADD_FOLLOWERS: 'ADD_FOLLOWERS' as AddfollowersTypes.addfollowers,
};
