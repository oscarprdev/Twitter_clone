import { User } from '../../../types/user';

export interface GetUnfollowersInfraResponse {
	unfollowers: User[];
	count: number;
}

export interface GetUnfollowersInfraPayload {
	userId: string;
}
