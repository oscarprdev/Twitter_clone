import { User } from '../../../shared/types/user';

export interface GetFollowingPorts {
	getFollowing(input: GetFollowingPortsInput): Promise<GetFollowingPortsOutput>;
}

export interface GetFollowingPortsInput {
	userId: string;
}

export interface GetFollowingPortsOutput {
	following: User[];
	count: number;
}
