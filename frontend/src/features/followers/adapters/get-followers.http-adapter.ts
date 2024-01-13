import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { FollowersInfra } from '../infra/followers.infra';
import { GetFollowersPorts, GetFollowersPortsInput, GetFollowersPortsOutput } from '../application/get-followers/get-followers.ports';

export class GetFollowersHttpAdapter implements GetFollowersPorts {
	constructor(private readonly httpClient: FollowersInfra) {}

	async getFollowers({ userId }: GetFollowersPortsInput): Promise<GetFollowersPortsOutput> {
		const infraResponse = await this.httpClient.getFollowers({ userId });

		return {
			followers: infraResponse.followers.map((follower) => mapDbUserToApplication(follower)),
			count: infraResponse.count,
		};
	}
}
