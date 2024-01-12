import { User } from '../../../shared/types/user';

export interface GetFollowersInput {
	userId: string;
}

export type GetFollowersOutput = SuccessGetFollowersOutput | ErrorGetFollowersOutput;

interface SuccessGetFollowersOutput {
	followers: User[];
	count: number;
	state: 'success';
}

interface ErrorGetFollowersOutput {
	error: string;
	state: 'error';
}
