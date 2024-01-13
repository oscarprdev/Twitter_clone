import { User } from '../../../../../features/shared/domain/types/user';

export interface UpdateUnfollowersPayload {
	unfollowers: User[];
}
