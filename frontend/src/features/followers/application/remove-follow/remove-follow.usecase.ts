import { StateUsecase } from '../../../shared/application/redux.usecase';
import { RemoveFollowPorts } from './remove-follow.ports';
import { RemoveFollowInput } from './remove-follow.types';

export interface RemoveFollowUsecase {
	removeFollow(input: RemoveFollowInput): Promise<void>;
}

export class DefaultRemoveFollowUsecase implements RemoveFollowUsecase {
	constructor(private readonly ports: RemoveFollowPorts, private readonly stateUsecase: StateUsecase) {}

	async removeFollow({ userId, unfollowTo }: RemoveFollowInput): Promise<void> {
		try {
			const { unfollowToUser } = await this.ports.removeFollow({ userId, unfollowTo });

			this.stateUsecase.removeFollow(unfollowToUser);
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error removing follower: ${err}`);
		}
	}
}
