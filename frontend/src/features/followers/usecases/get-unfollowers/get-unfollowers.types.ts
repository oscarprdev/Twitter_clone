import { User } from '../../../../types/user';

export type GetUnfollowersUsecaseOutput = SuccessGetUnfollowersUsecaseOutput | ErrorGetUnfollowersUsecaseOutput;

interface SuccessGetUnfollowersUsecaseOutput {
	unfollowers: User[];
	count: number;
	state: 'success';
}

interface ErrorGetUnfollowersUsecaseOutput {
	error: string;
	state: 'error';
}

export interface GetUnfollowersInput {
	userId: string;
}
