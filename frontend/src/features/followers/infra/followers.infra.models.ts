import { DbUser } from '../../shared/types/user';

export interface GetUnfollowersInfraResponse {
	unfollowers: DbUser[];
	count: number;
}

export interface GetUnfollowersInfraPayload {
	userId: string;
}

export interface AddFollowInfraPayload {
	userId: string;
	followTo: string;
}

export interface AddFollowInfraResponse {
	user: DbUser;
	followTo: DbUser;
}

export interface GetFollowersInfraPayload {
	userId: string;
}

export interface GetFollowersInfraResponse {
	followers: DbUser[];
	count: number;
}

export interface GetFollowingInfraPayload {
	userId: string;
}

export interface GetFollowingInfraResponse {
	following: DbUser[];
	count: number;
}
