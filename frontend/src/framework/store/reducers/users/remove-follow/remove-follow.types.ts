import { User } from '../../../../../features/shared/domain/types/user';

export interface RemoveFollowerPayload {
	follower: User;
}
