import { User } from '../../../shared/types/user';

export interface GetUsersBySearchInput {
	searchValue: string;
}

export type GetUsersBySearchOutput = SuccessGetUsersBySearchOutput | ErrorGetUsersBySearchOutput;

interface SuccessGetUsersBySearchOutput {
	users: User[];
	state: 'success';
}

interface ErrorGetUsersBySearchOutput {
	error: string;
	state: 'error';
}
