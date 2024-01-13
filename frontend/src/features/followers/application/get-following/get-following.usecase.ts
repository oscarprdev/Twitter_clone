import { GetFollowingPorts } from './get-followers.ports';
import { GetFollowingInput, GetFollowingOutput } from './get-followers.types';

export interface GetFollowingUsecase {
	getFollowing(input: GetFollowingInput): Promise<GetFollowingOutput>;
}

export class DefaultGetFollowingUsecase implements GetFollowingUsecase {
	constructor(private readonly ports: GetFollowingPorts) {}

	async getFollowing(input: GetFollowingInput): Promise<GetFollowingOutput> {
		try {
			const { following, count } = await this.ports.getFollowing({ userId: input.userId });

			return {
				following,
				count,
				state: 'success',
			};
		} catch (err: unknown) {
			return {
				error: `Error listing all following: ${err}`,
				state: 'error',
			};
		}
	}
}
