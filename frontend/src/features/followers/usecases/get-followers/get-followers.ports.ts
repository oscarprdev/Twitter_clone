import { User } from '../../../shared/domain/types/user';

export interface GetFollowersPorts {
	getFollowers(input: GetFollowersPortsInput): Promise<GetFollowersPortsOutput>;
}

export interface GetFollowersPortsInput {
	userId: string;
}

export interface GetFollowersPortsOutput {
	followers: User[];
	count: number;
}
