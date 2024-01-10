import { FollowersInfra } from '../infra/followers.infra';
import { GetUnfollowersPorts } from '../usecases/get-unfollowers/get-unfollowers.ports';

export class GetUnfollowersHttpAdapter implements GetUnfollowersPorts {
	constructor(private readonly httpClient: FollowersInfra) {}

	async getUnfollowers({ userId }: GetUnfollowersPorts.GetUnfollowersInput): Promise<GetUnfollowersPorts.GetUnfollowersOutput> {
		const { unfollowers, count } = await this.httpClient.getUnfollowers({ userId });

		return {
			unfollowers,
			count,
		};
	}
}
