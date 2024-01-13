import { User } from '../../../shared/domain/types/user';

export interface RemoveFollowInput {
	userId: string;
	unfollowTo: string;
}

export type RemoveFollowOutput = SuccessRemoveFollowOutput | ErrorRemoveFollowOutput;

interface SuccessRemoveFollowOutput {
	user: User;
	unfollowToUser: User;
	state: 'success';
}

interface ErrorRemoveFollowOutput {
	error: string;
	state: 'error';
}
