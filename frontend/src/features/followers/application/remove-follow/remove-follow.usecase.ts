import { RemoveFollowPorts } from './remove-follow.ports';
import { RemoveFollowInput, RemoveFollowOutput } from './remove-follow.types';

export interface RemoveFollowUsecase {
	removeFollow(input: RemoveFollowInput): Promise<RemoveFollowOutput>;
}

export class DefaultRemoveFollowUsecase implements RemoveFollowUsecase {
	constructor(private readonly ports: RemoveFollowPorts) {}

	async removeFollow({ userId, unfollowTo }: RemoveFollowInput): Promise<RemoveFollowOutput> {
		try {
			const { user, unfollowToUser } = await this.ports.removeFollow({ userId, unfollowTo });

			return {
				state: 'success',
				user,
				unfollowToUser,
			};
		} catch (err: unknown) {
			return {
				error: `Error removing follower: ${err}`,
				state: 'error',
			};
		}
	}
}
