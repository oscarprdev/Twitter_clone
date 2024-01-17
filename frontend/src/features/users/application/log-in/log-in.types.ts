import { User } from '../../../shared/domain/types/user';

export interface LogInInput {
	email: string;
	password: string;
}

export type LogInOutput = SuccessLogInOutput | ErrorLogInOutput;

interface SuccessLogInOutput {
	user: User;
	state: 'success';
}

interface ErrorLogInOutput {
	error: string;
	state: 'error';
}
