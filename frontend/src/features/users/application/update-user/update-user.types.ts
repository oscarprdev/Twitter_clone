import { User } from '../../../shared/domain/types/user';

export interface UpdateUserInput {
	name: string;
	surname: string;
	file: File | null;
	userId: string;
	prevImage: string;
}

export type UpdateUserOutput = SuccessUpdateUserOutput | ErrorUpdateUserOutput;

interface SuccessUpdateUserOutput {
	user: User;
	state: 'success';
}

interface ErrorUpdateUserOutput {
	error: string;
	state: 'error';
}
