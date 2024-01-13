import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { FollowersInfra } from '../infra/followers.infra';
import { GetFollowingPorts, GetFollowingPortsInput, GetFollowingPortsOutput } from '../application/get-following/get-followers.ports';

export class GetFollowingHttpAdapter implements GetFollowingPorts {
	constructor(private readonly httpClient: FollowersInfra) {}

	async getFollowing({ userId }: GetFollowingPortsInput): Promise<GetFollowingPortsOutput> {
		const infraResponse = await this.httpClient.getFollowing({ userId });

		return {
			following: infraResponse.following.map((following) => mapDbUserToApplication(following)),
			count: infraResponse.count,
		};
	}
}
