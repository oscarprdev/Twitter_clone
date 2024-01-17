import { User } from '../../../shared/domain/types/user';

export interface RemoveFollowPorts {
	removeFollow(input: RemoveFollowPorts.RemoveFollowInput): Promise<RemoveFollowPorts.RemoveFollowOutput>;
}

export namespace RemoveFollowPorts {
	export interface RemoveFollowInput {
		userId: string;
		unfollowTo: string;
	}

	export interface RemoveFollowOutput {
		user: User;
		unfollowToUser: User;
	}
}
