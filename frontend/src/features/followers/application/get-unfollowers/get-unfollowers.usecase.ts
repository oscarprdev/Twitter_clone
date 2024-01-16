import { StateUsecase } from '../../../shared/application/redux.usecase';
import { GetUnfollowersPorts } from './get-unfollowers.ports';
import { GetUnfollowersInput } from './get-unfollowers.types';

export interface GetUnfollowersUsecase {
	getUnfollowers(input: GetUnfollowersInput): Promise<void>;
}

export class DefaultGetUnfollowersUsecase implements GetUnfollowersUsecase {
	constructor(private readonly ports: GetUnfollowersPorts, private readonly stateUsecase: StateUsecase) {}

	async getUnfollowers({ userId }: GetUnfollowersInput): Promise<void> {
		try {
			const { unfollowers } = await this.ports.getUnfollowers({ userId });

			this.stateUsecase.updateUnfollowers(unfollowers);
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error providing unfollowers: ${err}`);
		}
	}
}
