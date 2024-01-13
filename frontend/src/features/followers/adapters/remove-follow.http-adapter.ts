import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { RemoveFollowPorts } from '../application/remove-follow/remove-follow.ports';
import { FollowersInfra } from '../infra/followers.infra';

export class RemoveFollowHttpAdapter implements RemoveFollowPorts {
	constructor(private readonly httpClient: FollowersInfra) {}

	async removeFollow(input: RemoveFollowPorts.RemoveFollowInput): Promise<RemoveFollowPorts.RemoveFollowOutput> {
		const { user, unfollowTo } = await this.httpClient.removeFollow({ userId: input.userId, unfollowTo: input.unfollowTo });

		return {
			user: mapDbUserToApplication(user),
			unfollowToUser: mapDbUserToApplication(unfollowTo),
		};
	}
}
