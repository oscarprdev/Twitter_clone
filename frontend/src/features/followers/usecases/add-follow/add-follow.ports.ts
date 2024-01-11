import { User } from '../../../shared/types/user';

export interface AddFollowPorts {
	addFollow(input: AddFollowPorts.AddFollowInput): Promise<AddFollowPorts.AddFollowOutput>;
}

export namespace AddFollowPorts {
	export interface AddFollowInput {
		userId: string;
		followTo: string;
	}

	export interface AddFollowOutput {
		user: User;
		followTo: User;
	}
}
