import { User } from '../../../shared/domain/types/user';

export interface GetUserPorts {
	getUser(input: GetUserPorts.GetUserInput): Promise<GetUserPorts.GetUserOutput>;
}

export namespace GetUserPorts {
	export interface GetUserInput {
		userId: string;
	}

	export interface GetUserOutput {
		user: User;
	}
}
