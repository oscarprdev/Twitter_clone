import { User } from '../../../shared/domain/types/user';

export interface GetUserInput {
	userId: string;
}

export interface GetUserOutput {
	user?: User;
}
