import { User } from '../../../shared/domain/types/user';

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
