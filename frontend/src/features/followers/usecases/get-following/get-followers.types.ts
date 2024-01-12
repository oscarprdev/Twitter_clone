import { User } from '../../../shared/types/user';

export interface GetFollowingInput {
	userId: string;
}

export type GetFollowingOutput = SuccessGetFollowingOutput | ErrorGetFollowingOutput;

interface SuccessGetFollowingOutput {
	following: User[];
	count: number;
	state: 'success';
}

interface ErrorGetFollowingOutput {
	error: string;
	state: 'error';
}
