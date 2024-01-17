import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { UsersInfra } from '../infra/users.infra';
import { SearchUsersPorts } from '../application/search-users/search-users.ports';

export class SearchUsersHttpAdapter implements SearchUsersPorts {
	constructor(private readonly httpClient: UsersInfra) {}

	async getUsersBySearch(input: SearchUsersPorts.GetUsersBySearchInput): Promise<SearchUsersPorts.GetUsersBySearchOutput> {
		const { users } = await this.httpClient.getUsersBySearch({ searchValue: input.searchValue });

		return {
			users: users.map((dbUser) => mapDbUserToApplication(dbUser)),
		};
	}
}
