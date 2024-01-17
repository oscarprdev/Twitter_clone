import { User } from '../../../shared/domain/types/user';

export interface GetUserAuthPorts {
	getUserAuth(input: GetUserAuthPorts.GetUserAuthInput): Promise<GetUserAuthPorts.GetUserAuthOutput>;
}

export namespace GetUserAuthPorts {
	export interface GetUserAuthInput {
		jwt: string;
	}

	export interface GetUserAuthOutput {
		user: User;
	}
}
