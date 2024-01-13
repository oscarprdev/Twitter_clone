import { GetFollowersPorts } from './get-followers.ports';
import { GetFollowersInput, GetFollowersOutput } from './get-followers.types';

export interface GetFollowersUsecase {
	getFollowers(input: GetFollowersInput): Promise<GetFollowersOutput>;
}

export class DefaultGetFollowersUsecase implements GetFollowersUsecase {
	constructor(private readonly ports: GetFollowersPorts) {}

	async getFollowers(input: GetFollowersInput): Promise<GetFollowersOutput> {
		try {
			const { followers, count } = await this.ports.getFollowers({ userId: input.userId });

			return {
				followers,
				count,
				state: 'success',
			};
		} catch (err: unknown) {
			return {
				error: `Error listing all followers: ${err}`,
				state: 'error',
			};
		}
	}
}
