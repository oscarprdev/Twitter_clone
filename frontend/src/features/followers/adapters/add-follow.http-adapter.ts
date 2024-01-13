import { FollowersInfra } from '../infra/followers.infra';
import { AddFollowPorts } from '../application/add-follow/add-follow.ports';
import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';

export class AddFollowHttpAdapter implements AddFollowPorts {
	constructor(private readonly httpClient: FollowersInfra) {}

	async addFollow({ userId, followTo }: AddFollowPorts.AddFollowInput): Promise<AddFollowPorts.AddFollowOutput> {
		const infraResponse = await this.httpClient.addFollow({ userId, followTo });

		return {
			user: mapDbUserToApplication(infraResponse.user),
			followTo: mapDbUserToApplication(infraResponse.followTo),
		};
	}
}
