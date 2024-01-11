import { User } from '../../../shared/types/user';

export interface AddFollowInput {
	userId: string;
	followTo: string;
}

export type AddFollowOutput = SuccessAddFollowOutput | ErrorAddFollowOutput;

interface SuccessAddFollowOutput {
	user: User;
	followTo: User;
	state: 'success';
}

interface ErrorAddFollowOutput {
	error: string;
	state: 'error';
}
