import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { GetUserPorts } from '../application/get-user/get-user.ports';
import { UsersInfra } from '../infra/users.infra';

export class GetUserHttpAdapter implements GetUserPorts {
	constructor(private readonly httpClient: UsersInfra) {}

	async getUser(input: GetUserPorts.GetUserInput): Promise<GetUserPorts.GetUserOutput> {
		const { user } = await this.httpClient.getUserById({ userId: input.userId });

		return {
			user: mapDbUserToApplication(user),
		};
	}
}
