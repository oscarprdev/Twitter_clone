import { User } from '../../../shared/domain/types/user';

export type GetAllUsersOutput = SuccessGetAllUsersOutput | ErrorGetAllUsersOutput;

interface SuccessGetAllUsersOutput {
	users: User[];
	state: 'success';
}

interface ErrorGetAllUsersOutput {
	error: string;
	state: 'error';
}
