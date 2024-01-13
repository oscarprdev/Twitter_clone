import { GetUnfollowersPorts } from './get-unfollowers.ports';
import { GetUnfollowersInput, GetUnfollowersUsecaseOutput } from './get-unfollowers.types';

export interface GetUnfollowersUsecase {
	getUnfollowers(input: GetUnfollowersInput): Promise<GetUnfollowersUsecaseOutput>;
}

export class DefaultGetUnfollowersUsecase implements GetUnfollowersUsecase {
	constructor(private readonly ports: GetUnfollowersPorts) {}

	async getUnfollowers({ userId }: GetUnfollowersInput): Promise<GetUnfollowersUsecaseOutput> {
		try {
			const { unfollowers, count } = await this.ports.getUnfollowers({ userId });

			return {
				state: 'success',
				unfollowers,
				count,
			};
		} catch (err: unknown) {
			return {
				error: `Error listing all unfollowers: ${err}`,
				state: 'error',
			};
		}
	}
}
