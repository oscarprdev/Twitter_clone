import { User } from '../../../shared/domain/types/user';

export interface GetAllUsersPorts {
	getAllUsers(): Promise<GetAllUsersPorts.GetAllUsersOutput>;
}

export namespace GetAllUsersPorts {
	export interface GetAllUsersOutput {
		users: User[];
	}
}
