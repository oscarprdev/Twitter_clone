import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { GetUserAuthPorts } from '../application/get-user-auth/get-user-auth.ports';
import { UsersInfra } from '../infra/users.infra';

export class GetUserAuthHttpAdapter implements GetUserAuthPorts {
	constructor(private readonly httpClient: UsersInfra) {}

	async getUserAuth({ jwt }: GetUserAuthPorts.GetUserAuthInput): Promise<GetUserAuthPorts.GetUserAuthOutput> {
		const { user } = await this.httpClient.getUserByAuth({ jwt });

		return {
			user: mapDbUserToApplication(user),
		};
	}
}
