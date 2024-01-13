import { AddFollowPorts } from './add-follow.ports';
import { AddFollowInput, AddFollowOutput } from './add-follow.types';

interface AddFollowUsecase {
	addFollow(input: AddFollowInput): Promise<AddFollowOutput>;
}

export class DefaultAddFollowUsecase implements AddFollowUsecase {
	constructor(private readonly ports: AddFollowPorts) {}

	async addFollow(input: AddFollowInput): Promise<AddFollowOutput> {
		try {
			const { user, followTo } = await this.ports.addFollow({ userId: input.userId, followTo: input.followTo });

			return {
				state: 'success',
				user,
				followTo,
			};
		} catch (err: unknown) {
			return {
				error: `Error listing all unfollowers: ${err}`,
				state: 'error',
			};
		}
	}
}
