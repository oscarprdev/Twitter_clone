import { User } from '../../../shared/domain/types/user';

export interface GetUserAuthInput {
	jwt: string;
}

export type GetUserAuthOutput = SuccessGetUserAuthOutput | ErrorGetUserAuthOutput;

interface SuccessGetUserAuthOutput {
	user: User;
	state: 'success';
}

interface ErrorGetUserAuthOutput {
	error: string;
	state: 'error';
}
