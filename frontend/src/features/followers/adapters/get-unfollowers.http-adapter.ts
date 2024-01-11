import { FollowersInfra } from '../infra/followers.infra';
import { GetUnfollowersPorts } from '../usecases/get-unfollowers/get-unfollowers.ports';
import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';

export class GetUnfollowersHttpAdapter implements GetUnfollowersPorts {
	constructor(private readonly httpClient: FollowersInfra) {}

	async getUnfollowers({ userId }: GetUnfollowersPorts.GetUnfollowersInput): Promise<GetUnfollowersPorts.GetUnfollowersOutput> {
		const { unfollowers, count } = await this.httpClient.getUnfollowers({ userId });

		return {
			unfollowers: unfollowers.map((unfollower) => mapDbUserToApplication(unfollower)),
			count,
		};
	}
}
