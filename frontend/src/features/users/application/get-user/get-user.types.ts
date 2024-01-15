import { User } from '../../../shared/domain/types/user';

export interface GetUserInput {
	userId: string;
}

export type GetUserOutput = SuccessGetUserOutput | ErrorGetUserOutput;

interface SuccessGetUserOutput {
	user: User;
	state: 'success';
}

interface ErrorGetUserOutput {
	error: string;
	state: 'error';
}
