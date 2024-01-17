import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { GetAllUsersPorts } from '../application/get-all-users/get-all-users.port';
import { UsersInfra } from '../infra/users.infra';

export class GetAllUsersHttpAdapter implements GetAllUsersPorts {
	constructor(private readonly httpClient: UsersInfra) {}

	async getAllUsers(): Promise<GetAllUsersPorts.GetAllUsersOutput> {
		const { users } = await this.httpClient.getAllUsers();

		return {
			users: users.map((user) => mapDbUserToApplication(user)),
		};
	}
}
