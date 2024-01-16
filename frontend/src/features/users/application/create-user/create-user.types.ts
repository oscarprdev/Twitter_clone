import { User } from '../../../shared/domain/types/user';

export interface CreateUserInput {
	name: string;
	surname: string;
	username: string;
	password: string;
	email: string;
	file: File | null;
	prevImage: string;
}

export type CreateUserOutput = SuccessCreateUserOutput | ErrorCreateUserOutput;

interface SuccessCreateUserOutput {
	user: User;
	state: 'success';
}

interface ErrorCreateUserOutput {
	error: string;
	state: 'error';
}
