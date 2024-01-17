import { StateUsecase } from '../../../shared/application/redux.usecase';
import { AddFollowPorts } from './add-follow.ports';
import { AddFollowInput } from './add-follow.types';

interface AddFollowUsecase {
	addFollow(input: AddFollowInput): Promise<void>;
}

export class DefaultAddFollowUsecase implements AddFollowUsecase {
	constructor(private readonly ports: AddFollowPorts, private readonly stateUsecase: StateUsecase) {}

	async addFollow(input: AddFollowInput): Promise<void> {
		try {
			const { followTo } = await this.ports.addFollow({ userId: input.userId, followTo: input.followTo });

			this.stateUsecase.addFollow(followTo);
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error listing all unfollowers: ${err}`);
		}
	}
}
